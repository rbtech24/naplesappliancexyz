export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceArea {
  name: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  appliance: string;
  issue: string;
  preferred_date: string;
}
