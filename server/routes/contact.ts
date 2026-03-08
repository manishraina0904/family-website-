import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { database } from "../database";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  company?: string;
  message: string;
}

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, phone, subject, company, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Required fields (name, email, subject, message) must be filled"
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: "Please provide a valid email address" 
      });
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'manishraina2009@gmail.com',
      replyTo: email, // This allows you to reply directly to the visitor
      subject: `${subject} - Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #ec7c3e, #f19b67); color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 24px;">📩 New Contact Form Submission</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">From: The Raina Family Website</p>
          </div>

          <!-- Contact Information -->
          <div style="padding: 25px; background-color: #f8f9fa;">
            <h3 style="color: #333; margin-top: 0; border-bottom: 2px solid #ec7c3e; display: inline-block; padding-bottom: 5px;">
              👤 Contact Information
            </h3>
            <div style="display: grid; gap: 10px; margin-top: 15px;">
              <p style="margin: 0; background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #ec7c3e;">
                <strong>Full Name:</strong> ${name}
              </p>
              <p style="margin: 0; background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #f19b67;">
                <strong>Email:</strong> <a href="mailto:${email}" style="color: #ec7c3e; text-decoration: none;">${email}</a>
              </p>
              ${phone ? `<p style="margin: 0; background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #f19b67;">
                <strong>Phone:</strong> <a href="tel:${phone}" style="color: #ec7c3e; text-decoration: none;">${phone}</a>
              </p>` : ''}
              ${company ? `<p style="margin: 0; background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #f19b67;">
                <strong>Company:</strong> ${company}
              </p>` : ''}
            </div>
          </div>

          <!-- Subject -->
          <div style="padding: 0 25px;">
            <h3 style="color: #333; margin: 20px 0 10px 0; border-bottom: 2px solid #ec7c3e; display: inline-block; padding-bottom: 5px;">
              📝 Subject
            </h3>
            <div style="background: #fff3e0; padding: 15px; border-radius: 6px; border: 1px solid #ffcc80;">
              <p style="margin: 0; font-size: 16px; font-weight: 600; color: #333;">${subject}</p>
            </div>
          </div>

          <!-- Message -->
          <div style="padding: 0 25px 25px 25px;">
            <h3 style="color: #333; margin: 20px 0 10px 0; border-bottom: 2px solid #ec7c3e; display: inline-block; padding-bottom: 5px;">
              💬 Message
            </h3>
            <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0; line-height: 1.6;">
              <p style="margin: 0; color: #444; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              🌐 This message was sent from the <strong>Raina Family</strong> website contact form<br>
              📅 Received on: ${new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <div style="margin-top: 15px;">
              <a href="mailto:${email}?subject=Re: ${subject}"
                 style="background: #ec7c3e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 0 5px;">
                ↩️ Reply to ${name}
              </a>
              ${phone ? `<a href="tel:${phone}"
                 style="background: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 0 5px;">
                📞 Call ${name}
              </a>` : ''}
            </div>
          </div>
        </div>
      `,
      text: `
NEW CONTACT FORM SUBMISSION - RAINA FAMILY WEBSITE
======================================================

CONTACT INFORMATION:
--------------------
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}

SUBJECT:
--------
${subject}

MESSAGE:
--------
${message}

======================================================
This message was sent from the Raina Family website contact form.
Received on: ${new Date().toLocaleString()}

To reply: Send email to ${email}
${phone ? `To call: ${phone}` : ''}
      `,
    };

    // Save to database
    const contactResult = await database.run(
      `INSERT INTO contacts (name, email, phone, subject, company, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, phone || null, subject, company || null, message]
    );

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you soon.",
      contactId: contactResult.id
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Check if it's an authentication error
    if (error && typeof error === 'object' && 'code' in error) {
      if (error.code === 'EAUTH') {
        return res.status(500).json({ 
          success: false, 
          error: "Email service configuration error. Please try again later." 
        });
      }
    }

    res.status(500).json({ 
      success: false, 
      error: "Failed to send message. Please try again later." 
    });
  }
};

// Get all contact submissions (admin function)
export const getContactSubmissions: RequestHandler = async (req, res) => {
  try {
    const { status, limit = 50 } = req.query;
    let sql = 'SELECT * FROM contacts ORDER BY created_at DESC LIMIT ?';
    const params: any[] = [Number(limit)];

    if (status) {
      sql = 'SELECT * FROM contacts WHERE status = ? ORDER BY created_at DESC LIMIT ?';
      params.unshift(status);
    }

    const contacts = await database.all(sql, params);

    res.json({ success: true, contacts });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch contact submissions' });
  }
};

// Get contact submission by ID
export const getContactSubmission: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await database.get('SELECT * FROM contacts WHERE id = ?', [id]);

    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact submission not found' });
    }

    res.json({ success: true, contact });
  } catch (error) {
    console.error('Error fetching contact submission:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch contact submission' });
  }
};

// Update contact submission status
export const updateContactStatus: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['new', 'read', 'replied', 'archived'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status. Must be one of: ' + validStatuses.join(', ')
      });
    }

    const result = await database.run(
      'UPDATE contacts SET status = ? WHERE id = ?',
      [status, id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ success: false, error: 'Contact submission not found' });
    }

    res.json({ success: true, message: 'Status updated successfully' });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({ success: false, error: 'Failed to update status' });
  }
};

// Delete contact submission
export const deleteContactSubmission: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await database.run('DELETE FROM contacts WHERE id = ?', [id]);

    if (result.changes === 0) {
      return res.status(404).json({ success: false, error: 'Contact submission not found' });
    }

    res.json({ success: true, message: 'Contact submission deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    res.status(500).json({ success: false, error: 'Failed to delete contact submission' });
  }
};
