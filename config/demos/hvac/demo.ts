import { HVACDemoConfig } from "./types";

const img = (id: string, width = 1200) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const primalServices: HVACDemoConfig["services"]["items"] = [
    {
        title: "Split System Installation",
        description:
            "Supply and installation of split systems for homes, bedrooms and smaller commercial spaces.",
        image: "https://media.istockphoto.com/id/1368514998/photo/hand-adjusting-temperature-on-air-conditioner.jpg?s=2048x2048&w=is&k=20&c=fGpVeVjiz0fq9rG4yWW71Nfm-ESUyi1vHfI2EjQH-NE=",
        icon: "snowflake",
    },
    {
        title: "Ducted Air Conditioning",
        description:
            "Whole-home and commercial ducted systems designed for comfortable, even airflow.",
        image: "https://www.apexaircon.com.au/wp-content/uploads/2019/08/AdobeStock_218238116-1080x675.jpeg",
        icon: "wind",
    },
    {
        title: "Repairs & Fault Finding",
        description:
            "Troubleshooting, diagnostics and repairs to help get your system running again.",
        image: "https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        icon: "wrench",
    },
    {
        title: "Servicing & Maintenance",
        description:
            "Routine cleaning, inspections and preventative maintenance for your air conditioner.",
        image: "https://plus.unsplash.com/premium_photo-1664298059861-1560b39fb890?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        icon: "clock",
    },
    {
        title: "Commercial Refrigeration",
        description:
            "Refrigeration installation and maintenance for eligible commercial applications.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOM7Y1-GO8SqWGWBcDhOinZn20wx5B5JnbMRDxsEIVsWepuMsGAnZ9HOFc&s=10",
        icon: "building",
    },
    {
        title: "Air Quality Solutions",
        description:
            "Explore filtration, ventilation and indoor air quality improvements for your space.",
        image: img("photo-1600210492486-724fe5c67fb0"),
        icon: "wind",
    },
    {
        title: "Smart Climate Controls",
        description:
            "Thermostats and control options to help manage comfort throughout the day.",
        image: img("photo-1558002038-1055907df827"),
        icon: "shield",
    },
    {
        title: "Energy-Efficient Upgrades",
        description:
            "Discuss modern system options that may improve efficiency and reduce energy use.",
        image: img("photo-1497366754035-f200968a6e72"),
        icon: "leaf",
    },
];

export const hvacDemos: Record<string, HVACDemoConfig> = {
    "primal-air": {
        slug: "primal-air",

        brand: {
            name: "Primal Air & Refrigeration",
            shortName: "PRIMAL",
            tagline: "Air Conditioning & Refrigeration",

            primaryColor: "#0878D1",
            secondaryColor: "#092D4B",
            accentColor: "#22B8E6",

            backgroundColor: "#F4F9FD",
            surfaceColor: "#FFFFFF",
            sectionBackgroundColor: "#EAF4FB",
            inputBackgroundColor: "#F4F8FC",

            textColor: "#334155",
            headingColor: "#092D4B",
            mutedTextColor: "#64748B",
            inverseTextColor: "#FFFFFF",
            inverseMutedTextColor: "#CBD5E1",

            borderColor: "#D8E5EF",
        },

        contact: {
            phone: "(08) 6123 4567",
            email: "hello@primalair.com.au",
            address: "Southern River, WA 6110, Australia",
            businessHours: "Mon–Fri: 7:00am – 5:00pm",
            emergencyText: "Contact us to discuss urgent service",
        },

        hero: {
            eyebrow: "AIR CONDITIONING EXPERTS IN PERTH",
            title: "Comfort in Every Season.",
            description:
                "Professional air conditioning and refrigeration services for homes and businesses across Perth. From installation to repairs and routine maintenance, we're here to help.",
            backgroundImage: "https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            primaryCta: "Get a Free Quote",
        },

        trustHighlights: [
            {
                title: "Qualified Technicians",
                description:
                    "Work completed by appropriately qualified technicians.",
                icon: "shield",
            },
            {
                title: "Reliable Service",
                description:
                    "Clear communication and practical scheduling.",
                icon: "clock",
            },
            {
                title: "Energy-Conscious Options",
                description:
                    "Solutions selected to suit your space and needs.",
                icon: "leaf",
            },
            {
                title: "Residential & Commercial",
                description:
                    "Air conditioning and refrigeration solutions for different properties.",
                icon: "building",
            },
        ],

        services: {
            eyebrow: "OUR SERVICES",
            title: "Complete Climate Solutions",
            description:
                "Installation, repairs and maintenance for residential and commercial air conditioning and refrigeration.",
            items: primalServices,
        },

        about: {
            eyebrow: "ABOUT PRIMAL",
            title: "Local. Experienced. Reliable.",
            description:
                "At Primal Air & Refrigeration, we help create comfortable indoor spaces through thoughtful recommendations, quality workmanship and dependable service. Whether you're upgrading a home system or planning a commercial installation, we'll help you understand your options.",
            image: img("photo-1600210492486-724fe5c67fb0"),
            experience: "10+",
            customers: "500+",
            rating: "4.9",
        },

        projects: {
            eyebrow: "RECENT PROJECTS",
            title: "Our Latest Work",
            description:
                "A selection of residential and commercial climate-control projects.",
            items: [
                {
                    title: "Home Split System",
                    location: "Mount Lawley, WA",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wPYx2THDQAFX3wiMH19DfKln8lywxuNbJfyLNsa4sWJNP06ASVHfepo&s=10",
                },
                {
                    title: "Commercial Installation",
                    location: "Joondalup, WA",
                    image: "https://www.airconditioningdoctor.com.au/wp-content/uploads/2024/03/20231110_084813-scaled.webp",
                },
                {
                    title: "Ducted Air Conditioning",
                    location: "Perth CBD, WA",
                    image: "https://www.endesa.com/content/dam/endesa-com/endesaclientes/blog/imagenes/Post-aireacondicionadoconductos.jpg",
                },
                {
                    title: "Refrigeration Project",
                    location: "Canning Vale, WA",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawKPXvTIS7BfBWj42Ahs5hnZm1l60b5Zt-9RYnx2bSHrQwNJlmVH8d8o&s=10",
                },
            ],
        },

        // Sample reviews only. Replace with genuine, permission-approved reviews.
        reviews: [
            {
                name: "Sarah T.",
                location: "Mount Lawley, WA",
                rating: 5,
                text:
                    "The team explained our options clearly and completed the installation professionally.",
            },
            {
                name: "James R.",
                location: "Subiaco, WA",
                rating: 5,
                text:
                    "Great communication from the first enquiry through to completion. The team was easy to deal with.",
            },
            {
                name: "Emily M.",
                location: "Fremantle, WA",
                rating: 5,
                text:
                    "Quick to respond and very helpful when we needed advice about our air conditioning system.",
            },
        ],

        quote: {
            eyebrow: "GET A QUOTE",
            title: "Let's Find Your Comfort Solution",
            description:
                "Tell us about your property and what you need. We'll get in touch to discuss the next steps.",
            services: [
                "Split System Installation",
                "Ducted Air Conditioning",
                "Repairs & Fault Finding",
                "Servicing & Maintenance",
                "Commercial Refrigeration",
                "Air Quality Solutions",
                "Smart Climate Controls",
                "Energy-Efficient Upgrades",
                "Other",
            ],
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOM7Y1-GO8SqWGWBcDhOinZn20wx5B5JnbMRDxsEIVsWepuMsGAnZ9HOFc&s=10",
        },

        serviceAreas: [
            "Perth CBD",
            "Southern River",
            "Canning Vale",
            "Fremantle",
            "Joondalup",
            "Rockingham",
            "Subiaco",
            "Midland",
        ],

        serviceAreaBanner: {
            eyebrow: "SERVICING PERTH & SURROUNDS",
            title: "Local Climate Specialists",
            description:
                "Based in Perth and servicing surrounding suburbs. Contact us to confirm service availability for your location.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-KM8ln4dszj9NcDturlUX7lHdnTVyWXfJi9swXziVM7jaRXxxDAqOSp4&s=10",
        },

        footer: {
            copyright: "All rights reserved.",
            privacyUrl: "/privacy",
            termsUrl: "/terms",
            socialLinks: [
                { label: "Facebook", url: "#" },
                { label: "Instagram", url: "#" },
                { label: "Google", url: "#" },
            ],
        },
    },
};
