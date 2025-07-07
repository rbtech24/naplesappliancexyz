import { FAQ, Service, ServiceArea } from "@/types";
import refrigeratorImg from "../assets/refrigerator.webp";
import washerImg from "../assets/washer.webp";
import dryerImg from "../assets/dryer.webp";
import ovenImg from "../assets/oven.webp";
import stoveImg from "../assets/stove.webp";
import dishwasherImg from "../assets/dishwasher.webp";

export const services: Service[] = [
  {
    id: "appliance-repair",
    title: "Appliance Repair",
    description: "Professional repair services for all home appliances. From refrigerators to washers, we fix them all with expert precision and same-day service.",
    image: refrigeratorImg, // Using refrigerator image as general appliance representation
    icon: "fa-tools",
    features: [
      "All major appliance brands",
      "Same-day service available",
      "Licensed & insured technicians"
    ]
  },
  {
    id: "refrigerator-repair",
    title: "Refrigerator Repair",
    description: "Our expert technicians can diagnose and fix issues with all refrigerator types including French door, side-by-side, top and bottom freezer models.",
    image: refrigeratorImg,
    icon: "fa-snowflake",
    features: [
      "Temperature control problems",
      "Water dispenser & ice maker repairs",
      "Compressor & cooling issues"
    ]
  },
  {
    id: "washing-machine-repair",
    title: "Washing Machine Repair",
    description: "We service all types of washing machines including front load, top load, HE models, and smart washers from all major brands.",
    image: washerImg,
    icon: "fa-tshirt",
    features: [
      "Leaking & drainage problems",
      "Spin cycle issues & noisy operation",
      "Control board & electrical problems"
    ]
  },
  {
    id: "dryer-repair",
    title: "Dryer Repair",
    description: "Our technicians are experts at repairing both gas and electric dryers of all makes and models, including ventless and heat pump dryers.",
    image: dryerImg,
    icon: "fa-wind",
    features: [
      "Not heating or taking too long to dry",
      "Noisy operation & drum issues",
      "Thermostat & heating element replacement"
    ]
  },
  {
    id: "oven-repair",
    title: "Oven & Range Repair",
    description: "Our specialists repair all oven types including conventional, convection, gas, electric, and dual-fuel ranges from all major brands.",
    image: ovenImg,
    icon: "fa-fire",
    features: [
      "Temperature control & calibration",
      "Burner & heating element replacement",
      "Door, gasket & sensor repairs"
    ]
  },
  {
    id: "dishwasher-repair",
    title: "Dishwasher Repair",
    description: "We diagnose and repair all dishwasher problems on standard and smart models from all the leading manufacturers.",
    image: dishwasherImg,
    icon: "fa-sink",
    features: [
      "Drainage & cleaning performance issues",
      "Water leaks & pump problems",
      "Motor, spray arm & door repairs"
    ]
  },
  {
    id: "microwave-repair",
    title: "Microwave Repair",
    description: "We service all types of microwaves including countertop, over-the-range, built-in, and drawer models from all major brands.",
    image: stoveImg,
    icon: "fa-radiation",
    features: [
      "Heating & power issues",
      "Turntable & door problems",
      "Control panel & touchpad repairs"
    ]
  }
];

export const brands = [
  "Samsung", "LG", "Whirlpool", "GE", "Maytag", "Bosch", 
  "KitchenAid", "Frigidaire", "Electrolux", "Kenmore",
  "Sub-Zero", "Wolf", "Viking", "Thermador", "Miele", 
  "Fisher & Paykel", "Dacor", "JennAir", "Asko", "Speed Queen", 
  "Amana", "Haier", "Bertazzoni", "Smeg", "Sharp", "Panasonic", 
  "Toshiba", "Hotpoint", "Roper", "Admiral", "Magic Chef", 
  "U-Line", "Scotsman", "BlueStar", "True", "Fulgor Milano"
];

export const faqs: FAQ[] = [
  {
    question: "How quickly can you service my appliance?",
    answer: "In most cases, we can schedule same-day or next-day service, depending on our current schedule and your location in Naples. We prioritize emergency situations such as refrigerator failures or water leaks. When you call, our team will provide you with the earliest available appointment time."
  },
  {
    question: "Do you provide a warranty on repairs?",
    answer: "Yes, we stand behind our work. We offer a 90-day warranty on both parts and labor for all standard repairs. For certain major components, extended warranties may apply. Our technician will explain the specific warranty details that apply to your repair during the service visit."
  },
  {
    question: "How much will my appliance repair cost?",
    answer: "We charge a standard diagnostic fee which is applied toward the cost of the repair if you proceed with our service. The total repair cost depends on the specific issue, required parts, and labor time. After diagnosing the problem, our technician will provide you with an upfront quote before beginning any repair work. There are no hidden fees or surprises."
  },
  {
    question: "Do you repair all appliance brands?",
    answer: "Yes, our technicians are trained to repair all major appliance brands including Samsung, LG, Whirlpool, GE, Maytag, Bosch, KitchenAid, Frigidaire, Electrolux, Kenmore, and many more. We regularly update our training to stay current with the latest appliance models and technologies."
  },
  {
    question: "Should I repair my appliance or replace it?",
    answer: "This depends on several factors including the age of your appliance, the cost of repair versus replacement, and the appliance's repair history. As a general rule, if the repair cost exceeds 50% of the price of a new appliance and the unit is more than 7 years old, replacement might be more economical. Our technicians can provide honest advice based on your specific situation to help you make the best decision."
  }
];

export const serviceAreas: ServiceArea[] = [
  { name: "Naples" },
  { name: "Marco Island" },
  { name: "Bonita Springs" },
  { name: "Estero" },
  { name: "Golden Gate" },
  { name: "Pelican Bay" },
  { name: "Naples Park" },
  { name: "Pine Ridge" },
  { name: "North Naples" },
  { name: "East Naples" },
  { name: "Lely" },
  { name: "Fort Myers" },
  { name: "Immokalee" },
  { name: "Everglades City" }
];
