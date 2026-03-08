import { RequestHandler } from "express";
import { database } from "../database";

interface CommentData {
  page_type: string;
  page_id: string;
  author_name: string;
  author_email?: string;
  comment: string;
}

// Get comments for a specific page
export const getComments: RequestHandler = async (req, res) => {
  try {
    const { page_type, page_id } = req.params;
    const { approved_only = 'true' } = req.query;

    let sql = 'SELECT * FROM comments WHERE page_type = ? AND page_id = ? ORDER BY created_at DESC';
    const params = [page_type, page_id];

    if (approved_only === 'true') {
      sql = 'SELECT * FROM comments WHERE page_type = ? AND page_id = ? AND approved = 1 ORDER BY created_at DESC';
    }

    const comments = await database.all(sql, params);

    res.json({ success: true, comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch comments' });
  }
};

// Create new comment
export const createComment: RequestHandler = async (req, res) => {
  try {
    const { page_type, page_id, author_name, author_email, comment }: CommentData = req.body;

    // Validate required fields
    if (!page_type || !page_id || !author_name || !comment) {
      return res.status(400).json({
        success: false,
        error: 'Page type, page ID, author name, and comment are required'
      });
    }

    // Validate email format if provided
    if (author_email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(author_email)) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid email address'
        });
      }
    }

    // Auto-approve comments (you can change this logic)
    const approved = true; // For family website, we'll auto-approve

    const result = await database.run(
      `INSERT INTO comments (page_type, page_id, author_name, author_email, comment, approved)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [page_type, page_id, author_name, author_email || null, comment, approved]
    );

    const newComment = await database.get('SELECT * FROM comments WHERE id = ?', [result.id]);

    res.json({
      success: true,
      message: 'Comment posted successfully',
      comment: newComment
    });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ success: false, error: 'Failed to post comment' });
  }
};

// Get all comments (admin function)
export const getAllComments: RequestHandler = async (req, res) => {
  try {
    const { approved, limit = 100 } = req.query;
    let sql = 'SELECT * FROM comments ORDER BY created_at DESC LIMIT ?';
    const params: any[] = [Number(limit)];

    if (approved === 'true') {
      sql = 'SELECT * FROM comments WHERE approved = 1 ORDER BY created_at DESC LIMIT ?';
    } else if (approved === 'false') {
      sql = 'SELECT * FROM comments WHERE approved = 0 ORDER BY created_at DESC LIMIT ?';
    }

    const comments = await database.all(sql, params);

    res.json({ success: true, comments });
  } catch (error) {
    console.error('Error fetching all comments:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch comments' });
  }
};

// Approve/disapprove comment
export const updateCommentApproval: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { approved } = req.body;

    if (typeof approved !== 'boolean') {
      return res.status(400).json({
        success: false,
        error: 'Approved field must be true or false'
      });
    }

    const result = await database.run(
      'UPDATE comments SET approved = ? WHERE id = ?',
      [approved, id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ success: false, error: 'Comment not found' });
    }

    res.json({
      success: true,
      message: approved ? 'Comment approved' : 'Comment disapproved'
    });
  } catch (error) {
    console.error('Error updating comment approval:', error);
    res.status(500).json({ success: false, error: 'Failed to update comment' });
  }
};

// Delete comment
export const deleteComment: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await database.run('DELETE FROM comments WHERE id = ?', [id]);

    if (result.changes === 0) {
      return res.status(404).json({ success: false, error: 'Comment not found' });
    }

    res.json({ success: true, message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ success: false, error: 'Failed to delete comment' });
  }
};

// Get comment by ID
export const getComment: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await database.get('SELECT * FROM comments WHERE id = ?', [id]);

    if (!comment) {
      return res.status(404).json({ success: false, error: 'Comment not found' });
    }

    res.json({ success: true, comment });
  } catch (error) {
    console.error('Error fetching comment:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch comment' });
  }
};

// Get comment stats
export const getCommentStats: RequestHandler = async (req, res) => {
  try {
    const totalComments = await database.get('SELECT COUNT(*) as count FROM comments');
    const approvedComments = await database.get('SELECT COUNT(*) as count FROM comments WHERE approved = 1');
    const pendingComments = await database.get('SELECT COUNT(*) as count FROM comments WHERE approved = 0');
    
    const recentComments = await database.all(
      'SELECT * FROM comments ORDER BY created_at DESC LIMIT 5'
    );

    res.json({
      success: true,
      stats: {
        total: totalComments.count,
        approved: approvedComments.count,
        pending: pendingComments.count,
        recent: recentComments
      }
    });
  } catch (error) {
    console.error('Error fetching comment stats:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch comment stats' });
  }
};
