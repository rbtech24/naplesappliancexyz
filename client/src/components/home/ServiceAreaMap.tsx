const ServiceAreaMap = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-[#0056b3] mb-4">Our Service Area</h2>
          <p className="text-lg text-gray-600">
            We provide appliance repair services throughout Naples and Southwest Florida
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 bg-gray-200 relative flex items-center justify-center">
            {/* This would be a Google Maps embed in production */}
            <div className="text-center">
              <i className="fas fa-map-marked-alt text-5xl text-[#0056b3] mb-4"></i>
              <p className="text-lg font-semibold">Service Area Map</p>
              <p className="text-gray-600 max-w-md mx-auto">
                We service Naples, Marco Island, Bonita Springs, Estero, Golden Gate, 
                Pelican Bay, Naples Park, Pine Ridge, North Naples, East Naples, Lely, 
                Fort Myers, Immokalee, and Everglades City.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
