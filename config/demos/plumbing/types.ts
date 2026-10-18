export type PlumbingService = {
  title: string;
  description: string;
  image: string;
  icon: string;
};

export type PlumbingProject = {
  title: string;
  location: string;
  image: string;
};

export type PlumbingReview = {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar?: string;
};

export type PlumbingDemoConfig = {
  slug: string;
  logo?: string,
  brand: {
    name: string;
    shortName?: string;
    logo?: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    tagline?: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    businessHours: string;
    emergencyText?: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    backgroundImage: string;
    primaryCta: string;
    alignment?: string;
  };
  trustHighlights: { title: string; description: string; icon: string }[];
  services: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: PlumbingService[];
  };
  about: {
    eyebrow?: string;
    title: string;
    description: string;
    image: string;
    experience: string;
    customers: string;
    rating: string;
  };
  process: { title: string; description: string; icon: string }[];
  projects: {
    eyebrow?: string;
    title: string;
    items: PlumbingProject[];
  };
  reviews: PlumbingReview[];
  quote: {
    eyebrow: string;
    title: string;
    description: string;
    services: string[];
  };
  serviceAreas: string[];
  serviceAreaBanner: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    cta: string;
  };
  footer: {
    copyright: string;
    privacyUrl?: string;
    termsUrl?: string;
    socialLinks?: { label: string; url: string; icon: string }[];
  };
};
