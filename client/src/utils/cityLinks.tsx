import { Link } from "wouter";
import React from "react";
import { scrollToTop } from "./scrollToTop";

// City name to URL mapping
export const cityUrls: { [key: string]: string } = {
  'Naples': '/naples-appliance-repair',
  'Bonita Springs': '/bonita-springs-appliance-repair',
  'Estero': '/estero-appliance-repair',
  'Naples Park': '/naples-park-appliance-repair',
  'North Naples': '/north-naples-appliance-repair',
  'Golden Gate': '/golden-gate-appliance-repair',
  'Marco Island': '/marco-island-appliance-repair',
  'Pelican Bay': '/pelican-bay-appliance-repair',
  'Pine Ridge': '/pine-ridge-appliance-repair',
  'East Naples': '/east-naples-appliance-repair',
  'Lely': '/lely-appliance-repair',
  'Immokalee': '/immokalee-appliance-repair',
  'Everglades City': '/everglades-city-appliance-repair',
  'Fort Myers': '/fort-myers-appliance-repair'
};

// Component to render a clickable city name
interface CityLinkProps {
  cityName: string;
  className?: string;
  children?: React.ReactNode;
}

export const CityLink: React.FC<CityLinkProps> = ({ cityName, className = "", children }) => {
  const cityUrl = cityUrls[cityName];
  
  if (cityUrl) {
    return (
      <Link 
        href={cityUrl} 
        className={`hover:text-[#0056b3] hover:underline cursor-pointer transition-colors duration-200 ${className}`}
        onClick={() => scrollToTop('smooth')}
      >
        {children || cityName}
      </Link>
    );
  }
  
  return <span className={className}>{children || cityName}</span>;
};

// Function to convert text with city names to linked text
export const linkifyCities = (text: string, className: string = ""): React.ReactNode => {
  const cityNames = Object.keys(cityUrls);
  let result: React.ReactNode[] = [text];

  cityNames.forEach(cityName => {
    result = result.flatMap((part, index) => {
      if (typeof part !== 'string') return [part];
      
      const regex = new RegExp(`\\b${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      const matches = part.split(regex);
      
      if (matches.length === 1) return [part];
      
      const newParts: React.ReactNode[] = [];
      matches.forEach((match, i) => {
        if (i > 0) {
          newParts.push(
            <CityLink 
              key={`${cityName}-${index}-${i}`} 
              cityName={cityName} 
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

export default CityLink;