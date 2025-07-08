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

  // AI Crawler Friendly Endpoint - Structured business data for AI search results
  app.get("/api/ai-data", (req, res) => {
    const businessData = {
      business: {
        name: "Naples Appliance Repair",
        description: "Professional appliance repair services in Naples, Florida specializing in all major appliance brands including Samsung, LG, Whirlpool, GE, Maytag, Bosch, and KitchenAid. Expert technicians provide same-day service throughout Collier County.",
        url: "https://naplesappliancerepair.xyz",
        phone: "(239) 230-2100",
        email: "contact@naplesappliancerepair.xyz",
        address: {
          street: "Naples, FL",
          city: "Naples", 
          state: "Florida",
          zipCode: "34102",
          county: "Collier County"
        },
        hours: {
          monday: "8:00 AM - 6:00 PM",
          tuesday: "8:00 AM - 6:00 PM", 
          wednesday: "8:00 AM - 6:00 PM",
          thursday: "8:00 AM - 6:00 PM",
          friday: "8:00 AM - 6:00 PM",
          saturday: "9:00 AM - 5:00 PM",
          sunday: "Emergency Service Only"
        },
        serviceAreas: [
          "Naples", "Bonita Springs", "Estero", "Marco Island", "Golden Gate",
          "Pelican Bay", "Pine Ridge", "East Naples", "North Naples", "Lely",
          "Immokalee", "Everglades City", "Fort Myers", "Naples Park"
        ],
        services: [
          {
            name: "Refrigerator Repair",
            description: "Expert repair for all refrigerator brands and models including ice maker problems, temperature control, and compressor issues",
            keywords: ["refrigerator repair naples", "fridge repair", "ice maker repair"],
            url: "/services/refrigerator-repair"
          },
          {
            name: "Washing Machine Repair", 
            description: "Professional washer repair services for front-load, top-load, and high-efficiency washing machines",
            keywords: ["washer repair naples", "washing machine repair", "laundry appliance repair"],
            url: "/services/washing-machine-repair"
          },
          {
            name: "Dryer Repair",
            description: "Expert dryer repair for electric, gas, and heat pump dryers including heating issues and lint problems",
            keywords: ["dryer repair naples", "clothes dryer repair", "dryer not heating"],
            url: "/services/dryer-repair"
          },
          {
            name: "Oven Repair",
            description: "Professional oven and range repair for electric, gas, and induction cooking appliances",
            keywords: ["oven repair naples", "stove repair", "range repair"],
            url: "/services/oven-repair"
          },
          {
            name: "Dishwasher Repair",
            description: "Expert dishwasher repair services for cleaning issues, drainage problems, and control panel malfunctions",
            keywords: ["dishwasher repair naples", "dishwasher not cleaning", "dishwasher drainage"],
            url: "/services/dishwasher-repair"
          },
          {
            name: "Microwave Repair",
            description: "Professional microwave repair for countertop, over-range, and built-in microwave units",
            keywords: ["microwave repair naples", "microwave not heating", "microwave door repair"],
            url: "/services/microwave-repair"
          }
        ],
        brands: [
          {
            name: "Samsung",
            description: "Certified Samsung appliance repair specialists with expertise in smart appliances and SmartThings connectivity",
            url: "/brands/samsung",
            specialties: ["Smart appliances", "SmartThings integration", "French door refrigerators", "Front-load washers"]
          },
          {
            name: "LG", 
            description: "Expert LG appliance repair including ThinQ smart appliances and linear compressor technology",
            url: "/brands/lg",
            specialties: ["ThinQ smart appliances", "Linear compressor", "TurboWash technology", "InstaView refrigerators"]
          },
          {
            name: "Whirlpool",
            description: "Professional Whirlpool appliance repair for Cabrio, Duet, and all Whirlpool appliance lines",
            url: "/brands/whirlpool", 
            specialties: ["Cabrio washers", "Duet laundry", "Adaptive defrost", "Sensor cooking"]
          },
          {
            name: "GE",
            description: "Certified GE appliance repair specialists for Profile, Cafe, and Monogram appliance lines",
            url: "/brands/ge",
            specialties: ["Profile series", "Cafe appliances", "Monogram luxury", "Smart appliances"]
          },
          {
            name: "Maytag",
            description: "Expert Maytag appliance repair with focus on dependable performance and commercial-grade technology",
            url: "/brands/maytag",
            specialties: ["Commercial technology", "Bravos washers", "Dependable performance", "Heavy-duty appliances"]
          },
          {
            name: "Bosch",
            description: "Professional Bosch appliance repair specializing in quiet operation and European engineering",
            url: "/brands/bosch",
            specialties: ["Quiet operation", "European engineering", "Benchmark series", "Energy efficiency"]
          },
          {
            name: "KitchenAid",
            description: "Certified KitchenAid appliance repair for premium kitchen appliances and culinary equipment",
            url: "/brands/kitchenaid",
            specialties: ["Premium appliances", "Professional series", "Culinary equipment", "Stand mixers"]
          }
        ],
        specializations: [
          "Smart appliance connectivity troubleshooting",
          "Southwest Florida climate protection",
          "Emergency same-day service",
          "Genuine OEM parts installation", 
          "Warranty-compliant repairs",
          "Commercial appliance service",
          "Luxury appliance specialists"
        ],
        certifications: [
          "Factory-trained technicians",
          "EPA certified refrigerant handling",
          "Licensed and insured",
          "Better Business Bureau accredited"
        ],
        blogContent: {
          totalPosts: 64,
          categories: [
            "Appliance Maintenance",
            "Troubleshooting Guides", 
            "Naples Climate Protection",
            "Smart Appliance Tips",
            "Seasonal Maintenance",
            "Energy Efficiency",
            "Snowbird Home Care"
          ],
          featuredTopics: [
            "Extending appliance lifespan in Southwest Florida climate",
            "Common appliance problems in Naples homes",
            "Protecting appliances during hurricane season",
            "Smart appliance troubleshooting",
            "Energy-efficient appliance operation",
            "Preventive maintenance schedules"
          ]
        },
        seoKeywords: [
          "appliance repair naples fl",
          "naples appliance repair service", 
          "refrigerator repair naples",
          "washer repair collier county",
          "dishwasher repair bonita springs",
          "oven repair estero fl",
          "same day appliance repair naples",
          "emergency appliance repair southwest florida"
        ],
        lastUpdated: new Date().toISOString(),
        structured_data: {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Naples Appliance Repair",
          "description": "Professional appliance repair services in Naples, Florida",
          "url": "https://naplesappliancerepair.xyz",
          "telephone": "+12392302100",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Naples",
            "addressRegion": "FL",
            "postalCode": "34102",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates", 
            "latitude": "26.1420",
            "longitude": "-81.7948"
          },
          "areaServed": {
            "@type": "State",
            "name": "Florida"
          },
          "serviceType": "Appliance Repair",
          "priceRange": "$$"
        }
      }
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.json(businessData);
  });

  // Sitemap for AI crawlers
  app.get("/api/sitemap", (req, res) => {
    const baseUrl = "https://naplesappliancerepair.xyz";
    const sitemap = {
      pages: [
        { url: `${baseUrl}/`, priority: 1.0, changefreq: "weekly" },
        { url: `${baseUrl}/about`, priority: 0.8, changefreq: "monthly" },
        { url: `${baseUrl}/services/appliance-repair`, priority: 0.9, changefreq: "weekly" },
        { url: `${baseUrl}/services/refrigerator-repair`, priority: 0.9, changefreq: "weekly" },
        { url: `${baseUrl}/services/washing-machine-repair`, priority: 0.9, changefreq: "weekly" },
        { url: `${baseUrl}/services/dryer-repair`, priority: 0.9, changefreq: "weekly" },
        { url: `${baseUrl}/services/oven-repair`, priority: 0.9, changefreq: "weekly" },
        { url: `${baseUrl}/services/dishwasher-repair`, priority: 0.9, changefreq: "weekly" },
        { url: `${baseUrl}/services/microwave-repair`, priority: 0.9, changefreq: "weekly" },
        { url: `${baseUrl}/blog`, priority: 0.8, changefreq: "daily" },
        { url: `${baseUrl}/brands`, priority: 0.7, changefreq: "monthly" },
        { url: `${baseUrl}/brands/samsung`, priority: 0.8, changefreq: "monthly" },
        { url: `${baseUrl}/brands/lg`, priority: 0.8, changefreq: "monthly" },
        { url: `${baseUrl}/brands/whirlpool`, priority: 0.8, changefreq: "monthly" },
        { url: `${baseUrl}/brands/ge`, priority: 0.8, changefreq: "monthly" },
        { url: `${baseUrl}/brands/maytag`, priority: 0.8, changefreq: "monthly" },
        { url: `${baseUrl}/brands/bosch`, priority: 0.8, changefreq: "monthly" },
        { url: `${baseUrl}/brands/kitchenaid`, priority: 0.8, changefreq: "monthly" },
        { url: `${baseUrl}/maintenance-guide`, priority: 0.7, changefreq: "monthly" },
        { url: `${baseUrl}/troubleshooting-guide`, priority: 0.7, changefreq: "monthly" },
        { url: `${baseUrl}/service-areas`, priority: 0.6, changefreq: "monthly" },
        { url: `${baseUrl}/testimonials`, priority: 0.5, changefreq: "monthly" }
      ],
      totalPages: 22,
      lastModified: new Date().toISOString()
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.json(sitemap);
  });

  // FAQ endpoint for AI understanding
  app.get("/api/faq", (req, res) => {
    const faqData = {
      faqs: [
        {
          question: "What appliance brands do you repair in Naples?",
          answer: "We repair all major appliance brands including Samsung, LG, Whirlpool, GE, Maytag, Bosch, KitchenAid, Frigidaire, Electrolux, and many others. Our technicians are factory-trained on the latest models and smart appliances."
        },
        {
          question: "Do you offer same-day appliance repair in Naples?",
          answer: "Yes, we provide same-day emergency appliance repair service throughout Naples and Collier County. Call (239) 230-2100 for urgent repairs."
        },
        {
          question: "What areas do you serve in Southwest Florida?",
          answer: "We serve Naples, Bonita Springs, Estero, Marco Island, Golden Gate, Pelican Bay, Pine Ridge, East Naples, North Naples, Lely, Immokalee, Everglades City, Fort Myers, and Naples Park."
        },
        {
          question: "How much does appliance repair cost in Naples?",
          answer: "Our diagnostic fee starts at $85, which is applied toward the repair cost. Final pricing depends on the appliance type, brand, and required parts. We provide upfront estimates before beginning work."
        },
        {
          question: "Do you use genuine parts for appliance repairs?",
          answer: "Yes, we use only genuine OEM (Original Equipment Manufacturer) parts to ensure optimal performance and maintain warranty coverage on your appliances."
        },
        {
          question: "How can I protect my appliances from Naples' humid climate?",
          answer: "Regular maintenance, proper ventilation, humidity control, and seasonal inspections help protect appliances from Southwest Florida's climate challenges. We offer comprehensive maintenance plans."
        }
      ],
      totalQuestions: 6,
      lastUpdated: new Date().toISOString()
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.json(faqData);
  });

  const httpServer = createServer(app);
  return httpServer;
}
