
"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
  Leaf,
  CalendarDays,
  Wrench,
  CheckCircle2,
  Star,
  Droplets,
  Flame,
  Building2,
  Globe,
  Send,
  ChevronDown,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

// --------------------------------------------------
// TYPES
// --------------------------------------------------

type IconName =
  | "users"
  | "shield"
  | "leaf"
  | "clock"
  | "calendar"
  | "tool"
  | "check"
  | "facebook"
  | "instagram"
  | "google";

type ServiceItem = {
  title: string;
  name?: string;
  description: string;
  image?: string;
  icon?: IconName | string;
};

type PlumbingPageProps = {
  config: PlumbingDemoConfig;
};

// --------------------------------------------------
// HELPERS
// --------------------------------------------------

const trustIcons = {
  users: Users,
  shield: ShieldCheck,
  leaf: Leaf,
  clock: Clock,
  calendar: CalendarDays,
  tool: Wrench,
  check: CheckCircle2,
};

const socialIcons = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  google: Globe,
};

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-emerald-300" : "text-emerald-700"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.7rem] ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function PrimaryButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${className}`}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}

function TrustIcon({ name }: { name?: string }) {
  const Icon =
    trustIcons[name as keyof typeof trustIcons] ?? BadgeCheck;

  return <Icon size={22} strokeWidth={1.8} />;
}

// --------------------------------------------------
// NAVBAR
// --------------------------------------------------

function Navbar({ config }: PlumbingPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { brand, contact } = config;

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Our Work", href: "#projects" },
    { label: "Reviews", href: "#reviews" },
    { label: "Service Areas", href: "#areas" },
    { label: "Contact", href: "#quote" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link
          href="#home"
          className="flex min-w-0 items-center gap-3"
          aria-label={`${brand.name} home`}
        >
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: brand.secondaryColor }}
          >
            <Wrench size={23} />
          </div>

          <div className="min-w-0">
            <p className="truncate text-base font-extrabold tracking-tight text-slate-950">
              {brand.shortName || brand.name}
            </p>
            <p className="truncate text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              {brand.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            <Phone size={16} />
            {contact.phone}
          </a>

          <PrimaryButton
            href="#quote"
            className="text-slate-800 shadow-sm"
            // The brand colour comes from the demo config.
          >
            Get a Free Quote
          </PrimaryButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-900 md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold"
              style={{ color: brand.primaryColor }}
            >
              <Phone size={17} />
              Call {contact.phone}
            </a>

            <Link
              href="#quote"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full px-5 py-3 text-center text-sm font-bold text-white"
              style={{ backgroundColor: brand.primaryColor }}
            >
              Request a Free Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

// --------------------------------------------------
// HERO
// --------------------------------------------------

function Hero({ config }: PlumbingPageProps) {
  const { brand, contact, hero, trustHighlights } = config;

  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-20">
        {hero.backgroundImage && (
          <Image
            src={hero.backgroundImage}
            alt="Professional plumbing work"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/30" />
      <div className="absolute inset-0 -z-10 bg-slate-950/20" />

      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: brand.accentColor }}
            />
            {hero.eyebrow}
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton
              href="#quote"
              className="text-white shadow-xl"
            >
              {hero.primaryCta}
            </PrimaryButton>

            <a
              href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <Phone size={17} />
              {contact.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
            {trustHighlights.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-2.5 text-sm text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-emerald-300">
                  <TrustIcon name={item.icon} />
                </span>
                <span className="max-w-32 font-medium leading-5">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="ml-auto max-w-sm rounded-3xl border border-white/20 bg-white/10 p-7 text-white shadow-2xl backdrop-blur-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950">
              <ShieldCheck size={29} />
            </div>

            <p className="mt-6 text-2xl font-bold">
              Plumbing done properly.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-200">
              From everyday repairs to larger installations, get clear communication and professional service from start to finish.
            </p>

            <div className="my-6 h-px bg-white/20" />

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 shrink-0 text-emerald-300" size={20} />
              <div>
                <p className="font-semibold">Business hours</p>
                <p className="mt-1 text-sm text-slate-300">
                  {contact.businessHours}
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-emerald-300" size={20} />
              <div>
                <p className="font-semibold">Local service</p>
                <p className="mt-1 text-sm text-slate-300">
                  {contact.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1" style={{ backgroundColor: brand.primaryColor }} />
    </section>
  );
}

// --------------------------------------------------
// TRUST HIGHLIGHTS
// --------------------------------------------------

function TrustHighlights({ config }: PlumbingPageProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 lg:px-8">
        {config.trustHighlights.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{
                backgroundColor: `${config.brand.primaryColor}12`,
                color: config.brand.primaryColor,
              }}
            >
              <TrustIcon name={item.icon} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --------------------------------------------------
// SERVICES
// --------------------------------------------------

function Services({ config }: PlumbingPageProps) {
  const { services, brand } = config;

  const serviceIcons = [
    Wrench,
    Droplets,
    Flame,
    Building2,
    ShieldCheck,
    Sparkles,
    Droplets,
    Wrench,
  ];

  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            description="Practical plumbing solutions for homes, rental properties and commercial premises throughout Perth."
          />

          <Link
            href="#quote"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold"
            style={{ color: brand.primaryColor }}
          >
            Discuss your project <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="flex h-full items-center justify-center"
                      style={{
                        backgroundColor: `${brand.primaryColor}12`,
                        color: brand.primaryColor,
                      }}
                    >
                      <Icon size={48} strokeWidth={1.4} />
                    </div>
                  )}

                  <div
                    className="absolute bottom-3 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg"
                    style={{ color: brand.primaryColor }}
                  >
                    <Icon size={23} />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href="#quote"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold transition group-hover:gap-3"
                    style={{ color: brand.primaryColor }}
                  >
                    Enquire now <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// ABOUT
// --------------------------------------------------

function About({ config }: PlumbingPageProps) {
  const { about, brand, trustHighlights } = config;

  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-slate-100 sm:min-h-[520px]">
          {about.image && (
            <Image
              src={about.image}
              alt="Plumbing work completed by the team"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-slate-950/85 p-6 text-white backdrop-blur sm:inset-x-7 sm:bottom-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              Local expertise
            </p>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Quality plumbing. Lasting solutions.
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Thoughtful service, dependable workmanship and clear communication on every job.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
          />

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { value: about.experience, label: "Years of experience" },
              { value: about.customers, label: "Customers served" },
              { value: about.rating, label: "Customer rating" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 p-4"
              >
                <p
                  className="text-2xl font-extrabold tracking-tight sm:text-3xl"
                  style={{ color: brand.primaryColor }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            {trustHighlights.slice(0, 3).map((item) => (
              <div key={item.title} className="flex gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: `${brand.primaryColor}12`,
                    color: brand.primaryColor,
                  }}
                >
                  <TrustIcon name={item.icon} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <PrimaryButton
            href="#quote"
            className="mt-9 text-white"
          >
            Talk to Our Team
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// PROCESS
// --------------------------------------------------

function Process({ config }: PlumbingPageProps) {
  const icons = [Phone, CalendarDays, Wrench, CheckCircle2];

  return (
    <section className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="A straightforward process"
          description="From your first enquiry to the completed job, we make getting plumbing help simple."
          light
          centered
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {config.process.map((step, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div key={step.title} className="relative">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white"
                    style={{
                      backgroundColor: config.brand.primaryColor,
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="text-sm font-bold text-slate-500">
                    STEP 0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// PROJECTS
// --------------------------------------------------

function Projects({ config }: PlumbingPageProps) {
  return (
    <section id="projects" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={config.projects.eyebrow}
            title={config.projects.title}
            description="A selection of plumbing projects and improvements across the local community."
          />

          <PrimaryButton
            href="#quote"
            className="border border-slate-200 bg-white text-slate-900 hover:bg-slate-100"
          >
            Start Your Project
          </PrimaryButton>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {config.projects.items.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <MapPin size={14} />
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// TESTIMONIALS
// --------------------------------------------------

function Testimonials({ config }: PlumbingPageProps) {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="CUSTOMER REVIEWS"
            title="Trusted by local customers"
            description="We believe good service starts with listening, clear communication and doing the job properly."
          />

          <div className="rounded-2xl border border-slate-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-extrabold text-slate-950">
                {config.about.rating}
              </span>
              <div>
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Customer satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {config.reviews.map((review) => (
            <article
              key={`${review.name}-${review.location}`}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({
                  length: Math.max(0, Math.min(5, review.rating)),
                }).map((_, index) => (
                  <Star key={index} size={17} fill="currentColor" />
                ))}
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-7 text-slate-700">
                “{review.text}”
              </blockquote>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="font-bold text-slate-950">
                  {review.name}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {review.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// QUOTE FORM
// --------------------------------------------------

function QuoteForm({ config }: PlumbingPageProps) {
  const { quote, brand, contact } = config;
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    try {
      // Connect this endpoint to your API route, CRM, or email service.
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          businessName: brand.name,
          businessEmail: contact.email,
          demoSlug: config.slug,
        }),
      });

      if (!response.ok) {
        throw new Error("We couldn't send your request. Please try again.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="quote"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ backgroundColor: brand.secondaryColor }}
    >
      <div className="absolute inset-0 opacity-10">
        {config.serviceAreaBanner.image && (
          <Image
            src={config.serviceAreaBanner.image}
            alt=""
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div className="text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
            {quote.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {quote.title}
          </h2>

          <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">
            {quote.description}
          </p>

          <div className="mt-9 space-y-5">
            {[
              {
                icon: ShieldCheck,
                title: "No-obligation enquiry",
                description: "Tell us what you need before deciding.",
              },
              {
                icon: Clock,
                title: "A clear response",
                description: "We'll contact you about your request.",
              },
              {
                icon: MapPin,
                title: "Local service",
                description: contact.address,
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                  style={{
                    backgroundColor: brand.primaryColor,
                  }}
                >
                  <item.icon size={21} />
                </div>
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
            className="mt-9 inline-flex items-center gap-3 text-lg font-bold text-white hover:text-emerald-300"
          >
            <Phone size={20} />
            {contact.phone}
          </a>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-9">
          {submitted ? (
            <div className="py-12 text-center">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  backgroundColor: `${brand.primaryColor}15`,
                  color: brand.primaryColor,
                }}
              >
                <CheckCircle2 size={34} />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-slate-950">
                Request received
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Thank you for getting in touch. Your enquiry has been submitted.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-bold"
                style={{ color: brand.primaryColor }}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-950">
                Tell us about your job
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Complete the form and we'll be in touch.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full name *
                    </label>
                    <input
                      id="quote-name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={120}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-2 focus:bg-white"
                      style={{ "--focus-color": brand.primaryColor } as React.CSSProperties}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone number *
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      maxLength={40}
                      placeholder="04XX XXX XXX"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="quote-email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email address *
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-suburb"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Suburb *
                    </label>
                    <input
                      id="quote-suburb"
                      name="suburb"
                      autoComplete="address-level2"
                      required
                      maxLength={120}
                      placeholder="e.g. Canning Vale"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="quote-service"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    What service do you need? *
                  </label>
                  <div className="relative">
                    <select
                      id="quote-service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-10 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {quote.services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="quote-message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Tell us more
                  </label>
                  <textarea
                    id="quote-message"
                    name="message"
                    rows={4}
                    maxLength={3000}
                    placeholder="Describe the issue or work you need done..."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm font-medium text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ backgroundColor: brand.primaryColor }}
                >
                  {submitting ? "Submitting..." : "Request My Free Quote"}
                  {!submitting && <Send size={17} />}
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  By submitting this form, you agree to be contacted about your enquiry.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// SERVICE AREAS
// --------------------------------------------------

function ServiceAreas({ config }: PlumbingPageProps) {
  const { serviceAreaBanner, serviceAreas, brand } = config;

  return (
    <section id="areas" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionHeading
            eyebrow={serviceAreaBanner.eyebrow}
            title={serviceAreaBanner.title}
            description={serviceAreaBanner.description}
          />

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-sm font-medium text-slate-700"
              >
                <MapPin
                  size={15}
                  className="shrink-0"
                  style={{ color: brand.primaryColor }}
                />
                {area}
              </div>
            ))}
          </div>

          <Link
            href="#quote"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold"
            style={{ color: brand.primaryColor }}
          >
            Check if we service your suburb <ArrowRight size={17} />
          </Link>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-slate-100 sm:min-h-[400px]">
          {serviceAreaBanner.image && (
            <Image
              src={serviceAreaBanner.image}
              alt="Perth and surrounding service areas"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-white/95 p-5 backdrop-blur sm:inset-x-7 sm:bottom-7 sm:p-6">
            <p className="font-bold text-slate-950">
              Need a plumber in your area?
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Get in touch with your suburb and a brief description of the job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// FOOTER
// --------------------------------------------------

function Footer({ config }: PlumbingPageProps) {
  const { brand, contact, footer, services, serviceAreas } = config;

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="#home" className="inline-flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: brand.primaryColor }}
            >
              <Wrench size={22} />
            </div>
            <div>
              <p className="font-extrabold">{brand.name}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                {brand.tagline}
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Your local plumbing team for repairs, installations and plumbing projects across Perth and surrounding suburbs.
          </p>

          <div className="mt-6 flex gap-3">
            {footer.socialLinks?.map((social) => {
              const Icon =
                socialIcons[social.icon as keyof typeof socialIcons] ?? Globe;

              return (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {[
              ["Home", "#home"],
              ["About Us", "#about"],
              ["Our Work", "#projects"],
              ["Customer Reviews", "#reviews"],
              ["Service Areas", "#areas"],
              ["Get a Quote", "#quote"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Our Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {services.items.slice(0, 7).map((service) => (
              <li key={service.title}>
                <Link
                  href="#services"
                  className="transition hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Get in Touch</h3>

          <div className="mt-5 space-y-4 text-sm text-slate-400">
            <a
              href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-start gap-3 transition hover:text-white"
            >
              <Phone size={17} className="shrink-0" />
              {contact.phone}
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="flex items-start gap-3 break-all transition hover:text-white"
            >
              <Mail size={17} className="shrink-0" />
              {contact.email}
            </a>

            <div className="flex items-start gap-3">
              <MapPin size={17} className="shrink-0" />
              <span>{contact.address}</span>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={17} className="shrink-0" />
              <span>{contact.businessHours}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {brand.name}. {footer.copyright}
          </p>

          <div className="flex gap-5">
            <Link href={footer.privacyUrl ?? ''} className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href={footer.termsUrl ?? ''} className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --------------------------------------------------
// MAIN PAGE
// --------------------------------------------------

export default function PlumbingLandingPage({
  config,
}: PlumbingPageProps) {
  return (
    <main
      style={
        {
          "--brand-primary": config.brand.primaryColor,
          "--brand-secondary": config.brand.secondaryColor,
          "--brand-accent": config.brand.accentColor,
        } as React.CSSProperties
      }
      className="min-h-screen bg-white text-slate-900"
    >
      <Navbar config={config} />
      <Hero config={config} />
      <TrustHighlights config={config} />
      <Services config={config} />
      <About config={config} />
      <Process config={config} />
      <Projects config={config} />
      <Testimonials config={config} />
      <ServiceAreas config={config} />
      <QuoteForm config={config} />
      <Footer config={config} />
    </main>
  );
}
