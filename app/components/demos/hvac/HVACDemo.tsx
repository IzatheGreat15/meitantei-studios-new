
"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
  Leaf,
  Wrench,
  Snowflake,
  Wind,
  Building2,
  Star,
  CheckCircle2,
  CalendarDays,
  Flame,
  ChevronDown,
  Globe,
  Send,
} from "lucide-react";
import { HVACDemoConfig, HVACIconName } from "@/config/demos/hvac/types";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

type Props = {
  config: HVACDemoConfig;
};

const iconMap = {
  snowflake: Snowflake,
  flame: Flame,
  wrench: Wrench,
  wind: Wind,
  shield: ShieldCheck,
  clock: Clock,
  users: Users,
  check: CheckCircle2,
  building: Building2,
  leaf: Leaf,
  calendar: CalendarDays,
};

function Icon({
  name,
  size = 22,
}: {
  name: HVACIconName;
  size?: number;
}) {
  const Component = iconMap[name] ?? Wrench;
  return <Component size={size} strokeWidth={1.8} />;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p
        className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color: light ? "#67D8F2" : "#0878D1" }}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
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

function CTA({
  children,
  href = "#quote",
  color,
}: {
  children: React.ReactNode;
  href?: string;
  color: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:opacity-90"
      style={{ backgroundColor: color }}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}

function Navbar({ config }: Props) {
  const [open, setOpen] = useState(false);
  const { brand, contact } = config;

  const links = [
    ["Services", "#services"],
    ["About", "#about"],
    ["Our Work", "#projects"],
    ["Reviews", "#reviews"],
    ["Service Areas", "#areas"],
    ["Contact", "#quote"],
  ];

  return (
    <>
      <div
        className="hidden items-center justify-between px-6 py-2 text-xs text-white md:flex lg:px-10"
        style={{ backgroundColor: brand.secondaryColor }}
      >
        <span className="flex items-center gap-2">
          <MapPin size={14} />
          Servicing Perth & Surrounding Suburbs
        </span>
        <span className="flex gap-5">
          <span>✓ Quality Workmanship</span>
          <span>✓ Local & Reliable</span>
        </span>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link href="#home" className="flex items-center gap-3">
            {brand.logo ? (
              <Image
                src={brand.logo}
                alt={brand.name}
                width={52}
                height={52}
                unoptimized
              />
            ) : (
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: brand.primaryColor }}
              >
                <Snowflake size={25} />
              </span>
            )}

            <span>
              <span className="block text-lg font-extrabold leading-tight tracking-tight text-slate-950">
                {brand.shortName}
              </span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                {brand.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-bold text-slate-800"
            >
              <Phone size={16} />
              {contact.phone}
            </a>
            <CTA color={brand.primaryColor}>Get a Free Quote</CTA>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-slate-200 p-3 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-slate-100 bg-white p-4 xl:hidden">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

function Hero({ config }: Props) {
  const { brand, contact, hero } = config;

  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-20">
        <Image
          src={hero.backgroundImage}
          alt="Air conditioning service"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-sky/90 to-sky/30" />

      <div className="mx-auto grid min-h-[570px] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl">
          <p
            className="text-xs font-extrabold uppercase tracking-[0.2em]"
            style={{ color: brand.primaryColor }}
          >
            {hero.eyebrow}
          </p>

          <h1 className="mt-5 whitespace-pre-line text-5xl font-extrabold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl" style={{ color: brand.primaryColor }}>
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTA color={brand.primaryColor}>{hero.primaryCta}</CTA>
            <a
              href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-900"
            >
              <Phone size={17} />
              {contact.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-slate-700">
            {[
              { label: "Cooler Summers", icon: Snowflake },
              { label: "Warmer Winters", icon: Flame },
              { label: "Energy Conscious", icon: Leaf },
            ].map(({ label, icon: ItemIcon }) => (
              <span key={label} className="flex items-center gap-2">
                <ItemIcon
                  size={20}
                  style={{ color: brand.primaryColor }}
                />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* <div className="hidden lg:block">
          <div className="ml-auto max-w-sm rounded-3xl border border-white/60 bg-white/90 p-7 shadow-2xl backdrop-blur">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
              style={{ backgroundColor: brand.primaryColor }}
            >
              <Snowflake size={28} />
            </div>
            <h2 className="mt-6 text-2xl font-extrabold text-slate-950">
              Comfort starts with the right system.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Get advice on installation, maintenance and repair options tailored to your property.
            </p>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm font-bold text-slate-900">
                Business hours
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {contact.businessHours}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

function TrustHighlights({ config }: Props) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 lg:px-8">
        {config.trustHighlights.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{
                color: config.brand.primaryColor,
                backgroundColor: `${config.brand.primaryColor}12`,
              }}
            >
              <Icon name={item.icon} />
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-950">
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

function Services({ config }: Props) {
  const { services, brand } = config;

  return (
    <section id="services" className="bg-sky-100/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            description={services.description}
          />
          <Link
            href="#quote"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold"
            style={{ color: brand.primaryColor }}
          >
            Discuss a project <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute bottom-3 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg"
                  style={{ color: brand.primaryColor }}
                >
                  <Icon name={service.icon} size={23} />
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <Link
                  href="#quote"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold transition group-hover:gap-3"
                  style={{ color: brand.primaryColor }}
                >
                  Enquire now <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ config }: Props) {
  const { about, brand } = config;

  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-slate-100">
          <Image
            src={about.image}
            alt="Comfortable indoor space"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-slate-950/85 p-6 text-white backdrop-blur sm:inset-x-7 sm:bottom-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
              More than just air conditioning
            </p>
            <h3 className="mt-3 text-2xl font-extrabold">
              Creating comfortable spaces.
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Thoughtful recommendations and practical climate solutions for your home or business.
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
              ["Experience", about.experience],
              ["Customers", about.customers],
              ["Rating", about.rating],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 p-4"
              >
                <p
                  className="text-2xl font-extrabold sm:text-3xl"
                  style={{ color: brand.primaryColor }}
                >
                  {value}
                </p>
                <p className="mt-2 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            {config.trustHighlights.slice(0, 3).map((item) => (
              <div key={item.title} className="flex gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    color: brand.primaryColor,
                    backgroundColor: `${brand.primaryColor}12`,
                  }}
                >
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h3 className="font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CTA color={brand.primaryColor}>Request a Quote</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({ config }: Props) {
  return (
    <section id="projects" className="bg-slate-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={config.projects.eyebrow}
          title={config.projects.title}
          description={config.projects.description}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {config.projects.items.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56 bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
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

function Testimonials({ config }: Props) {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="CUSTOMER REVIEWS"
          title="What our clients say"
          description="Building trust through clear communication, quality workmanship and reliable service."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {config.reviews.map((review) => (
            <article
              key={`${review.name}-${review.location}`}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
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
                <p className="font-bold text-slate-950">{review.name}</p>
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

function ServiceAreas({ config }: Props) {
  return (
    <section id="areas" className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionHeading
            eyebrow={config.serviceAreaBanner.eyebrow}
            title={config.serviceAreaBanner.title}
            description={config.serviceAreaBanner.description}
          />

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {config.serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-sm font-medium text-slate-700"
              >
                <MapPin
                  size={15}
                  className="shrink-0"
                  style={{ color: config.brand.primaryColor }}
                />
                {area}
              </div>
            ))}
          </div>

          <div className="mt-7">
            <CTA color={config.brand.primaryColor}>
              Check Service Availability
            </CTA>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-slate-100">
          <Image
            src={config.serviceAreaBanner.image}
            alt="Local service area"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-2xl font-bold">
              Need help with your climate system?
            </h3>
            <p className="mt-2 text-sm text-slate-200">
              Contact us with your suburb and project details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteForm({ config }: Props) {
  const { brand, contact, quote } = config;
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(formData.entries()),
          businessName: brand.name,
          businessEmail: contact.email,
          demoSlug: config.slug,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your enquiry. Please try again.");
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
      setSending(false);
    }
  }

  return (
    <section
      id="quote"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ backgroundColor: brand.secondaryColor }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
            {quote.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {quote.title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">
            {quote.description}
          </p>

          <div className="mt-8 space-y-5">
            {[
              { title: "No-obligation enquiry", icon: ShieldCheck },
              { title: "Prompt communication", icon: Clock },
              { title: "Local Perth service", icon: MapPin },
            ].map(({ title, icon: ItemIcon }) => (
              <div key={title} className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                  style={{ backgroundColor: brand.primaryColor }}
                >
                  <ItemIcon size={20} />
                </span>
                <p className="font-semibold">{title}</p>
              </div>
            ))}
          </div>

          <a
            href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
            className="mt-9 inline-flex items-center gap-3 text-lg font-bold"
          >
            <Phone size={20} />
            {contact.phone}
          </a>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-9">
          {submitted ? (
            <div className="py-12 text-center">
              <CheckCircle2
                size={48}
                className="mx-auto"
                style={{ color: brand.primaryColor }}
              />
              <h3 className="mt-5 text-2xl font-bold text-slate-950">
                Thank you for your enquiry!
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Your request has been submitted.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-bold"
                style={{ color: brand.primaryColor }}
              >
                Send another request
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-extrabold text-slate-950">
                Request a Free Quote
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Tell us about your air conditioning or refrigeration needs.
              </p>

              <form onSubmit={submit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field
                    label="Phone number"
                    name="phone"
                    type="tel"
                    required
                  />
                  <Field
                    label="Email address"
                    name="email"
                    type="email"
                    required
                  />
                  <Field label="Suburb" name="suburb" required />
                </div>

                <div>
                  <label
                    htmlFor="hvac-service"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Service needed *
                  </label>
                  <div className="relative">
                    <select
                      id="hvac-service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-10 text-sm outline-none focus:border-slate-400"
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
                      size={17}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hvac-message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Project details
                  </label>
                  <textarea
                    id="hvac-message"
                    name="message"
                    rows={4}
                    maxLength={3000}
                    placeholder="e.g. New installation, repair, number of rooms..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-400"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: brand.primaryColor }}
                >
                  {sending ? "Submitting..." : "Send Quote Request"}
                  {!sending && <Send size={17} />}
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  We'll use your details to respond to your enquiry.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={`hvac-${name}`}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}{required ? " *" : ""}
      </label>
      <input
        id={`hvac-${name}`}
        name={name}
        type={type}
        required={required}
        maxLength={254}
        autoComplete={
          name === "name"
            ? "name"
            : name === "phone"
              ? "tel"
              : name === "email"
                ? "email"
                : name === "suburb"
                  ? "address-level2"
                  : undefined
        }
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
        placeholder={
          name === "name"
            ? "Your name"
            : name === "phone"
              ? "04XX XXX XXX"
              : name === "email"
                ? "you@example.com"
                : name === "suburb"
                  ? "Your suburb"
                  : undefined
        }
      />
    </div>
  );
}

function Footer({ config }: Props) {
  const { brand, contact, footer } = config;

  const socialIcon = {
    FaFacebook,
    FaInstagram,
    Google: Globe,
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="#home" className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: brand.primaryColor }}
            >
              <Snowflake size={23} />
            </span>
            <span>
              <span className="block font-extrabold">{brand.name}</span>
              <span className="mt-1 block text-[10px] uppercase tracking-widest text-slate-400">
                {brand.tagline}
              </span>
            </span>
          </Link>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Air conditioning and refrigeration services for residential and commercial properties across Perth and surrounding suburbs.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {[
              ["Home", "#home"],
              ["Services", "#services"],
              ["About Us", "#about"],
              ["Our Work", "#projects"],
              ["Reviews", "#reviews"],
              ["Contact", "#quote"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Service Areas</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {config.serviceAreas.slice(0, 7).map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Get in Touch</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-400">
            <a
              href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-start gap-3 hover:text-white"
            >
              <Phone size={17} className="shrink-0" />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-start gap-3 break-all hover:text-white"
            >
              <Mail size={17} className="shrink-0" />
              {contact.email}
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={17} className="shrink-0" />
              {contact.address}
            </div>
            <div className="flex items-start gap-3">
              <Clock size={17} className="shrink-0" />
              {contact.businessHours}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            {footer.socialLinks.map((social) => {
              const IconComponent =
                social.label === "Facebook"
                  ? socialIcon.FaFacebook
                  : social.label === "Instagram"
                    ? socialIcon.FaInstagram
                    : Globe;

              return (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © 2026 {brand.name}. {footer.copyright}
          </p>
          <div className="flex gap-5">
            <Link href={footer.privacyUrl} className="hover:text-white">
              Privacy
            </Link>
            <Link href={footer.termsUrl} className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HVACLandingPage({ config }: Props) {
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
      <Projects config={config} />
      <Testimonials config={config} />
      <ServiceAreas config={config} />
      <QuoteForm config={config} />
      <Footer config={config} />
    </main>
  );
}
