import { brands } from "@/lib/serviceData";
import { BrandLink } from "@/utils/brandLinks";

const BrandsBanner = () => {
  return (
    <section className="py-10 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-xl text-center font-bold text-gray-700 mb-8">We Repair All Major Appliance Brands</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {brands.map((brand, index) => (
            <BrandLink 
              key={index} 
              brandName={brand} 
              className="text-gray-500 text-lg font-semibold block"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsBanner;
