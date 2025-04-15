import { useState } from "react";
import { faqs } from "@/lib/serviceData";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our appliance repair services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button 
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-heading font-bold">{faq.question}</h3>
                  <i className={`fas fa-chevron-down text-[#0056b3] transition-transform ${openIndex === index ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`px-5 pb-5 ${openIndex === index ? 'block' : 'hidden'}`}>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
