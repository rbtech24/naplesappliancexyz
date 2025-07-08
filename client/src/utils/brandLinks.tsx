import { Link } from "wouter";
import React from "react";
import { scrollToTop } from "./scrollToTop";

// Brand name to URL mapping
export const brandUrls: { [key: string]: string } = {
  'Samsung': '/brands/samsung',
  'LG': '/brands/lg',
  'Whirlpool': '/brands/whirlpool',
  'GE': '/brands/ge',
  'Maytag': '/brands/maytag',
  'Bosch': '/brands/bosch',
  'KitchenAid': '/brands/kitchenaid',
  'Frigidaire': '/brands/frigidaire',
  'Electrolux': '/brands/electrolux',
  'Kenmore': '/brands/kenmore',
  'Sub-Zero': '/brands/sub-zero',
  'Wolf': '/brands/wolf',
  'Viking': '/brands/viking',
  'Thermador': '/brands/thermador',
  'Miele': '/brands/miele',
  'Fisher & Paykel': '/brands/fisher-paykel',
  'Dacor': '/brands/dacor',
  'JennAir': '/brands/jennair',
  'Asko': '/brands/asko',
  'Speed Queen': '/brands/speed-queen',
  'Amana': '/brands/amana',
  'Haier': '/brands/haier',
  'Bertazzoni': '/brands',
  'Smeg': '/brands',
  'Sharp': '/brands',
  'Panasonic': '/brands',
  'Toshiba': '/brands',
  'Hotpoint': '/brands',
  'Roper': '/brands',
  'Admiral': '/brands',
  'Magic Chef': '/brands',
  'U-Line': '/brands',
  'Scotsman': '/brands',
  'BlueStar': '/brands',
  'True': '/brands',
  'Fulgor Milano': '/brands'
};

// Component to render a clickable brand name
interface BrandLinkProps {
  brandName: string;
  className?: string;
  children?: React.ReactNode;
}

export const BrandLink: React.FC<BrandLinkProps> = ({ brandName, className = "", children }) => {
  const brandUrl = brandUrls[brandName];
  
  if (brandUrl) {
    return (
      <Link 
        href={brandUrl} 
        className={`hover:text-[#0056b3] hover:underline cursor-pointer transition-colors duration-200 ${className}`}
        onClick={() => scrollToTop('smooth')}
      >
        {children || brandName}
      </Link>
    );
  }
  
  return <span className={className}>{children || brandName}</span>;
};

// Function to convert text with brand names to linked text
export const linkifyBrands = (text: string, className: string = ""): React.ReactNode => {
  const brandNames = Object.keys(brandUrls);
  let result: React.ReactNode[] = [text];

  brandNames.forEach(brandName => {
    result = result.flatMap((part, index) => {
      if (typeof part !== 'string') return [part];
      
      const regex = new RegExp(`\\b${brandName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      const matches = part.split(regex);
      
      if (matches.length === 1) return [part];
      
      const newParts: React.ReactNode[] = [];
      matches.forEach((match, i) => {
        if (i > 0) {
          newParts.push(
            <BrandLink 
              key={`${brandName}-${index}-${i}`} 
              brandName={brandName} 
              className={className} 
            />
          );
        }
        if (match) {
          newParts.push(match);
        }
      });
      
      return newParts;
    });
  });

  return result;
};

export default BrandLink;