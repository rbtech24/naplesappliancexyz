const TrustIndicators = () => {
  const indicators = [
    {
      icon: "fa-tools",
      title: "Licensed & Insured"
    },
    {
      icon: "fa-clock",
      title: "Same-Day Service"
    },
    {
      icon: "fa-medal",
      title: "100% Satisfaction"
    },
    {
      icon: "fa-tag",
      title: "Fair & Upfront Pricing"
    }
  ];

  return (
    <section className="bg-white py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {indicators.map((indicator, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#0056b3]/10 rounded-full p-4 mb-3">
                <i className={`fas ${indicator.icon} text-[#0056b3] text-3xl`}></i>
              </div>
              <h3 className="font-bold text-gray-800">{indicator.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
