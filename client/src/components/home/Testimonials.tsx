import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Testimonial } from "@/types";

const Testimonials = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/testimonials'],
    staleTime: 300000, // 5 minutes
  });

  // Fallback testimonials in case API fails
  const fallbackTestimonials: Testimonial[] = [
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

  const testimonials = data?.testimonials || fallbackTestimonials;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? 'text-[#ff6b00]' : 'text-gray-300'}`}></i>
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers throughout Naples have to say about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-[#ff6b00] mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#0056b3]/10 rounded-full flex items-center justify-center text-[#0056b3] font-bold">
                    {testimonial.name.split(' ').map(name => name[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center text-[#0056b3] hover:text-[#ff6b00] font-semibold transition">
            Read More Reviews
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
