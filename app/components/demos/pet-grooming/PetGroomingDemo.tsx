
import { PetGroomingConfig } from "@/config/demos/pet-grooming/types";
import Link from "next/link";

type Props = {
  config: PetGroomingConfig;
};

type MessengerButtonProps = {
  url: string;
};

function MessengerButton({
  url,
}: MessengerButtonProps) {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on Facebook Messenger"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3
        rounded-full bg-[#0084FF] px-5 py-3.5 font-semibold
        text-white shadow-lg transition hover:scale-105
        hover:bg-[#006FE6] focus-visible:outline-2
        focus-visible:outline-offset-2 focus-visible:outline-[#0084FF]"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.17 2 11.32c0 2.93 1.44 5.55 3.7 7.25V22l3.4-1.87c.92.25 1.9.39 2.9.39 5.52 0 10-4.17 10-9.2C22 6.17 17.52 2 12 2Zm1 12.4-2.55-2.72-4.98 2.72 5.48-5.82 2.62 2.72 4.91-2.72L13 14.4Z" />
      </svg>

      <span>Chat with us</span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[var(--pet-accent)]">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto mb-10 max-w-2xl text-center" : "mb-8"}>
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[var(--pet-primary)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-7 text-[var(--pet-muted)] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
        secondary
          ? "border border-[var(--pet-border)] bg-transparent text-[var(--pet-primary)] hover:bg-[var(--pet-primary)]/5"
          : "bg-[var(--pet-accent)] text-[var(--pet-text)] hover:bg-[var(--pet-accent)]"
      }`}
    >
      {children} <span className="ml-2" aria-hidden="true">→</span>
    </Link>
  );
}

function Header({ config }: Props) {
  const links = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Price List", "#prices"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--pet-border)] bg-[var(--pet-background)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="#home" className="shrink-0">
          <span className="block font-serif text-xl font-bold text-[var(--pet-primary)]">
            🐾 {config.brand.logoText ?? config.brand.name}
          </span>
          <span className="block pl-8 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--pet-muted)]">
            {config.brand.descriptor}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-[var(--pet-text)] transition hover:text-[var(--pet-accent)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${config.contact.phone.replace(/[^\d+]/g, "")}`}
          className="hidden rounded-full border border-[var(--pet-accent)] px-4 py-2 text-sm font-semibold text-[var(--pet-primary)] lg:block"
        >
          ☎ {config.contact.phone}
        </a>

        <Link
          href="#contact"
          className="rounded-xl bg-[var(--pet-accent)] px-4 py-3 text-xs font-bold text-[var(--pet-text)] sm:text-sm"
        >
          Book Now →
        </Link>
      </div>
    </header>
  );
}

function Hero({ config }: Props) {
  return (
    <section
      id="home"
      className="scroll-mt-24 overflow-hidden bg-[var(--pet-background)]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10">
          <SectionLabel>{config.hero.eyebrow}</SectionLabel>
          <h1 className="max-w-xl font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[var(--pet-primary)] sm:text-5xl lg:text-6xl">
            {config.hero.title}{" "}
            <span className="text-[var(--pet-accent)]">
              {config.hero.accentTitle}
            </span>
          </h1>
          <p className="mt-6 max-w-lg leading-7 text-[var(--pet-muted)]">
            {config.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#contact">Book an Appointment</ButtonLink>
            <ButtonLink href="#services" secondary>
              View Our Services
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-[var(--pet-text)]">
            <span>🐾 Experienced Groomers</span>
            <span>♡ Gentle Care</span>
            <span>✦ All Breeds Welcome</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#E9D6A8]/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={config.hero.image}
              alt="A freshly groomed, happy dog"
              className="h-[340px] w-full object-cover sm:h-[450px]"
            />
          </div>
          <div className="absolute -bottom-4 -left-3 rounded-2xl bg-white px-5 py-4 shadow-lg sm:left-5">
            <p className="font-serif text-lg font-bold text-[var(--pet-primary)]">
              Happy pets, always.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Gentle care from nose to tail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceRows({
  prices,
}: {
  prices: { label: string; price: string }[];
}) {
  return (
    <div className="divide-y divide-[var(--pet-border)]">
      {prices.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between gap-3 py-3 text-sm"
        >
          <span className="text-[var(--pet-muted)]">{item.label}</span>
          <span className="shrink-0 font-bold text-[var(--pet-primary)]">
            {item.price}
          </span>
        </div>
      ))}
    </div>
  );
}

function PriceList({ config }: Props) {
  const { services } = config;

  return (
    <section
      id="prices"
      className="scroll-mt-24 bg-[var(--pet-surface)] px-5 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Services"
          title={services.title}
          description={services.description}
          centered
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service, index) => (
            <article
              key={service.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-[var(--pet-border)] bg-[var(--pet-background)] shadow-sm"
            >
              <div
                className="p-5 bg-[var(--pet-primary)]"
              >
                <h3 className="font-serif text-xl font-bold text-white">
                  {service.name}
                </h3>
                <p className="mt-1 text-xs text-[var(--pet-accent)]">
                  {service.subtitle}
                </p>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="mb-4 text-sm leading-6 text-[var(--pet-muted)]">
                  {service.description}
                </p>

                <PriceRows prices={service.prices} />

                {service.includes.length > 0 && (
                  <div className="mt-5 border-t border-[var(--pet-border)] pt-4">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--pet-primary)]">
                      Includes
                    </p>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-xs leading-5 text-[var(--pet-muted)]"
                        >
                          <span className="font-bold text-[var(--pet-accent)]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}

          <article className="overflow-hidden rounded-2xl border border-[var(--pet-border)] bg-[var(--pet-background)] shadow-sm">
            <div className="bg-[var(--pet-primary)] px-5 py-4">
              <h3 className="font-serif text-xl font-bold text-white">
                Add-On Services
              </h3>
              <p className="mt-1 text-xs text-[var(--pet-accent)]">
                Additional care for your pet
              </p>
            </div>
            <div className="grid gap-x-8 px-5 py-3 grid-cols-1">
              {services.addons.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center justify-between gap-3 border-b border-[var(--pet-border)] py-3 text-sm"
                >
                  <span className="text-[var(--pet-muted)]">{addon.name}</span>
                  <span className="font-bold text-[var(--pet-primary)]">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[var(--pet-surface)] p-5 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-serif text-lg font-bold text-[var(--pet-primary)]">
              Not sure what your pet needs?
            </h3>
            <p className="mt-1 text-sm text-[var(--pet-muted)]">
              Contact us for a personalised quote.
            </p>
          </div>
          <ButtonLink href="#contact">Contact Us</ButtonLink>
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-[var(--pet-muted)]">
          Prices are starting rates and may vary by breed, size, coat
          condition and behaviour. Please confirm the final price before
          booking.
        </p>
      </div>
    </section>
  );
}

function Services({ config }: Props) {
  return (
    <section id="services" className="scroll-mt-24 bg-[var(--pet-background)] px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Personalised Pet Care"
          title="A Little Something for Every Pup"
          description="From a quick refresh to a full grooming session, find the right care for your furry friend."
          centered
        />
        <div className="grid gap-5 md:grid-cols-3">
          {config.services.items.slice(0, 3).map((service) => (
            <article
              key={service.name}
              className="rounded-2xl border border-[var(--pet-border)] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden="true">🐾</span>
              <h3 className="mt-4 font-serif text-xl font-bold text-[var(--pet-primary)]">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--pet-muted)]">
                {service.description}
              </p>
              <Link
                href="#prices"
                className="mt-5 inline-block text-sm font-bold text-[var(--pet-accent)] hover:underline"
              >
                View pricing →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ config }: Props) {
  return (
    <section className="bg-[var(--pet-background)] px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Work"
          title={config.gallery.title}
          description={config.gallery.description}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.gallery.images.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-2xl bg-[var(--pet-surface)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ config }: Props) {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[var(--pet-surface)] px-5 py-16 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={config.about.image}
            alt="A dog receiving gentle grooming care"
            loading="lazy"
            className="h-80 w-full object-cover sm:h-[420px]"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow={config.about.eyebrow}
            title={config.about.title}
            description={config.about.description}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {config.about.benefits.map((benefit) => (
              <div key={benefit.title}>
                <span className="text-2xl" aria-hidden="true">
                  {benefit.icon}
                </span>
                <h3 className="mt-2 font-bold text-[var(--pet-primary)]">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[var(--pet-muted)]">
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

function BookingForm({ config }: Props) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[var(--pet-primary)] px-5 py-16 text-white sm:py-20 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2">
        <div>
          <SectionLabel>Book an Appointment</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Get in Touch
            <br />
            or Book a Groom.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
            {config.booking.description}
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <p>☎ {config.contact.phone}</p>
            <p>✉ {config.contact.email}</p>
            <p>⌖ {config.contact.address}</p>
            <p>◷ {config.contact.hours}</p>
          </div>
        </div>

        <form
          className="rounded-2xl bg-[var(--pet-background)] p-5 text-[var(--pet-text)] shadow-xl sm:p-8"
        >
          <h3 className="font-serif text-2xl font-bold">
            Request an Appointment
          </h3>
          <p className="mt-2 text-sm text-[var(--pet-muted)]">
            Send us your details and preferred appointment.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Pet&apos;s Name *
              <input
                name="petName"
                required
                placeholder="e.g. Bella"
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-3 font-normal outline-none focus:border-[var(--pet-accent)]"
              />
            </label>

            <label className="text-sm font-semibold">
              Breed / Size *
              <select
                name="breedSize"
                required
                defaultValue=""
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-3 font-normal outline-none focus:border-[var(--pet-accent)]"
              >
                <option value="" disabled>Select size</option>
                {config.booking.breeds.map((breed) => (
                  <option key={breed} value={breed}>{breed}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-semibold">
              Service Required *
              <select
                name="service"
                required
                defaultValue=""
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-3 font-normal outline-none focus:border-[var(--pet-accent)]"
              >
                <option value="" disabled>Select a service</option>
                {config.services.items.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm font-semibold">
              Preferred Date *
              <input
                type="date"
                name="preferredDate"
                required
                min="2026-10-20"
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-3 font-normal outline-none focus:border-[var(--pet-accent)]"
              />
            </label>

            <label className="text-sm font-semibold">
              Your Name *
              <input
                name="customerName"
                required
                autoComplete="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-3 font-normal outline-none focus:border-[var(--pet-accent)]"
              />
            </label>

            <label className="text-sm font-semibold">
              Phone Number *
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="Your phone number"
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-3 font-normal outline-none focus:border-[var(--pet-accent)]"
              />
            </label>

            <label className="text-sm font-semibold sm:col-span-2">
              Email Address *
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-3 font-normal outline-none focus:border-[var(--pet-accent)]"
              />
            </label>

            <label className="text-sm font-semibold sm:col-span-2">
              Additional Notes
              <textarea
                name="notes"
                rows={3}
                placeholder="Tell us about your pet..."
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-3 font-normal outline-none focus:border-[var(--pet-accent)]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-[var(--pet-accent)] px-5 py-4 text-sm font-bold text-[var(--pet-text)] transition hover:bg-[var(--pet-accent)]"
          >
            Send Enquiry →
          </button>
          <p className="mt-3 text-center text-xs text-[var(--pet-muted)]">
            This is not a real booking form. This is for demo purposes only.
          </p>
        </form>
      </div>
    </section>
  );
}

function FAQ({ config }: Props) {
  return (
    <section className="bg-[var(--pet-background)] px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
        />
        <div className="grid gap-3 md:grid-cols-2">
          {config.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-[var(--pet-border)] bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[var(--pet-text)]">
                {faq.question}
                <span className="text-xl text-[var(--pet-accent)] group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-[var(--pet-muted)]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ config }: Props) {
  return (
    <footer className="bg-[var(--pet-secondary)] px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl font-bold">
            🐾 {config.brand.name}
          </p>
          <p className="mt-4 text-sm leading-6 text-white/65">
            Professional pet grooming with gentle care and attention to detail.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[var(--pet-accent)]">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
            <Link href="#home">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#prices">Price List</Link>
            <Link href="#about">About Us</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[var(--pet-accent)]">Our Services</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
            {config.services.items.map((service) => (
              <Link key={service.name} href="#prices">
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[var(--pet-accent)]">Contact</h3>
          <div className="mt-4 space-y-3 break-words text-sm text-white/75">
            <p>{config.contact.phone}</p>
            <p>{config.contact.email}</p>
            <p>{config.contact.address}</p>
            <p>{config.contact.hours}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row">
        <p>© 2026 {config.brand.name}. All rights reserved.</p>
        <p>Designed by Meitantei Studios</p>
      </div>
    </footer>
  );
}

export default function PetGroomingDemo({ config }: Props) {
  const colors = config.brandColors;

  return (
    <div
      style={
        {
          "--pet-background": colors.background,
          "--pet-surface": colors.surface,
          "--pet-primary": colors.primary,
          "--pet-secondary": colors.secondary,
          "--pet-accent": colors.accent,
          "--pet-text": colors.text,
          "--pet-muted": colors.mutedText,
          "--pet-border": colors.border,
        } as React.CSSProperties
      }
      className="min-h-screen bg-[var(--pet-background)] text-[var(--pet-text)]"
    >
      <Header config={config} />

      <main>
        <Hero config={config} />
        <Services config={config} />
        <PriceList config={config} />
        <Gallery config={config} />
        <About config={config} />
        <BookingForm config={config} />
        <FAQ config={config} />
      </main>

      <Footer config={config} />

      { config.contact.messengerUrl && <MessengerButton url={config.contact.messengerUrl} /> }
    </div>
  );
}
