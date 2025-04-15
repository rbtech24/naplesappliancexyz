const ProcessSection = () => {
  const steps = [
    {
      icon: "fa-phone-alt",
      title: "Schedule Service",
      description: "Call us or use our online form to schedule a convenient appointment time."
    },
    {
      icon: "fa-tools",
      title: "Diagnosis",
      description: "Our technician will diagnose the issue and provide an upfront quote for repairs."
    },
    {
      icon: "fa-wrench",
      title: "Repair Service",
      description: "After your approval, we complete the repair with quality replacement parts."
    },
    {
      icon: "fa-check-circle",
      title: "Satisfaction Check",
      description: "We test the appliance to ensure it's working perfectly before we leave."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">How Our Repair Process Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We make appliance repair easy and hassle-free with our simple 4-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center relative">
              <div className="w-16 h-16 bg-[#0056b3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${step.icon} text-[#0056b3] text-2xl`}></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#ff6b00] text-white font-bold flex items-center justify-center mx-auto -mt-16 mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
