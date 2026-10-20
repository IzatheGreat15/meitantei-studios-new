
import { PetGroomingConfig } from "./types";

const petGroomingDemo: Record<string, PetGroomingConfig> = {
  "paws-for-perfection": {
    slug: "paws-for-perfection",

    brand: {
      name: "Paws for Perfection",
      descriptor: "Dog Grooming",
      logoText: "Paws for Perfection",
    },

    brandColors: {
      background: "#FBF9FF",
      surface: "#F0EAFE",
      primary: "#17131F",
      secondary: "#2D2340",
      accent: "#B7A1E8",
      text: "#201B29",
      mutedText: "#6D6578",
      border: "#E5DDF3",
    },

    contact: {
      // Replace with the client's actual contact information.
      phone: "+61 428 994 040",
      email: "paws4perfdg@gmail.com",
      address: "161 Blackall drive , Greenwood, WA, Australia, 6024",
      hours: "Contact us for opening hours",
      messengerUrl: "https://www.facebook.com/profile.php?id=61593306245153",
    },

    hero: {
      eyebrow: "Professional Dog Grooming",
      title: "A Little Pampering",
      accentTitle: "Goes a Long Way.",
      description:
        "From a refreshing bath to a full groom, we help your furry friend look and feel their best with grooming options tailored to their coat and size.",
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85",
    },

    services: {
      title: "Our Grooming Price List",
      description:
        "Choose the grooming service that suits your dog's coat, size and needs. Prices are listed by dog size, with additional treatments available.",

      items: [
        {
          name: 'Bath and Towel Dry "Short"',
          subtitle: "For short coats",
          description:
            "Bath and towel drying for dogs with short coats.",
          prices: [
            { label: "Small", price: "$25" },
            { label: "Medium", price: "$30" },
            { label: "Large", price: "$35" },
            { label: "Extra Large", price: "$40" },
          ],
          includes: [],
        },
        {
          name: 'Bath and Towel Dry "Long"',
          subtitle: "For long coats",
          description:
            "Bath and towel drying for dogs with longer coats.",
          prices: [
            { label: "Small", price: "$35" },
            { label: "Medium", price: "$40" },
            { label: "Large", price: "$45" },
            { label: "Extra Large", price: "$50" },
          ],
          includes: [],
        },
        {
          name: 'Bath and Blow Dry "Short"',
          subtitle: "Short-coat care",
          description:
            "Bathing and blow drying for dogs with short coats.",
          prices: [
            { label: "Small", price: "$45" },
            { label: "Medium", price: "$50" },
            { label: "Large", price: "$55" },
            { label: "Extra Large", price: "$55" },
          ],
          includes: [],
        },
        {
          name: 'Bath and Blow Dry "Long"',
          subtitle: "Long-coat care",
          description:
            "Bathing and blow drying for dogs with longer coats.",
          prices: [
            { label: "Small", price: "$50" },
            { label: "Medium", price: "$55" },
            { label: "Large", price: "$60" },
            { label: "Extra Large", price: "$70" },
          ],
          includes: [],
        },
        {
          name: "Tidy Up",
          subtitle: "A neat and tidy finish",
          description:
            "A tidy-up grooming service to help keep your dog looking neat.",
          prices: [
            { label: "Small", price: "$80" },
            { label: "Medium", price: "$90" },
            { label: "Large", price: "$100" },
            { label: "Extra Large", price: "$115" },
          ],
          includes: [],
        },
        {
          name: "Full Groom",
          subtitle: "Complete grooming",
          description:
            "A full grooming service for a refreshed, well-groomed look.",
          prices: [
            { label: "Small", price: "$110" },
            { label: "Medium", price: "$120" },
            { label: "Large", price: "$135" },
            { label: "Extra Large", price: "$145" },
          ],
          includes: [],
        },
        {
          name: "Deshed",
          subtitle: "For shedding coats",
          description:
            "A de-shedding service for dogs that need extra coat maintenance.",
          prices: [
            { label: "Small", price: "$100" },
            { label: "Medium", price: "$110" },
            { label: "Large", price: "$120" },
            { label: "Extra Large", price: "$130" },
          ],
          includes: [],
        },
      ],

      addons: [
        { name: "Puppy Intro", price: "$45" },
        { name: "Nail Clip", price: "$15" },
        { name: "Ear Clean", price: "$10" },
        { name: "Teeth Brushing", price: "$15" },
      ],
    },

    gallery: {
      title: "Happy Dogs, Happy Owners.",
      description:
        "Every dog has their own personality. Explore our grooming services and discover the care your furry friend deserves.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85",
          alt: "Golden dog outdoors",
        },
        {
          src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=85",
          alt: "Happy dog looking at the camera",
        },
        {
          src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=85",
          alt: "Two dogs enjoying time together",
        },
      ],
    },

    about: {
      eyebrow: "Why Choose Us",
      title: "Every Dog Deserves a Little Pampering.",
      description:
        "From bath time to a full groom, our goal is to make grooming a positive part of your dog's care routine.",
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=85",

      benefits: [
        {
          title: "Care for Every Coat",
          description:
            "Choose from short-coat and long-coat bathing options.",
          icon: "♡",
        },
        {
          title: "Options for Every Size",
          description:
            "Prices are organized by small, medium, large and extra-large dogs.",
          icon: "🐾",
        },
        {
          title: "Grooming Choices",
          description:
            "From a simple bath to a full groom or de-shedding service.",
          icon: "✂",
        },
        {
          title: "Extra Little Touches",
          description:
            "Add-on options include nail clipping, ear cleaning and teeth brushing.",
          icon: "✦",
        },
      ],
    },

    booking: {
      title: "Request an Appointment",
      description:
        "Tell us about your dog and the service you're interested in. We'll get in touch to discuss your appointment.",
      breeds: [
        "Small dog",
        "Medium dog",
        "Large dog",
        "Extra large dog",
        "Other",
      ],
    },

    faqs: [
      {
        question: "How do I choose the right service?",
        answer:
          "Choose the service that best matches your dog's coat and grooming needs. Contact the business if you're unsure.",
      },
      {
        question: "How is the price determined?",
        answer:
          "Prices vary by service and dog size. Contact the business to confirm the price for your dog.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "We recommend sending an appointment request so the business can confirm availability.",
      },
      {
        question: "Can I add nail clipping or ear cleaning?",
        answer:
          "Nail clipping and ear cleaning are listed as additional services on the price list.",
      },
      {
        question: "Do you offer puppy grooming?",
        answer:
          "The price list includes a Puppy Intro service. Contact the business to discuss suitability and availability.",
      },
      {
        question: "How do I confirm my appointment?",
        answer:
          "Submit an enquiry and wait for the business to confirm the appointment details.",
      },
    ],
  },
};

export default petGroomingDemo;
