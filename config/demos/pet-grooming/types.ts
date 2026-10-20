export type PetGroomingConfig = {
  slug: string;
  brand: {
    name: string;
    descriptor: string;
    logoText?: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string;
    messengerUrl?: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    accentTitle: string;
    description: string;
    image: string;
  };
  services: {
    title: string;
    description: string;
    items: {
      name: string;
      subtitle: string;
      description: string;
      prices: { label: string; price: string }[];
      includes: string[];
    }[];
    addons: { name: string; price: string }[];
  };
  gallery: {
    title: string;
    description: string;
    images: { src: string; alt: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    benefits: { title: string; description: string; icon: string }[];
  };
  booking: {
    title: string;
    description: string;
    breeds: string[];
  };
  faqs: { question: string; answer: string }[];
  theme?: {
    background?: string;
    surface?: string;
    primary?: string;
    accent?: string;
    text?: string;
  };
  brandColors: {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    mutedText: string;
    border: string;
  };

};