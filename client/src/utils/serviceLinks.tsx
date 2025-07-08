import { Link } from "wouter";
import React from "react";
import { scrollToTop } from "./scrollToTop";

// Service name to URL mapping
export const serviceUrls: { [key: string]: string } = {
  'refrigerator repair': '/services/refrigerator-repair',
  'washing machine repair': '/services/washing-machine-repair',
  'washer repair': '/services/washing-machine-repair',
  'dryer repair': '/services/dryer-repair',
  'oven repair': '/services/oven-repair',
  'range repair': '/services/oven-repair',
  'dishwasher repair': '/services/dishwasher-repair',
  'microwave repair': '/services/microwave-repair',
  'garbage disposal repair': '/services/garbage-disposal-repair',
  'appliance repair': '/services/appliance-repair',
  'refrigerator': '/services/refrigerator-repair',
  'washing machine': '/services/washing-machine-repair',
  'washer': '/services/washing-machine-repair',
  'dryer': '/services/dryer-repair',
  'oven': '/services/oven-repair',
  'range': '/services/oven-repair',
  'dishwasher': '/services/dishwasher-repair',
  'microwave': '/services/microwave-repair',
  'garbage disposal': '/services/garbage-disposal-repair',
};

interface ServiceLinkProps {
  serviceName: string;
  className?: string;
  children?: React.ReactNode;
}

export const ServiceLink: React.FC<ServiceLinkProps> = ({ serviceName, className = "", children }) => {
  const url = serviceUrls[serviceName.toLowerCase()];
  
  if (!url) {
    return <span className={className}>{children || serviceName}</span>;
  }
  
  return (
    <Link 
      href={url} 
      className={`hover:underline transition-colors duration-200 ${className}`}
      onClick={scrollToTop}
    >
      {children || serviceName}
    </Link>
  );
};

export const linkifyServices = (text: string, className: string = ""): React.ReactNode => {
  // Create a regex pattern for all service names
  const serviceNames = Object.keys(serviceUrls).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`\\b(${serviceNames.join('|')})\\b`, 'gi');
  
  const parts = text.split(pattern);
  
  return parts.map((part, index) => {
    const lowerPart = part.toLowerCase();
    if (serviceUrls[lowerPart]) {
      return (
        <ServiceLink 
          key={index} 
          serviceName={part} 
          className={className}
        />
      );
    }
    return part;
  });
};