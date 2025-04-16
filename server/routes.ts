import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import Anthropic from "@anthropic-ai/sdk";

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

  // FAQ Chatbot with Claude AI
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message) {
        return res.status(400).json({
          success: false,
          message: 'Message is required'
        });
      }

      const anthropic = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
      });

      // System prompt for appliance troubleshooting guidance
      const systemPrompt = `You are an expert appliance repair assistant for Naples Appliance Repair in Naples, Florida.
Your name is "ApplianceBot" and you provide helpful troubleshooting advice for common household appliance problems.

Focus on these major appliances:
- Refrigerators
- Washers
- Dryers
- Dishwashers
- Ovens
- Stoves
- Microwaves

When responding:
1. Be friendly, patient, and knowledgeable
2. Provide step-by-step troubleshooting advice that's easy for non-technical homeowners to follow
3. Mention safety precautions when appropriate (unplugging appliances, etc.)
4. For complex issues, suggest when it might be time to call Naples Appliance Repair (239-230-2100)
5. Keep answers focused on practical solutions rather than technical explanations
6. If you don't know an answer, be honest and suggest contacting a professional

If the issue seems serious or potentially dangerous, always recommend professional service rather than DIY repair.`;

      // Send request to Claude
      const response = await anthropic.messages.create({
        model: "claude-3-opus-20240229", // Using an available model
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
          { role: "user", content: message }
        ],
      });

      // Get the response content safely
      let responseText = "";
      if (response.content && response.content.length > 0) {
        const content = response.content[0];
        // Handle different content types that Claude might return
        if ('text' in content) {
          responseText = content.text as string;
        } else {
          responseText = "I'm sorry, I couldn't process that request. Please try asking in a different way.";
        }
      }

      res.status(200).json({
        success: true,
        message: responseText
      });
    } catch (error) {
      console.error('Error with chatbot:', error);
      res.status(500).json({
        success: false,
        message: 'Error processing your question. Please try again.'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
