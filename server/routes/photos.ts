import { RequestHandler } from "express";
import { database } from "../database";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer for photo uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), 'public', 'gallery');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPG, PNG, and WEBP are allowed.'));
    }
  }
});

// Get all photos
export const getPhotos: RequestHandler = async (req, res) => {
  try {
    const { category, search } = req.query;
    let sql = 'SELECT * FROM photos ORDER BY created_at DESC';
    const params: any[] = [];

    if (category && category !== 'all') {
      sql = 'SELECT * FROM photos WHERE category = ? ORDER BY created_at DESC';
      params.push(category);
    }

    const photos = await database.all(sql, params);
    
    // Filter by search term if provided
    let filteredPhotos = photos;
    if (search) {
      const searchTerm = (search as string).toLowerCase();
      filteredPhotos = photos.filter(photo => 
        photo.title.toLowerCase().includes(searchTerm) ||
        photo.description.toLowerCase().includes(searchTerm) ||
        photo.tags.toLowerCase().includes(searchTerm)
      );
    }

    res.json({ success: true, photos: filteredPhotos });
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch photos' });
  }
};

// Upload new photo
export const uploadPhoto: RequestHandler = async (req, res) => {
  upload.single('photo')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err.message });
    }

    try {
      if (!req.file) {
        return res.status(400).json({ success: false, error: 'No file uploaded' });
      }

      const { title, description, category, photographer, location, date_taken, tags } = req.body;

      if (!title || !category) {
        return res.status(400).json({ success: false, error: 'Title and category are required' });
      }

      const filePath = `/gallery/${req.file.filename}`;

      const result = await database.run(
        `INSERT INTO photos (title, description, category, file_path, photographer, location, date_taken, tags)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [title, description, category, filePath, photographer, location, date_taken, tags]
      );

      const newPhoto = await database.get('SELECT * FROM photos WHERE id = ?', [result.id]);

      res.json({ 
        success: true, 
        message: 'Photo uploaded successfully',
        photo: newPhoto 
      });
    } catch (error) {
      console.error('Error uploading photo:', error);
      res.status(500).json({ success: false, error: 'Failed to upload photo' });
    }
  });
};

// Like a photo
export const likePhoto: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const clientIp = req.ip || req.connection.remoteAddress || 'unknown';

    // Check if already liked by this IP
    const existingLike = await database.get(
      'SELECT id FROM photo_likes WHERE photo_id = ? AND ip_address = ?',
      [id, clientIp]
    );

    if (existingLike) {
      // Unlike - remove the like
      await database.run(
        'DELETE FROM photo_likes WHERE photo_id = ? AND ip_address = ?',
        [id, clientIp]
      );
      
      // Update likes count
      await database.run(
        'UPDATE photos SET likes_count = likes_count - 1 WHERE id = ?',
        [id]
      );

      res.json({ success: true, message: 'Photo unliked', liked: false });
    } else {
      // Like - add the like
      await database.run(
        'INSERT INTO photo_likes (photo_id, ip_address) VALUES (?, ?)',
        [id, clientIp]
      );
      
      // Update likes count
      await database.run(
        'UPDATE photos SET likes_count = likes_count + 1 WHERE id = ?',
        [id]
      );

      res.json({ success: true, message: 'Photo liked', liked: true });
    }

    // Get updated photo with like count
    const photo = await database.get('SELECT * FROM photos WHERE id = ?', [id]);
    res.json({ success: true, photo, liked: !existingLike });

  } catch (error) {
    console.error('Error liking photo:', error);
    res.status(500).json({ success: false, error: 'Failed to like photo' });
  }
};

// Get photo by ID
export const getPhoto: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await database.get('SELECT * FROM photos WHERE id = ?', [id]);
    
    if (!photo) {
      return res.status(404).json({ success: false, error: 'Photo not found' });
    }

    res.json({ success: true, photo });
  } catch (error) {
    console.error('Error fetching photo:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch photo' });
  }
};

// Delete photo
export const deletePhoto: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get photo to delete file
    const photo = await database.get('SELECT * FROM photos WHERE id = ?', [id]);
    
    if (!photo) {
      return res.status(404).json({ success: false, error: 'Photo not found' });
    }

    // Delete file if it exists and not a placeholder
    if (photo.file_path !== '/placeholder.svg') {
      const filePath = path.join(process.cwd(), 'public', photo.file_path);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    // Delete from database
    await database.run('DELETE FROM photos WHERE id = ?', [id]);

    res.json({ success: true, message: 'Photo deleted successfully' });
  } catch (error) {
    console.error('Error deleting photo:', error);
    res.status(500).json({ success: false, error: 'Failed to delete photo' });
  }
};

// Download photo
export const downloadPhoto: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await database.get('SELECT * FROM photos WHERE id = ?', [id]);
    
    if (!photo) {
      return res.status(404).json({ success: false, error: 'Photo not found' });
    }

    if (photo.file_path === '/placeholder.svg') {
      return res.status(400).json({ success: false, error: 'Cannot download placeholder image' });
    }

    const filePath = path.join(process.cwd(), 'public', photo.file_path);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: 'File not found' });
    }

    const fileName = `${photo.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}${path.extname(filePath)}`;
    
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).json({ success: false, error: 'Failed to download photo' });
      }
    });
  } catch (error) {
    console.error('Error downloading photo:', error);
    res.status(500).json({ success: false, error: 'Failed to download photo' });
  }
};
