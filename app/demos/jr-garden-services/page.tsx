
"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Trees,
  Users,
  X,
} from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const BRAND = {
  name: "JR Garden Services",
  primary: "#0B3022",
  dark: "#062419",
  gold: "#E6C477",
  cream: "#F8F5EC",
  muted: "#68766A",
};

const CONTACT = {
  phone: "0426 519 119",
  phoneLink: "tel:0426519119",
  email: "jasonr04@hotmail.com",
  serviceArea: "Perth's Northern Suburbs",
  hours: "Mon – Sat: 7:00am – 5:00pm",
};

const services = [
  {
    title: "Lawn Mowing & Edging",
    description: "Neat and accurate mowing for a clean, well-kept lawn.",
    image:
      "https://images.unsplash.com/photo-1779636489740-6077a4198be6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: "leaf",
  },
  {
    title: "Hedge Trimming & Pruning",
    description: "Keep your hedges and shrubs shaped, tidy and healthy.",
    image:
      "https://plus.unsplash.com/premium_photo-1661751889999-762ee67f68fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: "trees",
  },
  {
    title: "Weeding & Weed Control",
    description: "Remove unwanted weeds and keep your garden looking its best.",
    image:
      "https://plus.unsplash.com/premium_photo-1661810432776-82ac9fc31ade?q=80&w=1105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: "leaf",
  },
  {
    title: "Mulching & Soil Improvement",
    description: "Quality mulching and soil care for healthier, brighter gardens.",
    image:
      "https://images.unsplash.com/photo-1782386963665-b83ce1d6752e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: "leaf",
  },
  {
    title: "Tree & Shrub Trimming",
    description: "Maintain the size, shape and health of your trees and shrubs.",
    image:
      "https://plus.unsplash.com/premium_photo-1661963981959-76c59c589ba4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: "trees",
  },
  {
    title: "Garden Clean-Ups",
    description: "General tidy-ups, leaf removal and green waste clearance.",
    image:
      "https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: "leaf",
  },
  {
    title: "Pressure Washing",
    description: "Refresh and clean outdoor paths, patios and driveways.",
    image:
      "https://images.unsplash.com/photo-1790925125643-9eb2a05b6ed3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: "trees",
  },
  {
    title: "Fertilising & Lawn Care",
    description: "Help your lawn and plants thrive with appropriate care.",
    image:
      "https://images.unsplash.com/photo-1710666184386-9f42d0227237?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: "leaf",
  },
  {
    title: "Gutter Cleaning",
    description: "Help keep gutters clear of leaves and garden debris.",
    image:
      "https://plus.unsplash.com/premium_photo-1759493791106-79973e4474c5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: "trees",
  },
  {
    title: "Green Waste Removal",
    description: "Clear away garden waste after maintenance and clean-ups.",
    image:
      "https://plus.unsplash.com/premium_photo-1681488503746-0e2cfffb5b36?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: "leaf",
  },
];

const projects = [
  {
    title: "Overgrown Garden Clean-Up",
    label: "Clean Up",
    image:
      "https://images.unsplash.com/photo-1668189777890-495c36095340?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "Neat Lawn & Garden",
    label: "Lawn Care",
    image:
      "https://images.unsplash.com/photo-1645723947866-4f98043ddc0b?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "Outdoor Garden Refresh",
    label: "Garden Care",
    image:
      "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

const quickLinks = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Our Work", "#work"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-9">
      <p
        className={`mb-2 text-xs font-bold uppercase tracking-[0.22em] ${
          light ? "text-[#E6C477]" : "text-[#92743A]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-[#10291E]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 max-w-2xl text-sm leading-7 ${
            light ? "text-white/70" : "text-[#68766A]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function BrandLogo({ light = true }: { light?: boolean }) {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-2.5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E6C477]/60 text-[#E6C477]">
        <Leaf size={27} strokeWidth={1.5} />
      </div>
      <div>
        <span
          className={`block font-serif text-2xl italic leading-none ${
            light ? "text-[#E6C477]" : "text-[#0B3022]"
          }`}
        >
          JR
        </span>
        <span
          className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.13em] ${
            light ? "text-white" : "text-[#0B3022]"
          }`}
        >
          Garden Services
        </span>
      </div>
    </a>
  );
}

function Button({
  children,
  href,
  variant = "gold",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "gold" | "outline" | "white";
  className?: string;
}) {
  const styles = {
    gold: "bg-[#E6C477] text-[#0B3022] hover:bg-[#F0D797]",
    outline:
      "border border-[#E6C477]/70 text-[#F8F5EC] hover:bg-white/10",
    white: "bg-white text-[#0B3022] hover:bg-[#F8F5EC]",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#062419]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <BrandLogo />

        <nav className="hidden items-center gap-7 lg:flex">
          {quickLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-white/80 transition hover:text-[#E6C477]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <Button href="#contact" className="min-h-10 px-4 py-2 text-xs">
            Request a Free Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 hover:bg-white/10 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 py-3 lg:hidden">
          {quickLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-white/85 hover:text-[#E6C477]"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-[#E6C477] px-4 py-3 text-center text-sm font-semibold text-[#0B3022]"
          >
            Request a Free Quote
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="scroll-mt-20 bg-[#062419] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-2 lg:py-20">
        <div className="relative z-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.23em] text-[#E6C477]">
            Quality Garden Services & Maintenance
          </p>
          <h1 className="max-w-xl font-serif text-4xl leading-[1.12] sm:text-5xl xl:text-6xl">
            A Beautiful Garden,
            <span className="mt-1 block text-[#E6C477]">
              Without the Hard Work.
            </span>
          </h1>
          <p className="mt-5 max-w-lg leading-7 text-white/75">
            Reliable garden maintenance and outdoor services across Perth&apos;s
            northern suburbs.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#contact">Request a Free Quote</Button>
            <Button href="#services" variant="outline">
              View Our Services
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/85">
            <span className="flex items-center gap-2">
              <Leaf size={17} className="text-[#E6C477]" />
              Quality garden care
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-[#E6C477]" />
              Reliable service
            </span>
            <span className="flex items-center gap-2">
              <Users size={17} className="text-[#E6C477]" />
              Friendly service
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl border border-[#E6C477]/20" />
          <img
            src="https://images.unsplash.com/photo-1778594006034-230d11763ebb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Beautiful landscaped garden with lush plants"
            className="relative h-[300px] w-full rounded-2xl object-cover sm:h-[430px]"
          />
          <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-[#062419]/90 px-4 py-3 backdrop-blur-sm">
            <p className="font-serif text-lg text-[#E6C477]">
              Healthy. Tidy. Beautiful.
            </p>
            <p className="mt-1 text-xs text-white/75">
              Garden care made simple
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <a
      href="#contact"
      className="group overflow-hidden rounded-xl border border-[#E6E0D3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-[#10291E]">{service.title}</h3>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4E5BB] text-[#0B3022]">
            <ArrowRight size={16} />
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-[#68766A]">
          {service.description}
        </p>
      </div>
    </a>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-[#F8F5EC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Keeping Your Garden at Its Best."
          description="From regular maintenance to one-off clean-ups, we help keep your garden healthy, tidy and beautiful all year round."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OurWork() {
  return (
    <section id="work" className="scroll-mt-20 bg-[#EEF0E5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Recent Garden Transformations."
          description="A look at outdoor spaces and garden details that inspire a beautiful result."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl bg-[#0B3022]"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062419]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-md bg-[#E6C477] px-3 py-1.5 text-xs font-bold text-[#0B3022]">
                {project.label}
              </span>
              <p className="absolute bottom-4 right-4 max-w-[65%] text-right text-sm font-semibold text-white">
                {project.title}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-[#68766A]">
          Demo gallery: These images are for demo purposes only.
        </p>
      </div>
    </section>
  );
}

function About() {
  const benefits = [
    {
      icon: <Leaf size={22} />,
      title: "Quality Workmanship",
      description: "Care and attention to detail in every garden.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Reliable Service",
      description: "Clear communication and dependable care.",
    },
    {
      icon: <Users size={22} />,
      title: "Friendly Approach",
      description: "A straightforward, customer-focused experience.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-20 bg-[#F8F5EC]">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1775297249085-3774909acf1f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Garden pathway surrounded by greenery"
          loading="lazy"
          className="h-72 w-full object-cover sm:h-96 md:h-full md:min-h-[500px]"
        />
        <div className="flex flex-col justify-center px-5 py-12 sm:px-10 lg:px-14 lg:py-16">
          <SectionHeading
            eyebrow="About JR Garden Services"
            title="Passionate About Beautiful Outdoor Spaces."
            description="We believe a well-maintained garden should be a place to relax and enjoy. Our approach focuses on thoughtful garden care, practical maintenance and attention to detail."
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <div className="mb-3 text-[#92743A]">{benefit.icon}</div>
                <h3 className="text-sm font-bold text-[#10291E]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#68766A]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  children,
  href,
}: {
  icon: ReactNode;
  children: ReactNode;
  href?: string;
}) {
  const className =
    "flex items-center gap-3 text-sm text-white/90 transition hover:text-[#E6C477]";

  return href ? (
    <a href={href} className={className}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6C477] text-[#0B3022]">
        {icon}
      </span>
      <span>{children}</span>
    </a>
  ) : (
    <div className={className}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6C477] text-[#0B3022]">
        {icon}
      </span>
      <span>{children}</span>
    </div>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    // UI demo only: connect this form to your email API before production.
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  }

  return (
    <div className="rounded-2xl bg-white p-5 text-[#10291E] shadow-xl sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <Leaf className="text-[#92743A]" size={25} />
        <div>
          <h3 className="font-serif text-2xl font-semibold">
            Request a Free Quote
          </h3>
          <p className="mt-1 text-xs text-[#68766A]">
            Tell us about your garden and we&apos;ll be in touch.
          </p>
        </div>
      </div>

      {submitted ? (
        <div
          role="status"
          className="rounded-xl border border-green-200 bg-green-50 p-6 text-center"
        >
          <CheckCircle2 className="mx-auto mb-3 text-green-700" size={38} />
          <h4 className="font-semibold">Thanks for your enquiry!</h4>
          <p className="mt-2 text-sm text-[#68766A]">
            This is a demo confirmation. This is for emo purposes only.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 text-sm font-semibold text-[#0B3022] underline"
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs font-semibold">
              Full Name <span className="text-red-600">*</span>
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-[#E4E3DC] bg-[#FCFBF8] px-3 py-3 text-sm font-normal outline-none focus:border-[#92743A]"
              />
            </label>
            <label className="block text-xs font-semibold">
              Phone Number <span className="text-red-600">*</span>
              <input
                name="phone"
                required
                type="tel"
                autoComplete="tel"
                placeholder="Your phone number"
                className="mt-2 w-full rounded-lg border border-[#E4E3DC] bg-[#FCFBF8] px-3 py-3 text-sm font-normal outline-none focus:border-[#92743A]"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs font-semibold">
              Email Address <span className="text-red-600">*</span>
              <input
                name="email"
                required
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-[#E4E3DC] bg-[#FCFBF8] px-3 py-3 text-sm font-normal outline-none focus:border-[#92743A]"
              />
            </label>
            <label className="block text-xs font-semibold">
              Service Required <span className="text-red-600">*</span>
              <select
                name="service"
                required
                defaultValue=""
                className="mt-2 w-full rounded-lg border border-[#E4E3DC] bg-[#FCFBF8] px-3 py-3 text-sm font-normal outline-none focus:border-[#92743A]"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Other">Other / Multiple Services</option>
              </select>
            </label>
          </div>

          <label className="block text-xs font-semibold">
            Property Address
            <input
              name="address"
              autoComplete="street-address"
              placeholder="Suburb or full address"
              className="mt-2 w-full rounded-lg border border-[#E4E3DC] bg-[#FCFBF8] px-3 py-3 text-sm font-normal outline-none focus:border-[#92743A]"
            />
          </label>

          <label className="block text-xs font-semibold">
            Project Details
            <textarea
              name="details"
              rows={4}
              placeholder="Tell us about your garden and what you need..."
              className="mt-2 w-full resize-y rounded-lg border border-[#E4E3DC] bg-[#FCFBF8] px-3 py-3 text-sm font-normal outline-none focus:border-[#92743A]"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#E6C477] px-5 py-3 text-sm font-bold text-[#0B3022] transition hover:bg-[#F0D797] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Send Enquiry"}
            {!loading && <ArrowRight size={17} />}
          </button>

          <p className="text-center text-xs text-[#68766A]">
            Your details will only be used to respond to your enquiry.
          </p>
        </form>
      )}
    </div>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#062419] py-16 text-white sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#E6C477]">
            Get a Free Quote
          </p>
          <h2 className="max-w-lg font-serif text-4xl leading-tight sm:text-5xl">
            Have a Garden Project in Mind?
          </h2>
          <p className="mt-5 max-w-md leading-7 text-white/75">
            Tell us about your garden and what you have in mind. We&apos;ll get
            back to you to discuss how we can help.
          </p>

          <div className="mt-8 space-y-4">
            <ContactItem icon={<Phone size={18} />} href={CONTACT.phoneLink}>
              {CONTACT.phone}
            </ContactItem>
            <ContactItem
              icon={<Mail size={18} />}
              href={`mailto:${CONTACT.email}`}
            >
              {CONTACT.email}
            </ContactItem>
            <ContactItem icon={<MapPin size={18} />}>
              {CONTACT.serviceArea}
            </ContactItem>
            <ContactItem icon={<Clock size={18} />}>
              {CONTACT.hours}
            </ContactItem>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}

function ServiceArea() {
  const customerTypes = [
    "Residential properties",
    "Rental properties",
    "Strata and commercial",
    "One-off and regular maintenance",
  ];

  return (
    <section className="bg-[#F8F5EC] py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#92743A]">
            Service Area
          </p>
          <h2 className="font-serif text-3xl text-[#10291E]">
            Covering Perth&apos;s Northern Suburbs
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#68766A]">
            Garden maintenance and outdoor services for homes and businesses
            across the service area.
          </p>
        </div>

        <div className="hidden h-24 w-px bg-[#DDD7C8] md:block" />

        <ul className="space-y-3">
          {customerTypes.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-[#10291E]"
            >
              <CheckCircle2
                size={17}
                className="shrink-0 text-[#92743A]"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  const footerServices = services.map((service) => service.title);

  return (
    <footer className="bg-[#041D14] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_1.2fr_1fr]">
        <div>
          <BrandLogo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
            Quality garden maintenance and outdoor services across Perth&apos;s
            northern suburbs. Keeping your garden healthy, tidy and beautiful.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6C477]/50 text-[#E6C477] transition hover:bg-[#E6C477] hover:text-[#0B3022]"
            >
              <FaFacebook size={17} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6C477]/50 text-[#E6C477] transition hover:bg-[#E6C477] hover:text-[#0B3022]"
            >
              <FaInstagram size={17} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-semibold text-[#E6C477]">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-white/70 transition hover:text-[#E6C477]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-semibold text-[#E6C477]">Our Services</h3>
          <ul className="space-y-2.5">
            {footerServices.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="text-sm text-white/70 transition hover:text-[#E6C477]"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-semibold text-[#E6C477]">Contact</h3>
          <ul className="space-y-4">
            <li>
              <a
                href={CONTACT.phoneLink}
                className="flex items-start gap-3 text-sm text-white/75 hover:text-[#E6C477]"
              >
                <Phone size={17} className="mt-0.5 shrink-0 text-[#E6C477]" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-start gap-3 break-all text-sm text-white/75 hover:text-[#E6C477]"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-[#E6C477]" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/75">
              <MapPin size={17} className="mt-0.5 shrink-0 text-[#E6C477]" />
              {CONTACT.serviceArea}
            </li>
            <li className="flex items-start gap-3 text-sm text-white/75">
              <Clock size={17} className="mt-0.5 shrink-0 text-[#E6C477]" />
              {CONTACT.hours}
            </li>
          </ul>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#E6C477] hover:text-white"
          >
            Request a quote <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/50 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© 2026 JR Garden Services. All rights reserved.</p>
          <a href="#home" className="hover:text-[#E6C477]">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F5EC] font-sans text-[#10291E]">
      <Header />
      <Hero />
      <Services />
      <OurWork />
      <About />
      <Contact />
      <ServiceArea />
      <Footer />
    </main>
  );
}
