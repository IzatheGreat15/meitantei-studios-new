
export type HVACIconName =
  | "snowflake"
  | "flame"
  | "wrench"
  | "wind"
  | "shield"
  | "clock"
  | "users"
  | "check"
  | "building"
  | "leaf"
  | "calendar";

export type HVACService = {
  title: string;
  description: string;
  image: string;
  icon: HVACIconName;
};

export type HVACProject = {
  title: string;
  location: string;
  image: string;
};

export type HVACReview = {
  name: string;
  location: string;
  rating: number;
  text: string;
};

export type HVACDemoConfig = {
  slug: string;

  brand: {
    name: string;
    shortName: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    tagline: string;
    logo?: string;
  };

  contact: {
    phone: string;
    email: string;
    address: string;
    businessHours: string;
    emergencyText: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    backgroundImage: string;
    primaryCta: string;
  };

  trustHighlights: {
    title: string;
    description: string;
    icon: HVACIconName;
  }[];

  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: HVACService[];
  };

  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    experience: string;
    customers: string;
    rating: string;
  };

  projects: {
    eyebrow: string;
    title: string;
    description: string;
    items: HVACProject[];
  };

  reviews: HVACReview[];

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
  };

  footer: {
    copyright: string;
    privacyUrl: string;
    termsUrl: string;
    socialLinks: {
      label: string;
      url: string;
    }[];
  };
};
