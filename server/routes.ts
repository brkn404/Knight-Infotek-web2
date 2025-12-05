import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, interest, message } = req.body;

      // Validate required fields
      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({
          success: false,
          error: "Missing required fields",
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: "Invalid email address",
        });
      }

      const contactEmail = process.env.CONTACT_EMAIL || "contact@knightinfotek.com";

      // Email content
      const emailContent = {
        from: process.env.SMTP_FROM || `"Knight InfoTek Contact Form" <${contactEmail}>`,
        to: contactEmail,
        replyTo: email,
        subject: `Contact Form: ${interest || "General Inquiry"} - ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Interest:</strong> ${interest || "General Inquiry"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${firstName} ${lastName}
          Email: ${email}
          Interest: ${interest || "General Inquiry"}
          
          Message:
          ${message}
        `,
      };

      // If SMTP is configured, send email via SMTP
      // Otherwise, log it (for development) or use mailto fallback
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail(emailContent);
      } else {
        // Development mode: log the email content
        console.log("=".repeat(60));
        console.log("CONTACT FORM SUBMISSION (SMTP not configured)");
        console.log("=".repeat(60));
        console.log("To:", emailContent.to);
        console.log("From:", emailContent.from);
        console.log("Reply-To:", emailContent.replyTo);
        console.log("Subject:", emailContent.subject);
        console.log("\n" + emailContent.text);
        console.log("=".repeat(60));
        console.log("\nTo enable email sending, configure SMTP environment variables:");
        console.log("  SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL");
        console.log("=".repeat(60) + "\n");
      }

      res.json({
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to send message. Please try again later.",
      });
    }
  });

  return httpServer;
}
