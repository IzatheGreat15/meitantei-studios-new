import type { PlumbingDemoConfig } from "./types";

const img = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const sharedServices = [
  {
    title: "General Plumbing",
    description: "Leaks, repairs, tapware, toilets and more.",
    image: img("photo-1607472586893-edb57bdc0e39", 600),
    icon: "tool",
  },
  {
    title: "Blocked Drains",
    description: "Fast and effective drain clearing.",
    image: img("photo-1584622650111-993a426fbf0a", 600),
    icon: "droplet",
  },
  {
    title: "Hot Water Systems",
    description: "Repairs, replacements and installations.",
    image: img("photo-1621905251189-08b45d6a269e", 600),
    icon: "water",
  },
  {
    title: "Pipe Repairs",
    description: "Fixing leaks and upgrading pipework.",
    image: img("photo-1504148455328-c376907d081c", 600),
    icon: "pipes",
  },
  {
    title: "Bathroom Renovations",
    description: "Complete plumbing for bathrooms and kitchens.",
    image: img("photo-1620626011761-996317b8d101", 600),
    icon: "bath",
  },
  {
    title: "New Builds & Renovations",
    description: "Plumbing for new homes, extensions and renovations.",
    image: img("photo-1600585154340-be6161a56a0c", 600),
    icon: "home",
  },
];

export const plumbingDemos: Record<string, PlumbingDemoConfig> = {
  "plumbing-1": {
    slug: "plumbing-1",
    brand: {
      name: "Perth Plumbing Co.",
      shortName: "Perth Plumbing Co.",
      primaryColor: "#0878f9",
      secondaryColor: "#082b46",
      accentColor: "#f4a928",
      tagline: "Plumbing & Maintenance",
    },
    contact: {
      phone: "(08) 6123 4567",
      email: "hello@perthplumbingco.com.au",
      address: "Perth, WA",
      businessHours: "Mon–Fri: 7:00am – 5:00pm",
      emergencyText: "Emergency enquiries welcome",
    },
    hero: {
      eyebrow: "LOCAL PLUMBERS IN PERTH",
      title: "Reliable Plumbing When You Need It",
      description: "Fast, professional and affordable plumbing services for homes and businesses across Perth.",
      backgroundImage: img("photo-1607472586893-edb57bdc0e39"),
      primaryCta: "Get a Free Quote",
    },
    trustHighlights: [
      { title: "Local & Family Owned", description: "Proudly supporting our local community.", icon: "users" },
      { title: "Quality Workmanship", description: "We stand behind our work with a satisfaction-first approach.", icon: "shield" },
      { title: "Clean & Respectful", description: "We treat your home with care and leave it clean.", icon: "leaf" },
      { title: "On-Time & Reliable", description: "We show up on time and get the job done right.", icon: "clock" },
    ],
    services: {
      eyebrow: "OUR SERVICES",
      title: "Complete Plumbing Solutions",
      items: sharedServices,
    },
    about: {
      eyebrow: "ABOUT US",
      title: "Your Local Perth Plumbers",
      description: "We help homeowners and businesses with dependable plumbing, repairs and installations. From a small repair to a major project, every job deserves care, clear communication and professional workmanship.",
      image: img("photo-1621905251189-08b45d6a269e"),
      experience: "10+",
      customers: "500+",
      rating: "4.9",
    },
    process: [
      { title: "Get in Touch", description: "Call us or request a quote online.", icon: "users" },
      { title: "We Schedule", description: "Choose a time that works for you.", icon: "calendar" },
      { title: "We Get to Work", description: "Our team completes the job professionally.", icon: "tool" },
      { title: "Job Done", description: "Enjoy reliable, long-lasting results.", icon: "check" },
    ],
    projects: {
      eyebrow: "RECENT WORK",
      title: "Quality Work. Real Results.",
      items: [
        { title: "Bathroom Renovation", location: "North Perth, WA", image: img("photo-1620626011761-996317b8d101", 800) },
        { title: "Hot Water System Installation", location: "Subiaco, WA", image: img("photo-1621905251189-08b45d6a269e", 800) },
        { title: "Blocked Drain Clearing", location: "Cottesloe, WA", image: img("photo-1584622650111-993a426fbf0a", 800) },
        { title: "Kitchen Renovation", location: "Fremantle, WA", image: img("photo-1600566753086-00f18fb6b3ea", 800) },
      ],
    },
    // Replace these examples with real, permission-approved customer reviews before launch.
    reviews: [
      { name: "Sarah T.", location: "Mount Lawley, WA", rating: 5, text: "Prompt, professional and excellent work. The team explained everything clearly." },
      { name: "Daniel K.", location: "Scarborough, WA", rating: 5, text: "Great communication and fair pricing. The installation was completed professionally." },
      { name: "Emily R.", location: "Fremantle, WA", rating: 5, text: "Reliable, friendly and quality-focused service from start to finish." },
    ],
    quote: {
      eyebrow: "GET A QUOTE",
      title: "Request a Free Quote",
      description: "Tell us a bit about what you need and we’ll get back to you as soon as possible.",
      services: ["General Plumbing", "Blocked Drains", "Hot Water Systems", "Pipe Repairs", "Bathroom Renovations", "New Builds & Renovations", "Other"],
    },
    serviceAreas: ["Perth CBD", "Fremantle", "Joondalup", "Rockingham", "Canning Vale", "Midland", "Scarborough", "Subiaco"],
    serviceAreaBanner: {
      eyebrow: "SERVICING PERTH & SURROUNDS",
      title: "Local Plumbers Across Perth",
      description: "Servicing Perth and surrounding suburbs. Get in touch to confirm availability in your area.",
      image: img("photo-1500530855697-b586d89ba3ee"),
      cta: "View Service Areas",
    },
    footer: {
      copyright: "All rights reserved.",
      privacyUrl: "#",
      termsUrl: "#",
      socialLinks: [
        { label: "Facebook", url: "#", icon: "facebook" },
        { label: "Instagram", url: "#", icon: "instagram" },
        { label: "Google", url: "#", icon: "google" },
      ],
    },
  },
  "plumbing-2": {
    slug: "plumbing-2",
    brand: {
      name: "West Coast Plumbing",
      shortName: "West Coast Plumbing",
      primaryColor: "#16845b",
      secondaryColor: "#073b32",
      accentColor: "#f3b63f",
      tagline: "Local Plumbing Experts",
    },
    contact: {
      phone: "(08) 6188 2040",
      email: "hello@westcoastplumbing.example",
      address: "Fremantle, WA",
      businessHours: "Mon–Fri: 7:00am – 5:00pm",
      emergencyText: "Ask about urgent repairs",
    },
    hero: {
      eyebrow: "YOUR LOCAL PLUMBING TEAM",
      title: "Plumbing Done Properly, Every Time",
      description: "Straightforward advice, quality workmanship and dependable plumbing for homes and businesses.",
      backgroundImage: img("photo-1607472586893-edb57bdc0e39"),
      primaryCta: "Request a Quote",
    },
    trustHighlights: [
      { title: "Locally Focused", description: "Proud to help homes and businesses in our community.", icon: "users" },
      { title: "Quality Work", description: "Careful workmanship from first visit to final check.", icon: "shield" },
      { title: "Respectful Service", description: "We keep your home tidy and treat it with care.", icon: "leaf" },
      { title: "Clear Communication", description: "Practical advice and updates at every step.", icon: "clock" },
    ],
    services: { eyebrow: "WHAT WE DO", title: "Plumbing Services for Every Need", items: sharedServices },
    about: {
      eyebrow: "ABOUT OUR TEAM",
      title: "Your Local Plumbing Partners",
      description: "From everyday maintenance to larger renovation projects, we focus on reliable service, transparent communication and solutions that suit your property.",
      image: img("photo-1621905251189-08b45d6a269e"),
      experience: "10+",
      customers: "500+",
      rating: "4.9",
    },
    process: [
      { title: "Tell Us What You Need", description: "Share your plumbing issue with our team.", icon: "users" },
      { title: "Pick a Time", description: "We’ll coordinate a suitable appointment.", icon: "calendar" },
      { title: "Expert Service", description: "We work carefully and keep you informed.", icon: "tool" },
      { title: "All Checked", description: "We review the work before wrapping up.", icon: "check" },
    ],
    projects: {
      eyebrow: "OUR WORK",
      title: "Practical Solutions, Quality Finish",
      items: [
        { title: "Bathroom Upgrade", location: "Fremantle, WA", image: img("photo-1620626011761-996317b8d101", 800) },
        { title: "Hot Water Replacement", location: "Hamilton Hill, WA", image: img("photo-1621905251189-08b45d6a269e", 800) },
        { title: "Drain Maintenance", location: "Cockburn, WA", image: img("photo-1584622650111-993a426fbf0a", 800) },
        { title: "Kitchen Plumbing", location: "East Fremantle, WA", image: img("photo-1600566753086-00f18fb6b3ea", 800) },
      ],
    },
    reviews: [],
    quote: {
      eyebrow: "LET’S TALK PLUMBING",
      title: "Tell Us About Your Project",
      description: "Send through a few details and we’ll follow up with the next steps.",
      services: ["General Plumbing", "Blocked Drains", "Hot Water Systems", "Pipe Repairs", "Bathroom Renovations", "New Builds & Renovations", "Other"],
    },
    serviceAreas: ["Fremantle", "East Fremantle", "Cockburn", "Hamilton Hill", "Bibra Lake", "Coogee", "Rockingham"],
    serviceAreaBanner: {
      eyebrow: "SERVICING THE COAST",
      title: "Your Local Plumbers on the Coast",
      description: "Helping local homes and businesses across Fremantle and nearby suburbs.",
      image: img("photo-1500530855697-b586d89ba3ee"),
      cta: "Explore Service Areas",
    },
    footer: {
      copyright: "All rights reserved.",
      privacyUrl: "#",
      termsUrl: "#",
      socialLinks: [
        { label: "Facebook", url: "#", icon: "facebook" },
        { label: "Instagram", url: "#", icon: "instagram" },
      ],
    },
  },
};
