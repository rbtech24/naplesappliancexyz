import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { siteMetadata } from "@/lib/seo";
import { ContactFormData } from "@/types";
import { insertContactRequestSchema } from "@shared/schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Extend the schema for client-side validation
const formSchema = insertContactRequestSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  issue: z.string().min(10, { message: "Please provide more details about the issue" }),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      appliance: "",
      issue: "",
      preferred_date: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              Need appliance repair in Naples or surrounding areas? Fill out the form and we'll contact you promptly to schedule service, or call us directly.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 bg-[#0056b3]/10 p-3 rounded-full">
                  <i className="fas fa-map-marker-alt text-[#0056b3] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Our Location</h3>
                  <p className="text-gray-700">{siteMetadata.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-[#0056b3]/10 p-3 rounded-full">
                  <i className="fas fa-phone-alt text-[#0056b3] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-gray-700">{siteMetadata.phoneNumber}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-[#0056b3]/10 p-3 rounded-full">
                  <i className="fas fa-envelope text-[#0056b3] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-700">{siteMetadata.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-[#0056b3]/10 p-3 rounded-full">
                  <i className="fas fa-clock text-[#0056b3] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Business Hours</h3>
                  <p className="text-gray-700">Monday-Friday: {siteMetadata.openingHours.weekdays}</p>
                  <p className="text-gray-700">Saturday: {siteMetadata.openingHours.saturday}</p>
                  <p className="text-gray-700">Sunday: {siteMetadata.openingHours.sunday}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href={siteMetadata.socialLinks.facebook} className="bg-[#0056b3]/10 hover:bg-[#0056b3] text-[#0056b3] hover:text-white p-3 rounded-full transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={siteMetadata.socialLinks.google} className="bg-[#0056b3]/10 hover:bg-[#0056b3] text-[#0056b3] hover:text-white p-3 rounded-full transition">
                <i className="fab fa-google"></i>
              </a>
              <a href={siteMetadata.socialLinks.yelp} className="bg-[#0056b3]/10 hover:bg-[#0056b3] text-[#0056b3] hover:text-white p-3 rounded-full transition">
                <i className="fab fa-yelp"></i>
              </a>
              <a href={siteMetadata.socialLinks.instagram} className="bg-[#0056b3]/10 hover:bg-[#0056b3] text-[#0056b3] hover:text-white p-3 rounded-full transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-heading font-bold mb-6">Schedule Service</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name*</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone*</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email*</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="appliance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Appliance Type*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Appliance" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="refrigerator">Refrigerator</SelectItem>
                            <SelectItem value="washer">Washer</SelectItem>
                            <SelectItem value="dryer">Dryer</SelectItem>
                            <SelectItem value="oven">Oven/Range</SelectItem>
                            <SelectItem value="dishwasher">Dishwasher</SelectItem>
                            <SelectItem value="microwave">Microwave</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="issue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description of Issue*</FormLabel>
                        <FormControl>
                          <Textarea rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="preferred_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Service Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#0056b3] hover:bg-[#ff6b00] text-white font-bold py-3 px-4 rounded-md shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
