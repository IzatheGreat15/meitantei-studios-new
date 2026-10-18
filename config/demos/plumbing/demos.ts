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
      address: "Southern River, WA 6110, Australia",
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
  "black-swan-handyman": {
    slug: "black-swan-handyman",
    // Replace with the business's verified logo URL.
    logo: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/726380977_122133926511095147_1933872036711636348_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0lKxBtoJ1uQQ7kNvwGEWADZ&_nc_oc=Adpfp769fgRQtUmwFSTFa0wUkXCQPK9DBPHcSDxNwW0ffPe5cLpuaQ3abUlZs8fn10s&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=YVaFUd4jacyIWDEF_Z6egA&_nc_ss=7b2a8&oh=00_AQNWiXk2BC7px4nyyLPRGx4wQWIseQyomvz9Y3WTW5XH-w&oe=6ADA4769",

    brand: {
      name: "Black Swan Handyman WA",
      shortName: "Black Swan Handyman",
      primaryColor: "#E31B23",   // Crimson red from the logo
      secondaryColor: "#080808", // Deep black background
      accentColor: "#BFC1C4",    // Silver/grey from the swan
      tagline: "No Job Too Small – Free Quotes Available",
    },

    contact: {
      phone: "", // Add verified business phone
      email: "", // Add verified business email
      address: "Southern River, WA 6110, Australia",
      businessHours: "", // Add verified business hours
      emergencyText: "Free quotes available",
    },

    hero: {
      eyebrow: "LOCAL HANDYMAN IN SOUTHERN RIVER & PERTH",
      title: "Your To-Do List. Taken Care Of.",
      description:
        "From home repairs and installations to garden clean-ups and property maintenance, get help with the jobs on your list. Serving Southern River and surrounding Perth suburbs.",
      backgroundImage: img("photo-1600585154340-be6161a56a0c"),
      primaryCta: "Get a Free Quote",
    },

    trustHighlights: [
      {
        title: "No Job Too Small",
        description:
          "From minor fixes to larger home improvement projects.",
        icon: "wrench",
      },
      {
        title: "A Wide Range of Services",
        description:
          "Handyman work, installations, garden care and property improvements.",
        icon: "layers",
      },
      {
        title: "Indoor & Outdoor Work",
        description:
          "Practical solutions for your home, garden and outdoor spaces.",
        icon: "house",
      },
      {
        title: "Free Quotes Available",
        description:
          "Get in touch to discuss your job and request a quote.",
        icon: "message-circle",
      },
    ],

    services: {
      eyebrow: "WHAT WE DO",
      title: "One Handy Solution for Your Property",
      items: [
        {
          title: "General Handyman Services",
          description:
            "Get those everyday repairs, maintenance tasks and home improvement jobs sorted.",
          icon: "wrench",
          image: img("photo-1562259929-b4e1fd3aef09"),
          items: [
            "Property Maintenance",
            "Home Repairs",
            "Door Repairs & Adjustments",
            "Lock Installation & Replacement",
            "Flyscreen Repairs",
            "Flat Pack Furniture Assembly",
            "Picture, Mirror & TV Mounting",
            "Curtain & Blind Installation",
            "Shelving Installation",
            "Gutter Cleaning (Single Story Only)",
            "Pressure Washing",
            "Fence Repairs",
            "Gate Repairs",
            "Pergola Repairs",
            "Decking Repairs & Installation",
            "Composite Decking Installation",
            "Patio Repairs & Maintenance",
            "Outdoor Entertaining Area Improvements",
          ],
        },
        {
          title: "Installation Services",
          description:
            "Get household fixtures, outdoor equipment and selected security products installed.",
          icon: "zap",
          image: img("photo-1621905251918-48416bd8575a"),
          items: [
            "Outdoor Kitchen Assembly",
            "BBQ Assembly",
            "Garden Shed Assembly",
            "Letterbox Installation",
            "Clothesline Installation",
            "Fusion Light Installation",
            "Solar Light Installation",
            "Security Camera Installation",
            "Sensor Light Installation",
          ],
        },
        {
          title: "Garden & Outdoor Services",
          description:
            "Tidy up your outdoor areas and keep your garden looking its best.",
          icon: "leaf",
          image: img("photo-1668189777890-495c36095340"),
          items: [
            "Garden Clean-Ups",
            "Weed Removal",
            "Mulching",
            "Tree & Shrub Trimming",
            "Green Waste Removal",
            "Yard Tidy-Ups",
            "Storm Damage Clean-Up",
          ],
        },
        {
          title: "Welding & Metal Fabrication",
          description:
            "Custom metal fabrication and welding for suitable property projects.",
          icon: "hammer",
          image: img("photo-1609348632802-b952f368fc3a"),
          items: [
            "Custom Fabrication & Welding",
          ],
        },
        {
          title: "Property Improvement Services",
          description:
            "Practical maintenance and repair solutions for residential and commercial properties.",
          icon: "building",
          image: img("photo-1618221195710-dd6b41faaea6"),
          items: [
            "Rental Property Maintenance",
            "End of Lease Repairs",
            "Pre-Sale Property Improvements",
            "Storm Damage Repairs",
            "Insurance Repair Work",
            "General Home Improvements",
            "Commercial Property Maintenance",
          ],
        },
      ],
    },

    about: {
      eyebrow: "ABOUT BLACK SWAN HANDYMAN",
      title: "Making Property Maintenance Easier",
      description:
        "From the small jobs that keep getting put off to bigger property improvements, Black Swan Handyman WA offers a range of handyman, installation, garden and maintenance services across Perth Metro and surrounding areas. No job too small — get in touch for a free quote.",
      image: img("photo-1600566753086-00f18fb6b3ea"),
      experience: "5+", // Add verified years of experience
      customers: "125", // Add verified customer count
      rating: "5.0", // Add verified rating
    },

    process: [
      {
        title: "Tell Us About Your Job",
        description:
          "Let us know what needs fixing, installing or improving.",
        icon: "message-circle",
      },
      {
        title: "Request a Free Quote",
        description:
          "Share the details so your job can be assessed and quoted.",
        icon: "clipboard-list",
      },
      {
        title: "Get the Job Sorted",
        description:
          "Arrange the work and confirm the details directly with the business.",
        icon: "wrench",
      },
      {
        title: "Enjoy Your Space",
        description:
          "Get back to enjoying a more functional, well-maintained property.",
        icon: "check-circle",
      },
    ],

    projects: {
      eyebrow: "OUR SERVICES IN ACTION",
      title: "From Small Fixes to Outdoor Improvements",
      items: [
        {
          title: "Decking & Outdoor Areas",
          location: "Perth Metro, WA",
          image: img("photo-1656646549633-80ad4bd2ab40", 800),
        },
        {
          title: "Home Repairs & Improvements",
          location: "Perth Metro, WA",
          image: img("photo-1618832515490-e181c4794a45", 800),
        },
        {
          title: "Garden & Yard Maintenance",
          location: "Perth Metro, WA",
          image: img("photo-1690068023694-053da714f95f", 800),
        },
        {
          title: "Property Maintenance",
          location: "Perth Metro, WA",
          image: img("photo-1786295866839-d17f879c65cd", 800),
        },
      ],
    },

    // Do not publish fabricated testimonials.
    // Replace these with genuine, permission-approved customer reviews.
    reviews: [],

    quote: {
      eyebrow: "LET'S GET IT SORTED",
      title: "What Needs Fixing or Improving?",
      description:
        "Tell us about your job and request a free quote. From handyman repairs to outdoor improvements, we're here to help.",
      services: [
        "General Handyman Services",
        "Property Maintenance",
        "Home Repairs",
        "Door & Lock Repairs",
        "Furniture Assembly & Mounting",
        "Installation Services",
        "Garden & Outdoor Services",
        "Decking, Fences & Pergolas",
        "Welding & Metal Fabrication",
        "Rental Property Maintenance",
        "End of Lease Repairs",
        "Commercial Property Maintenance",
        "Storm Damage Repairs",
        "Other",
      ],
    },

    serviceAreas: [
      "Southern River",
      "Gosnells",
      "Huntingdale",
      "Thornlie",
      "Canning Vale",
      "Harrisdale",
      "Piara Waters",
      "Perth Metro",
    ],

    serviceAreaBanner: {
      eyebrow: "SOUTHERN RIVER & SURROUNDING AREAS",
      title: "Your Local Handyman in Southern River",
      description:
        "From small household fixes to outdoor improvements and property maintenance, get in touch for a free quote and to confirm availability in your area.",
      image: img("photo-1500530855697-b586d89ba3ee"),
      cta: "Request a Free Quote",
    },

    footer: {
      copyright: "All rights reserved.",
      privacyUrl: "#", // Replace when privacy policy is published
      termsUrl: "#", // Replace when terms are published
      socialLinks: [
        {
          label: "Facebook",
          url: "", // Add the verified Facebook page URL
          icon: "facebook",
        },
      ],
    },
  },

  "kc-carpentry-and-building": {
    slug: "kc-carpentry-and-building",

    // Replace with an approved logo image after verifying their branding.
    // logo: "",

    brand: {
      name: "KC Carpentry and Building",
      shortName: "KC Carpentry",
      primaryColor: "#9A623B",
      secondaryColor: "#25221F",
      accentColor: "#D9B88F",
      tagline: "Quality Carpentry. Thoughtful Craftsmanship.",
    },

    contact: {
      phone: "08 6219 3687",
      email: "",
      address: "Samuel place, Perth, Western Australia 6065",
      businessHours: "",
      emergencyText: "Get in touch to discuss your project",
    },

    hero: {
      eyebrow: "CARPENTRY & DECKING IN PERTH",
      title: "Quality Craftsmanship for Your Home",
      description:
        "From custom timber projects and decking to door installations, outdoor screens and detailed finishing work, bring your next home improvement project to life with KC Carpentry and Building.",
      backgroundImage: img("photo-1600566753086-00f18fb6b3ea"),
      primaryCta: "Request a Quote",
      alignment: "center",
    },

    trustHighlights: [
      {
        title: "Family Owned & Operated",
        description:
          "A family-run business providing personalised carpentry services.",
        icon: "users",
      },
      {
        title: "Quality Craftsmanship",
        description:
          "Attention to detail and carefully finished carpentry work.",
        icon: "shield",
      },
      {
        title: "Custom Timber Projects",
        description:
          "Practical timber solutions tailored to your space and requirements.",
        icon: "hammer",
      },
      {
        title: "Helpful Advice",
        description:
          "Discuss your ideas and explore practical solutions for your home.",
        icon: "message-circle",
      },
    ],

    services: {
      eyebrow: "WHAT WE DO",
      title: "Carpentry Solutions Built Around Your Home",
      items: [
        {
          title: "Custom Timber Projects",
          description:
            "Custom timber pieces designed around your space, needs and style.",
          icon: "hammer",
          image: img("photo-1587582423116-ec07293f0395"),
          items: [
            "Custom Timber Projects",
            "Custom Shelving",
            "Tables and Bespoke Timber Pieces",
          ],
        },
        {
          title: "Decking & Outdoor Screens",
          description:
            "Make outdoor spaces more functional and comfortable with timber features.",
          icon: "layers",
          image: img("photo-1716904519810-349244919824"),
          items: [
            "Decking",
            "Outdoor Timber Screens",
            "Privacy Screens",
            "Outdoor Shade and Privacy Solutions",
          ],
        },
        {
          title: "Doors & Door Frames",
          description:
            "Professional door installations and carpentry adjustments for a clean finish.",
          icon: "door-open",
          image: img("photo-1537199322506-85bfd51c0601"),
          items: [
            "Door Installation",
            "Door Frame Installation",
            "Window-to-Door Conversions",
            "Door Frame Finishing",
          ],
        },
        {
          title: "Interior Finishing",
          description:
            "Add detail and character to interiors with carefully fitted timber finishes.",
          icon: "house",
          image: img("photo-1649083048337-4aeb6dda80bb"),
          items: [
            "Cedar Linings",
            "Skirting Boards",
            "Window Face Lifts",
            "Decorative Timber Finishes",
          ],
        },
        {
          title: "Handrails & Safety Features",
          description:
            "Functional timber handrails that complement stairs, decks and interiors.",
          icon: "shield-check",
          image: img("photo-1718418762676-98c0f462d668"),
          items: [
            "Custom Handrails",
            "Stair Handrails",
            "Deck Handrails",
          ],
        },
      ],
    },

    about: {
      eyebrow: "ABOUT KC CARPENTRY AND BUILDING",
      title: "Personal Service. Quality Workmanship.",
      description:
        "Kieran, Katie and the team at KC Carpentry and Building are a family-owned and operated carpentry business. They help homeowners with a range of carpentry projects, from custom timber work and outdoor screens to door installations and detailed interior finishes. Their focus is on quality workmanship, attention to detail and helpful advice.",
      image: img("photo-1600607687939-ce8a6c25118c"),
      experience: "26+",
      customers: "250+",
      rating: "5.0",
    },

    process: [
      {
        title: "Tell Us About Your Project",
        description:
          "Share your ideas, requirements and the changes you want to make.",
        icon: "message-circle",
      },
      {
        title: "Discuss Your Options",
        description:
          "Talk through practical solutions, materials and design possibilities.",
        icon: "clipboard-list",
      },
      {
        title: "Plan the Work",
        description:
          "Confirm the project scope and arrange the next steps.",
        icon: "calendar",
      },
      {
        title: "Bring Your Project to Life",
        description:
          "Turn your carpentry plans into a finished space or feature.",
        icon: "check-circle",
      },
    ],

    projects: {
      eyebrow: "CARPENTRY & BUILDING PROJECTS",
      title: "Crafted Details. Better Living Spaces.",
      items: [
        {
          title: "Timber Decking",
          location: "Perth, WA",
          image: img("photo-1575517112370-130b9e327b22", 800),
        },
        {
          title: "Outdoor Privacy Screens",
          location: "Perth, WA",
          image: img("photo-1637268122261-fe304014e954", 800),
        },
        {
          title: "Custom Shelving & Timber Features",
          location: "Perth, WA",
          image: img("photo-1647481045013-8efc5594369d", 800),
        },
        {
          title: "Doors & Interior Finishing",
          location: "Perth, WA",
          image: img("photo-1600566753086-00f18fb6b3ea", 800),
        },
      ],
    },

    // Add genuine customer reviews only after obtaining and verifying them.
    reviews: [],

    quote: {
      eyebrow: "START YOUR PROJECT",
      title: "Tell Us What You Have in Mind",
      description:
        "Planning a new deck, custom timber feature or carpentry improvement? Share your project details to start a conversation with KC Carpentry and Building.",
      services: [
        "Decking",
        "Outdoor Timber Screens",
        "Custom Timber Projects",
        "Custom Shelving",
        "Door Installation",
        "Door Frames",
        "Window-to-Door Conversion",
        "Cedar Linings",
        "Skirting Boards",
        "Window Face Lifts",
        "Handrails",
        "Other Carpentry Work",
      ],
    },

    serviceAreas: [
      "Perth",
      "Perth Metro",
    ],

    serviceAreaBanner: {
      eyebrow: "CARPENTRY SERVICES IN PERTH",
      title: "Planning a Home Improvement Project?",
      description:
        "From outdoor timber features to interior carpentry and finishing, get in touch to discuss your project and confirm service availability in your area.",
      image: img("photo-1600585154340-be6161a56a0c"),
      cta: "Discuss Your Project",
    },

    footer: {
      copyright: "All rights reserved.",
      privacyUrl: "#",
      termsUrl: "#",
      socialLinks: [
        {
          label: "Instagram",
          url: "https://www.instagram.com/kccarpentryandbuilding/",
          icon: "instagram",
        },
      ],
    },
  },
};
