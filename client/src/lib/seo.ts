export const siteMetadata = {
  title: "Naples Appliance Repair - Expert Service in Naples, FL",
  description: "Fast, reliable appliance repair service in Naples, Florida. Same-day repairs for refrigerators, washers, dryers, ovens and more by certified technicians.",
  siteUrl: "http://naplesappliancerepair.xyz",
  phoneNumber: "(239) 555-1234",
  email: "service@naplesappliancerepair.xyz",
  address: "123 Repair Ave, Naples, FL 34102",
  openingHours: {
    weekdays: "8am-6pm",
    saturday: "9am-3pm",
    sunday: "Closed (Emergency service available)"
  },
  socialLinks: {
    facebook: "https://www.facebook.com/naplesappliancerepair",
    google: "https://g.page/naplesappliancerepair",
    yelp: "https://www.yelp.com/biz/naplesappliancerepair",
    instagram: "https://www.instagram.com/naplesappliancerepair",
  }
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Naples Appliance Repair",
  "image": "http://naplesappliancerepair.xyz/logo.png",
  "url": "http://naplesappliancerepair.xyz",
  "telephone": "+1-239-555-1234",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Repair Ave",
    "addressLocality": "Naples",
    "addressRegion": "FL",
    "postalCode": "34102",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.1420,
    "longitude": -81.7948
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/naplesappliancerepair",
    "https://www.instagram.com/naplesappliancerepair"
  ],
  "priceRange": "$$",
  "servesCuisine": "Appliance Repair"
};
