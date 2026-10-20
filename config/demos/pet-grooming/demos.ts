
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
                    icon: "heart",
                },
                {
                    title: "Options for Every Size",
                    description:
                        "Prices are organized by small, medium, large and extra-large dogs.",
                    icon: "paw",
                },
                {
                    title: "Grooming Choices",
                    description:
                        "From a simple bath to a full groom or de-shedding service.",
                    icon: "scissor",
                },
                {
                    title: "Extra Little Touches",
                    description:
                        "Add-on options include nail clipping, ear cleaning and teeth brushing.",
                    icon: "sparkles",
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
    "fancy-fur-dog-grooming": {
        slug: "fancy-fur-dog-grooming",

        brand: {
            name: "Fancy Fur Dog Grooming",
            descriptor: "Home-Based, One-on-One Dog Grooming",
            logoText: "Fancy Fur",
        },

        contact: {
            phone: "",
            email: "",
            address: "Contact us for location and service availability",
            hours: "By appointment",
            messengerUrl:
                "https://www.facebook.com/profile.php?id=61591304920071",
        },

        hero: {
            eyebrow: "A little pampering goes a long way",
            title: "Because Every Dog Deserves to Feel",
            accentTitle: "Fancy & Fabulous",
            description:
                "Home-based, one-on-one dog grooming in a safe and caring environment. Your dog's comfort always comes first!",
            image:
                "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1600&q=85",
        },

        services: {
            title: "Our Grooming Services",
            description:
                "From a refreshing bath to a full makeover, we provide personalised grooming with your dog's comfort and wellbeing in mind.",

            items: [
                {
                    name: "Full Groom",
                    subtitle: "The complete grooming experience",
                    description:
                        "Includes bath, blow dry, brush out, full body clip, face and feet tidy, hygiene trim, and nail trim.",
                    prices: [
                        { label: "Small · 0–10 kg", price: "From $85" },
                        { label: "Medium · 10–20 kg", price: "From $100" },
                        { label: "Large · 20–35 kg", price: "From $130" },
                        { label: "Extra Large · 35 kg+", price: "From $150" },
                    ],
                    includes: [
                        "Bath and blow dry",
                        "Brush out",
                        "Full body clip",
                        "Face and feet tidy",
                        "Hygiene trim",
                        "Nail trim",
                    ],
                },
                {
                    name: "Bath & Tidy",
                    subtitle: "Fresh, clean, and neat",
                    description:
                        "Includes bath, blow dry, brush out, hygiene trim, paw tidy, face tidy, and nail trim.",
                    prices: [
                        { label: "Small · 0–10 kg", price: "From $70" },
                        { label: "Medium · 10–20 kg", price: "From $90" },
                        { label: "Large · 20–35 kg", price: "From $110" },
                        { label: "Extra Large · 35 kg+", price: "From $135" },
                    ],
                    includes: [
                        "Bath and blow dry",
                        "Brush out",
                        "Hygiene trim",
                        "Paw and face tidy",
                        "Nail trim",
                    ],
                },
                {
                    name: "Bath & Blow Dry",
                    subtitle: "A refreshing clean",
                    description:
                        "Includes bath, blow dry, nail trim, and thorough brush out.",
                    prices: [
                        { label: "Small · 0–10 kg", price: "From $55" },
                        { label: "Medium · 10–20 kg", price: "From $65" },
                        { label: "Large · 20–35 kg", price: "From $80" },
                        { label: "Extra Large · 35 kg+", price: "From $95" },
                    ],
                    includes: [
                        "Bath",
                        "Blow dry",
                        "Nail trim",
                        "Thorough brush out",
                    ],
                },
                {
                    name: "De-Shed Treatment",
                    subtitle: "Help manage loose undercoat",
                    description:
                        "Includes deshedding bath, blow dry, hygiene trim, paw tidy, nail trim, and thorough removal of loose undercoat.",
                    prices: [
                        { label: "Small · 0–10 kg", price: "From $75" },
                        { label: "Medium · 10–20 kg", price: "From $90" },
                        { label: "Large · 20–35 kg", price: "From $120" },
                        { label: "Extra Large · 35 kg+", price: "From $145" },
                    ],
                    includes: [
                        "Deshedding bath",
                        "Blow dry",
                        "Hygiene trim",
                        "Paw tidy",
                        "Nail trim",
                        "Loose undercoat removal",
                    ],
                },
                {
                    name: "Puppy's First Groom",
                    subtitle: "A gentle introduction to grooming",
                    description:
                        "A gentle introduction to grooming, tailored to your puppy's age and comfort.",
                    prices: [
                        { label: "Small · 0–10 kg", price: "From $75" },
                        { label: "Medium · 10–20 kg", price: "From $90" },
                        { label: "Large · 20–35 kg", price: "From $100" },
                        { label: "Extra Large · 35 kg+", price: "From $110" },
                    ],
                    includes: [
                        "Gentle introduction to grooming",
                        "Age-appropriate experience",
                        "Comfort-focused handling",
                    ],
                },
            ],

            addons: [
                { name: "Nail Trim", price: "$15" },
                { name: "Ear Clean", price: "$10" },
                { name: "Paw Pad & Hygiene Tidy", price: "$15" },
                { name: "Flea Treatment", price: "$20" },
                { name: "Dog Walking", price: "$25/hr" },
            ],
        },

        gallery: {
            title: "Happy Dogs, Fancy Furs",
            description:
                "Every pup deserves a little extra care, patience, and pampering.",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85",
                    alt: "Dog enjoying a grooming session",
                },
                {
                    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=85",
                    alt: "Happy dog after a grooming session",
                },
                {
                    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85",
                    alt: "Cute dog ready for some pampering",
                },
            ],
        },

        about: {
            eyebrow: "A safe and caring environment",
            title: "Your Dog's Comfort Comes First",
            description:
                "Fancy Fur Dog Grooming offers home-based, one-on-one grooming designed around your dog's comfort. Every appointment is an opportunity to provide gentle care and a positive grooming experience.",
            image:
                "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85",
            benefits: [
                {
                    title: "One-on-One Grooming",
                    description:
                        "Personal attention during your dog's grooming appointment.",
                    icon: "heart",
                },
                {
                    title: "Comfort Comes First",
                    description:
                        "A caring approach focused on your dog's comfort and wellbeing.",
                    icon: "shield-check",
                },
                {
                    title: "Personalised Care",
                    description:
                        "Services and grooming needs tailored to each dog's requirements.",
                    icon: "sparkles",
                },
            ],
        },

        booking: {
            title: "Book Your Dog's Pamper Session",
            description:
                "Tell us about your dog and the service you're interested in. We'll help you arrange an appointment.",
            breeds: [],
        },

        faqs: [
            {
                question: "How much does grooming cost?",
                answer:
                    "Prices are starting prices and may vary depending on breed, size, coat condition, matting, temperament, and the amount of time required.",
            },
            {
                question: "How do you determine my dog's size?",
                answer:
                    "Small dogs weigh 0–10 kg, medium dogs 10–20 kg, large dogs 20–35 kg, and extra-large dogs 35 kg and above.",
            },
            {
                question: "What happens if my dog's coat is severely matted?",
                answer:
                    "Severely matted coats may require clipping short for your dog's comfort and welfare.",
            },
            {
                question: "Do you groom puppies?",
                answer:
                    "Yes. The Puppy’s First Groom service provides a gentle introduction tailored to your puppy's age and comfort.",
            },
            {
                question: "Do you offer services other than grooming?",
                answer:
                    "The listed extras include nail trims, ear cleaning, paw pad and hygiene tidying, flea treatment, and dog walking.",
            },
            {
                question: "How do I arrange an appointment?",
                answer:
                    "Send us an enquiry with your dog's details and preferred service so we can discuss availability.",
            },
        ],

        brandColors: {
            background: "#FFF5FB",
            surface: "#FFE2F2",

            // Pink for primary actions
            primary: "#F34EAE",
            secondary: "#D92D91",

            // Dark text and contrast
            accent: "#171017",
            text: "#F34EAE",
            mutedText: "#705565",
            border: "#F3C3DF",
        },
    },
};

export default petGroomingDemo;
