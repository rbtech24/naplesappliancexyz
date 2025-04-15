import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate form data
      const validatedData = insertContactRequestSchema.parse(req.body);
      
      // Store in database
      const contactRequest = {
        ...validatedData,
      };

      // In a production environment, we would send an email notification
      // For now, we'll just log the data and return success
      console.log('Contact request received:', contactRequest);

      // Return success
      res.status(200).json({ 
        success: true, 
        message: 'Thank you for your request. We will contact you shortly to schedule your service appointment.' 
      });
      
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(400).json({ 
        success: false, 
        message: 'There was an error processing your request. Please try again or call us directly.' 
      });
    }
  });

  // Fetch testimonials endpoint
  app.get('/api/testimonials', async (req, res) => {
    try {
      // We're using mock data for now, but in production we would fetch from database
      const testimonials = [
        {
          id: 1,
          name: "Maria S.",
          location: "Naples Park",
          rating: 5,
          comment: "Our refrigerator stopped cooling on the hottest day of the year. Naples Appliance Repair sent a technician within hours who diagnosed and fixed the problem quickly. Excellent service!"
        },
        {
          id: 2,
          name: "James T.",
          location: "Golden Gate",
          rating: 5,
          comment: "Professional, knowledgeable and honest. The technician explained everything clearly and gave me options before proceeding with the repair of my washing machine. Fair price and great work!"
        },
        {
          id: 3,
          name: "Laura C.",
          location: "Pelican Bay",
          rating: 5,
          comment: "I've used Naples Appliance Repair three times now for different appliances in my home. Every time the service has been prompt, efficient and reliable. They're now my go-to for all appliance issues."
        }
      ];

      res.status(200).json({ testimonials });
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Error fetching testimonials' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
