import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleContact,
  getContactSubmissions,
  getContactSubmission,
  updateContactStatus,
  deleteContactSubmission
} from "./routes/contact";
import {
  getPhotos,
  uploadPhoto,
  likePhoto,
  getPhoto,
  deletePhoto,
  downloadPhoto
} from "./routes/photos";
import {
  getEvents,
  getUpcomingEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getEvent,
  getEventsByDate,
  getBirthdays,
  generateICalForEvent
} from "./routes/events";
import {
  getComments,
  createComment,
  getAllComments,
  updateCommentApproval,
  deleteComment,
  getComment,
  getCommentStats
} from "./routes/comments";
import "./database"; // Initialize database

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Contact routes
  app.post("/api/contact", handleContact);
  app.get("/api/contact/submissions", getContactSubmissions);
  app.get("/api/contact/submissions/:id", getContactSubmission);
  app.put("/api/contact/submissions/:id/status", updateContactStatus);
  app.delete("/api/contact/submissions/:id", deleteContactSubmission);

  // Photo routes
  app.get("/api/photos", getPhotos);
  app.post("/api/photos/upload", uploadPhoto);
  app.get("/api/photos/:id", getPhoto);
  app.post("/api/photos/:id/like", likePhoto);
  app.delete("/api/photos/:id", deletePhoto);
  app.get("/api/photos/:id/download", downloadPhoto);

  // Event routes
  app.get("/api/events", getEvents);
  app.get("/api/events/upcoming", getUpcomingEvents);
  app.post("/api/events", createEvent);
  app.get("/api/events/birthdays", getBirthdays);
  app.get("/api/events/:id", getEvent);
  app.put("/api/events/:id", updateEvent);
  app.delete("/api/events/:id", deleteEvent);
  app.get("/api/events/date/:date", getEventsByDate);
  app.get("/api/events/:id/ical", generateICalForEvent);

  // Comment routes
  app.get("/api/comments/:page_type/:page_id", getComments);
  app.post("/api/comments", createComment);
  app.get("/api/comments", getAllComments);
  app.get("/api/comments/single/:id", getComment);
  app.put("/api/comments/:id/approval", updateCommentApproval);
  app.delete("/api/comments/:id", deleteComment);
  app.get("/api/comments/stats", getCommentStats);

  return app;
}
