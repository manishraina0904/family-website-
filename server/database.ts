import fs from 'fs';
import path from 'path';

// Simple in-memory database with JSON file persistence
interface DatabaseData {
  contacts: any[];
  photos: any[];
  events: any[];
  photo_likes: any[];
  comments: any[];
}

export class Database {
  private data: DatabaseData;
  private dataFile: string;
  private nextIds: { [key: string]: number };

  constructor() {
    this.dataFile = path.join(process.cwd(), 'family_website_data.json');
    this.nextIds = {
      contacts: 1,
      photos: 1,
      events: 1,
      photo_likes: 1,
      comments: 1
    };
    this.loadData();
  }

  private loadData() {
    try {
      if (fs.existsSync(this.dataFile)) {
        const fileData = fs.readFileSync(this.dataFile, 'utf8');
        this.data = JSON.parse(fileData);
        // Update next IDs based on existing data
        Object.keys(this.nextIds).forEach(table => {
          if (this.data[table as keyof DatabaseData] && Array.isArray(this.data[table as keyof DatabaseData])) {
            const items = this.data[table as keyof DatabaseData];
            if (items.length > 0) {
              const maxId = Math.max(...items.map((item: any) => item.id || 0));
              this.nextIds[table] = maxId + 1;
            }
          }
        });
      } else {
        this.data = {
          contacts: [],
          photos: [],
          events: [],
          photo_likes: [],
          comments: []
        };
        this.initializeDefaultData();
      }
    } catch (error) {
      console.error('Error loading database:', error);
      this.data = {
        contacts: [],
        photos: [],
        events: [],
        photo_likes: [],
        comments: []
      };
      this.initializeDefaultData();
    }
  }

  private saveData() {
    try {
      fs.writeFileSync(this.dataFile, JSON.stringify(this.data, null, 2));
    } catch (error) {
      console.error('Error saving database:', error);
    }
  }

  private initializeDefaultData() {
    // Add default photos
    const defaultPhotos = [
      {
        id: 1,
        title: 'Goa Beach Sunset',
        description: 'Beautiful sunset during our 2023 family vacation to Goa. The kids built sandcastles while we watched the waves.',
        category: 'vacations',
        file_path: '/placeholder.svg',
        photographer: 'Priya Raina',
        location: 'Goa, India',
        date_taken: '2023-12-15',
        tags: 'beach,sunset,vacation,family',
        likes_count: 15,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Diwali Family Portrait',
        description: 'Our traditional Diwali family photo in matching outfits. Everyone looked so elegant in their festive wear.',
        category: 'festivals',
        file_path: '/placeholder.svg',
        photographer: 'Timer Camera',
        location: 'Home',
        date_taken: '2024-11-01',
        tags: 'diwali,festival,family,traditional',
        likes_count: 22,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 3,
        title: 'Arjun\'s Basketball Win',
        description: 'Celebrating Arjun\'s team victory at the regional championship. So proud of our basketball star!',
        category: 'daily',
        file_path: '/placeholder.svg',
        photographer: 'Rajesh Raina',
        location: 'Lincoln High School',
        date_taken: '2024-03-20',
        tags: 'basketball,sports,victory,proud',
        likes_count: 18,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 4,
        title: 'Anika\'s Art Exhibition',
        description: 'Anika showcasing her environmental art at the university gallery. Her passion for nature shines through her work.',
        category: 'daily',
        file_path: '/placeholder.svg',
        photographer: 'Priya Raina',
        location: 'UC Berkeley',
        date_taken: '2024-05-10',
        tags: 'art,university,environment,exhibition',
        likes_count: 25,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 5,
        title: 'Priya\'s Birthday Celebration',
        description: 'Mom\'s surprise birthday party in the garden she loves so much. The flowers made the perfect backdrop.',
        category: 'birthdays',
        file_path: '/placeholder.svg',
        photographer: 'Rajesh Raina',
        location: 'Home Garden',
        date_taken: '2024-07-22',
        tags: 'birthday,garden,flowers,celebration',
        likes_count: 30,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 6,
        title: 'Family Cooking Session',
        description: 'Sunday morning cooking session where everyone helps make breakfast. Manish is surprisingly good at pancakes!',
        category: 'daily',
        file_path: '/placeholder.svg',
        photographer: 'Timer Camera',
        location: 'Home Kitchen',
        date_taken: '2024-08-11',
        tags: 'cooking,family,sunday,breakfast',
        likes_count: 12,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ];

    // Add default events
    const defaultEvents = [
      {
        id: 1,
        title: "Anil Kumar's Birthday",
        description: "Dad's special day! Celebrating our dedicated police officer and family guardian.",
        event_type: 'birthday',
        person: 'Anil Kumar',
        date: '2025-09-08',
        time: '6:00 PM',
        location: 'Home',
        icon: '🛡️',
        color: 'bg-blue-100 text-blue-700',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 2,
        title: "Babeeta's Birthday",
        description: "Mom's special day! Celebrating our loving homemaker and family foundation.",
        event_type: 'birthday',
        person: 'Babeeta Raina',
        date: '2025-10-07',
        time: '4:00 PM',
        location: 'Home Garden',
        icon: '🌸',
        color: 'bg-pink-100 text-pink-700',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 3,
        title: "Mansi's Birthday",
        description: "Sister's birthday celebration! Celebrating our successful IP Analyst.",
        event_type: 'birthday',
        person: 'Mansi Raina',
        date: '2025-09-15',
        time: '2:00 PM',
        location: 'Local Park',
        icon: '👩‍💼',
        color: 'bg-green-100 text-green-700',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 4,
        title: "Manish's Birthday",
        description: "Brother's birthday celebration! Celebrating our future AI engineer and academic topper.",
        event_type: 'birthday',
        person: 'Manish Raina',
        date: '2025-01-04',
        time: '7:00 PM',
        location: 'Home',
        icon: '🤖',
        color: 'bg-orange-100 text-orange-700',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 5,
        title: "Family Vacation - Goa",
        description: "Annual family vacation to the beautiful beaches of Goa.",
        event_type: 'vacation',
        person: 'Entire Family',
        date: '2025-12-20',
        time: 'All Day',
        location: 'Goa, India',
        icon: '🏖️',
        color: 'bg-cyan-100 text-cyan-700',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ];

    this.data.photos = defaultPhotos;
    this.data.events = defaultEvents;
    this.nextIds.photos = defaultPhotos.length + 1;
    this.nextIds.events = defaultEvents.length + 1;
    
    this.saveData();
    console.log('Database initialized with default data');
  }

  async run(sql: string, params: any[] = []): Promise<any> {
    // Simple SQL-like operations for common patterns
    try {
      if (sql.includes('INSERT INTO contacts')) {
        const contact = {
          id: this.nextIds.contacts++,
          name: params[0],
          email: params[1],
          phone: params[2],
          subject: params[3],
          company: params[4],
          message: params[5],
          created_at: new Date().toISOString(),
          status: 'new'
        };
        this.data.contacts.push(contact);
        this.saveData();
        return { id: contact.id, changes: 1 };
      }

      if (sql.includes('INSERT INTO photos')) {
        const photo = {
          id: this.nextIds.photos++,
          title: params[0],
          description: params[1],
          category: params[2],
          file_path: params[3],
          photographer: params[4],
          location: params[5],
          date_taken: params[6],
          tags: params[7],
          likes_count: 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        this.data.photos.push(photo);
        this.saveData();
        return { id: photo.id, changes: 1 };
      }

      if (sql.includes('INSERT INTO events')) {
        const event = {
          id: this.nextIds.events++,
          title: params[0],
          description: params[1],
          event_type: params[2],
          person: params[3],
          date: params[4],
          time: params[5],
          location: params[6],
          icon: params[7],
          color: params[8],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        this.data.events.push(event);
        this.saveData();
        return { id: event.id, changes: 1 };
      }

      if (sql.includes('INSERT INTO photo_likes')) {
        const like = {
          id: this.nextIds.photo_likes++,
          photo_id: parseInt(params[0]),
          ip_address: params[1],
          created_at: new Date().toISOString()
        };
        this.data.photo_likes.push(like);
        this.saveData();
        return { id: like.id, changes: 1 };
      }

      if (sql.includes('UPDATE photos SET likes_count')) {
        const photoId = parseInt(params[0]);
        const photo = this.data.photos.find(p => p.id === photoId);
        if (photo) {
          if (sql.includes('likes_count + 1')) {
            photo.likes_count = (photo.likes_count || 0) + 1;
          } else if (sql.includes('likes_count - 1')) {
            photo.likes_count = Math.max((photo.likes_count || 0) - 1, 0);
          }
          photo.updated_at = new Date().toISOString();
          this.saveData();
          return { changes: 1 };
        }
        return { changes: 0 };
      }

      if (sql.includes('DELETE FROM photo_likes')) {
        const photoId = parseInt(params[0]);
        const ipAddress = params[1];
        const initialLength = this.data.photo_likes.length;
        this.data.photo_likes = this.data.photo_likes.filter(
          like => !(like.photo_id === photoId && like.ip_address === ipAddress)
        );
        const changes = initialLength - this.data.photo_likes.length;
        if (changes > 0) this.saveData();
        return { changes };
      }

      return { changes: 0 };
    } catch (error) {
      console.error('Database operation error:', error);
      throw error;
    }
  }

  async get(sql: string, params: any[] = []): Promise<any> {
    try {
      if (sql.includes('SELECT COUNT(*) as count FROM photos')) {
        return { count: this.data.photos.length };
      }

      if (sql.includes('SELECT COUNT(*) as count FROM events')) {
        return { count: this.data.events.length };
      }

      if (sql.includes('SELECT * FROM photos WHERE id = ?')) {
        const id = parseInt(params[0]);
        return this.data.photos.find(p => p.id === id) || null;
      }

      if (sql.includes('SELECT * FROM events WHERE id = ?')) {
        const id = parseInt(params[0]);
        return this.data.events.find(e => e.id === id) || null;
      }

      if (sql.includes('SELECT id FROM photo_likes WHERE photo_id = ? AND ip_address = ?')) {
        const photoId = parseInt(params[0]);
        const ipAddress = params[1];
        return this.data.photo_likes.find(
          like => like.photo_id === photoId && like.ip_address === ipAddress
        ) || null;
      }

      return null;
    } catch (error) {
      console.error('Database get error:', error);
      return null;
    }
  }

  async all(sql: string, params: any[] = []): Promise<any[]> {
    try {
      if (sql.includes('SELECT * FROM photos')) {
        let photos = [...this.data.photos];
        
        if (sql.includes('WHERE category = ?')) {
          const category = params[0];
          photos = photos.filter(p => p.category === category);
        }
        
        return photos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      }

      if (sql.includes('SELECT * FROM events')) {
        let events = [...this.data.events];
        
        if (sql.includes('WHERE date >= ?')) {
          const fromDate = params[0];
          events = events.filter(e => e.date >= fromDate);
        }
        
        if (sql.includes('event_type = ?')) {
          const eventType = params[params.length - 1]; // Last param is usually the event type
          events = events.filter(e => e.event_type === eventType);
        }
        
        return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      }

      if (sql.includes('SELECT * FROM contacts')) {
        return [...this.data.contacts].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      }

      return [];
    } catch (error) {
      console.error('Database all error:', error);
      return [];
    }
  }

  close(): void {
    this.saveData();
    console.log('Database connection closed');
  }
}

export const database = new Database();
