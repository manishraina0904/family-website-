import { RequestHandler } from "express";
import { database } from "../database";

interface EventData {
  title: string;
  description?: string;
  event_type: string;
  person?: string;
  date: string;
  time?: string;
  location?: string;
  icon?: string;
  color?: string;
}

// Get all events
export const getEvents: RequestHandler = async (req, res) => {
  try {
    const { year, month, type } = req.query;
    let sql = 'SELECT * FROM events ORDER BY date ASC';
    const params: any[] = [];

    // Filter by year and month if provided
    if (year && month) {
      sql = 'SELECT * FROM events WHERE strftime("%Y", date) = ? AND strftime("%m", date) = ? ORDER BY date ASC';
      params.push(year, String(month).padStart(2, '0'));
    } else if (year) {
      sql = 'SELECT * FROM events WHERE strftime("%Y", date) = ? ORDER BY date ASC';
      params.push(year);
    }

    let events = await database.all(sql, params);

    // Filter by event type if provided
    if (type && type !== 'all') {
      events = events.filter(event => event.event_type === type);
    }

    res.json({ success: true, events });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch events' });
  }
};

// Get upcoming events
export const getUpcomingEvents: RequestHandler = async (req, res) => {
  try {
    const { limit = 5 } = req.query;
    const today = new Date().toISOString().split('T')[0];
    
    const events = await database.all(
      'SELECT * FROM events WHERE date >= ? ORDER BY date ASC LIMIT ?',
      [today, Number(limit)]
    );

    res.json({ success: true, events });
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch upcoming events' });
  }
};

// Create new event
export const createEvent: RequestHandler = async (req, res) => {
  try {
    const { title, description, event_type, person, date, time, location, icon, color }: EventData = req.body;

    // Validate required fields
    if (!title || !event_type || !date) {
      return res.status(400).json({
        success: false,
        error: 'Title, event type, and date are required'
      });
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return res.status(400).json({
        success: false,
        error: 'Date must be in YYYY-MM-DD format'
      });
    }

    const result = await database.run(
      `INSERT INTO events (title, description, event_type, person, date, time, location, icon, color)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, description, event_type, person, date, time, location, icon, color]
    );

    const newEvent = await database.get('SELECT * FROM events WHERE id = ?', [result.id]);

    res.json({
      success: true,
      message: 'Event created successfully',
      event: newEvent
    });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ success: false, error: 'Failed to create event' });
  }
};

// Update event
export const updateEvent: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, event_type, person, date, time, location, icon, color } = req.body;

    // Check if event exists
    const existingEvent = await database.get('SELECT id FROM events WHERE id = ?', [id]);
    if (!existingEvent) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }

    // Validate required fields
    if (!title || !event_type || !date) {
      return res.status(400).json({
        success: false,
        error: 'Title, event type, and date are required'
      });
    }

    await database.run(
      `UPDATE events 
       SET title = ?, description = ?, event_type = ?, person = ?, date = ?, 
           time = ?, location = ?, icon = ?, color = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [title, description, event_type, person, date, time, location, icon, color, id]
    );

    const updatedEvent = await database.get('SELECT * FROM events WHERE id = ?', [id]);

    res.json({
      success: true,
      message: 'Event updated successfully',
      event: updatedEvent
    });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ success: false, error: 'Failed to update event' });
  }
};

// Delete event
export const deleteEvent: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if event exists
    const existingEvent = await database.get('SELECT id FROM events WHERE id = ?', [id]);
    if (!existingEvent) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }

    await database.run('DELETE FROM events WHERE id = ?', [id]);

    res.json({ success: true, message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ success: false, error: 'Failed to delete event' });
  }
};

// Get event by ID
export const getEvent: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await database.get('SELECT * FROM events WHERE id = ?', [id]);

    if (!event) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }

    res.json({ success: true, event });
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch event' });
  }
};

// Get events for a specific date
export const getEventsByDate: RequestHandler = async (req, res) => {
  try {
    const { date } = req.params;

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return res.status(400).json({
        success: false,
        error: 'Date must be in YYYY-MM-DD format'
      });
    }

    const events = await database.all('SELECT * FROM events WHERE date = ? ORDER BY time ASC', [date]);

    res.json({ success: true, events });
  } catch (error) {
    console.error('Error fetching events by date:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch events' });
  }
};

// Get birthday events
export const getBirthdays: RequestHandler = async (req, res) => {
  try {
    const events = await database.all(
      'SELECT * FROM events WHERE event_type = ? ORDER BY date ASC',
      ['birthday']
    );

    res.json({ success: true, events });
  } catch (error) {
    console.error('Error fetching birthdays:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch birthdays' });
  }
};

// Generate iCal file for event
export const generateICalForEvent: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await database.get('SELECT * FROM events WHERE id = ?', [id]);

    if (!event) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }

    // Generate iCal content
    const startDate = new Date(`${event.date}T${event.time || '12:00'}:00`);
    const endDate = new Date(startDate.getTime() + (2 * 60 * 60 * 1000)); // 2 hours later

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icalContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Raina Family//Family Calendar//EN',
      'BEGIN:VEVENT',
      `UID:${event.id}@rainafamily.com`,
      `DTSTART:${formatDate(startDate)}`,
      `DTEND:${formatDate(endDate)}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description || ''}`,
      `LOCATION:${event.location || ''}`,
      'STATUS:CONFIRMED',
      'BEGIN:VALARM',
      'TRIGGER:-P1D',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder: ' + event.title,
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    res.setHeader('Content-Type', 'text/calendar');
    res.setHeader('Content-Disposition', `attachment; filename="${event.title.replace(/[^a-z0-9]/gi, '_')}.ics"`);
    res.send(icalContent);
  } catch (error) {
    console.error('Error generating iCal:', error);
    res.status(500).json({ success: false, error: 'Failed to generate calendar file' });
  }
};
