export const siteMetadata = {
  title: "Naples Appliance Repair - Expert Service in Naples, FL",
  description: "Fast, reliable appliance repair service in Naples, Florida. Same-day repairs for refrigerators, washers, dryers, ovens and more by certified technicians.",
  siteUrl: "http://naplesappliancerepair.xyz",
  phoneNumber: "(239) 230-2100",
  email: "appliancerepaicsr@gmail.com",
  address: "5405 Taylor Rd, Naples, FL 34109",
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
  "telephone": "+1-239-230-2100",
  "email": "appliancerepaicsr@gmail.com",
  "description": "Professional appliance repair service in Naples, Florida. Specializing in refrigerator, washing machine, dryer, oven, stove, and dishwasher repairs for residential and commercial clients.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5405 Taylor Rd",
    "addressLocality": "Naples",
    "addressRegion": "FL",
    "postalCode": "34109",
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
    "https://www.instagram.com/naplesappliancerepair",
    "https://g.page/naplesappliancerepair",
    "https://www.yelp.com/biz/naplesappliancerepair"
  ],
  "priceRange": "$$",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 26.1420,
      "longitude": -81.7948
    },
    "geoRadius": "40000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Appliance Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Refrigerator Repair",
          "description": "Professional repair service for all refrigerator types and brands"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Washer Repair",
          "description": "Expert washing machine repair for all makes and models"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dryer Repair",
          "description": "Fast, reliable dryer repair service for gas and electric models"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Oven & Range Repair",
          "description": "Comprehensive repair services for all types of ovens and ranges"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dishwasher Repair",
          "description": "Professional dishwasher repair service for all major brands"
        }
      }
    ]
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Maria S."
      },
      "reviewBody": "The technician arrived on time, quickly diagnosed the issue with our refrigerator, and had it fixed in less than an hour. Excellent service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "David R."
      },
      "reviewBody": "Naples Appliance Repair saved the day when our washing machine broke down. Responsive, professional, and reasonably priced!"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
};
