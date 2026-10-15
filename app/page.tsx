
"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Droplets,
  Leaf,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Paintbrush,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const projects = [
  {
    name: "Riverside Plumbing",
    category: "Plumbing · Perth",
    description: "A professional website built to turn visitors into quote requests.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85",
    icon: Droplets,
    color: "bg-blue-600",
    preview: "plumbing",
  },
  {
    name: "GreenPath Landscapes",
    category: "Landscaping · Sydney",
    description: "A visual-first website for showcasing outdoor transformations.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    icon: Leaf,
    color: "bg-emerald-700",
    preview: "landscaping",
  },
  {
    name: "Perth Pest Control",
    category: "Pest Control · Perth",
    description: "A clean, mobile-friendly site with clear service information.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
    icon: ShieldCheck,
    color: "bg-slate-800",
    preview: "pest-control",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell me your needs",
    description: "We discuss your business, goals, and what you need.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Design & build",
    description: "I create a modern website tailored to your business.",
    icon: Paintbrush,
  },
  {
    number: "03",
    title: "Review & refine",
    description: "You review the website and request agreed adjustments.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch your site",
    description: "Your website goes live, ready for customers.",
    icon: Rocket,
  },
];

const plans = [
  {
    name: "Starter",
    description: "For small businesses getting online.",
    price: "A$799",
    note: "one-time setup",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact or quote form",
      "Basic SEO setup",
      "Deployment assistance",
    ],
  },
  {
    name: "Business",
    description: "For businesses ready to grow.",
    price: "A$1,299",
    note: "one-time setup",
    features: [
      "Up to 8 pages",
      "Custom design",
      "Quote form & service areas",
      "Enhanced SEO setup",
      "Analytics integration",
      "30 days of post-launch support",
    ],
    popular: true,
  },
  {
    name: "Maintenance",
    description: "Keep your website secure, updated, and running smoothly.",
    price: "A$99",
    period: "/month",
    note: "ongoing support",
    features: [
      "Website hosting and deployment support",
      "Bug fixes and troubleshooting",
      "Dependency and security updates",
      "Minor content and image updates",
      "Website uptime monitoring",
      "Email support",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send your message.");
      }

      form.reset();
      setStatus("Thanks! Your message has been sent.");
    } catch {
      setStatus(
        "We couldn't send your message. Please try again or email me directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-600/20">
              KM
            </span>
            <span>
              <span className="block text-sm font-bold tracking-tight">
                Kathleen Monzales
              </span>
              <span className="text-xs text-slate-500">
                Web Developer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#process">How it works</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 md:flex"
          >
            Get a quote <ArrowRight size={16} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-slate-200 p-2 md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
            {[
              ["Projects", "#projects"],
              ["How it works", "#process"],
              ["Pricing", "#pricing"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white"
            >
              Get a quote <ArrowRight size={16} />
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative isolate scroll-mt-24 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-sky-100"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
              <Sparkles size={14} />
              WEB DESIGN FOR SMALL BUSINESSES
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Your business.
              <br />
              <span className="text-blue-600">A better website.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Modern, fast websites that help Australian small
              businesses look professional and get more enquiries.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore my work <ArrowRight size={17} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Let's talk <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <Benefit icon={Zap} label="Fast loading" />
              <Benefit
                icon={MonitorSmartphone}
                label="Mobile friendly"
              />
              <Benefit icon={ShieldCheck} label="SEO essentials" />
            </div>
          </div>

          {/* Hero website preview */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-300/30 blur-2xl" />

            <div className="relative rounded-2xl border border-white bg-white p-2 shadow-2xl shadow-slate-900/10 sm:p-3">
              <div className="flex h-9 items-center gap-1.5 border-b border-slate-100 px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <div className="ml-3 flex-1 rounded-md bg-slate-100 px-3 py-1 text-[10px] text-slate-400">
                  riversideplumbing.com.au
                </div>
              </div>

              <div className="relative h-[290px] overflow-hidden rounded-b-xl sm:h-[360px]">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=90"
                  alt="Plumber working on a home repair"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-900/10" />

                <div className="relative flex h-full flex-col items-start justify-center p-6 text-white sm:p-10">
                  <div className="mb-5 flex items-center gap-2 text-xs font-semibold">
                    <Droplets size={19} className="text-sky-300" />
                    RIVERSIDE PLUMBING
                  </div>
                  <h2 className="max-w-xs text-3xl font-bold leading-tight sm:text-4xl">
                    Plumbing done right.
                  </h2>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                    Reliable service for Perth homes and businesses.
                  </p>
                  <div className="mt-6 flex gap-2">
                    <span className="rounded-lg bg-blue-500 px-4 py-2.5 text-xs font-bold">
                      Get a quote
                    </span>
                    <span className="rounded-lg border border-white/50 px-4 py-2.5 text-xs font-semibold">
                      Our services
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating responsive badge */}
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MonitorSmartphone size={23} />
              </div>
              <div>
                <p className="text-sm font-bold">Every screen, covered.</p>
                <p className="mt-1 text-xs text-slate-500">
                  Desktop, tablet & mobile
                </p>
              </div>
            </div>

            <div className="absolute -right-2 -top-5 hidden items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-lg sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Zap size={17} />
              </span>
              <span className="text-xs font-bold">Built for speed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="SELECTED CONCEPTS"
            title="Websites made to stand out."
            description="A glimpse of what your business could look like online."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.name}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={`${project.category} website concept`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/30 bg-white/95 px-3 py-2 shadow-lg backdrop-blur">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${project.color}`}
                      >
                        <Icon size={17} />
                      </span>
                      <span className="text-sm font-bold">
                        {project.name}
                      </span>
                    </div>
                    <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700">
                      Website concept
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {project.category}
                    </p>
                    <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
                      {project.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs text-slate-400">
                        Next.js · Tailwind CSS
                      </span>
                      <a
                        href="#contact"
                        aria-label={`Ask about a website like ${project.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        <ArrowUpRight size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-slate-400">
            These are illustrative concepts for portfolio purposes,
            not client endorsements or claims of completed client work.
          </p>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="scroll-mt-24 border-y border-blue-100 bg-gradient-to-br from-blue-50/80 to-white px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="Simple from start to launch."
            description="No technical headaches. Just a clear process."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-sm">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>
                  <span className="mt-5 block text-xs font-bold tracking-widest text-blue-600">
                    STEP {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                  {step.number !== "04" && (
                    <ArrowRight
                      size={20}
                      className="absolute right-0 top-4 hidden text-blue-300 lg:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="STRAIGHTFORWARD PRICING"
            title="A website that fits your business."
            description="Clear starting prices. Final quotes depend on your requirements."
          />

          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-6 sm:p-7 ${plan.popular
                    ? "border-blue-500 bg-white shadow-xl shadow-blue-900/10 ring-1 ring-blue-500"
                    : "border-slate-200 bg-white"
                  }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                    Most popular
                  </span>
                )}

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  {plan.name === "Starter" ? (
                    <Zap size={21} />
                  ) : plan.name === "Business" ? (
                    <Sparkles size={21} />
                  ) : (
                    <Code2 size={21} />
                  )}
                </div>

                <h3 className="mt-5 text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 min-h-10 text-sm leading-6 text-slate-500">
                  {plan.description}
                </p>

                <div className="mt-5">
                  <span className="text-3xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <p className="mt-1 text-xs text-slate-500">
                    {plan.note}
                  </p>
                </div>

                <div className="my-6 h-px bg-slate-100" />

                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                >
                  {plan.name === "Custom"
                    ? "Discuss your project"
                    : "Get started"}
                  <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Illustrative starting prices in AUD. Confirm scope,
            payment terms, domain costs, hosting, and ongoing support
            in your proposal before publishing these rates.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-blue-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              LET'S WORK TOGETHER
            </span>

            <h2 className="mt-6 max-w-lg text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Have a business?
              <br />
              <span className="text-blue-400">
                Let's build your website.
              </span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Tell me a little about your business and what you
              have in mind. I'll get back to you to discuss the
              next steps.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:hello@yourdomain.com"
                className="flex w-fit items-center gap-3 text-sm text-slate-300 transition hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400">
                  <MessageCircle size={19} />
                </span>
                hello@yourdomain.com
              </a>

              <div className="flex w-fit items-center gap-3 text-sm text-slate-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400">
                  <MonitorSmartphone size={19} />
                </span>
                Working remotely with Australian businesses
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-8"
          >
            <h3 className="text-xl font-bold">Tell me about your project</h3>
            <p className="mt-2 text-sm text-slate-400">
              Share a few details to get the conversation started.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <FormField label="Your name">
                <input
                  name="name"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder="John Smith"
                  className="form-input"
                />
              </FormField>

              <FormField label="Email address">
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder="john@business.com.au"
                  className="form-input"
                />
              </FormField>

              <div className="sm:col-span-2">
                <FormField label="What do you need?">
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="form-input"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>New business website</option>
                    <option>Website redesign</option>
                    <option>Website maintenance</option>
                    <option>Something else</option>
                  </select>
                </FormField>
              </div>

              <div className="sm:col-span-2">
                <FormField label="Project details">
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={4}
                    placeholder="Tell me about your business and what you need..."
                    className="form-input resize-y"
                  />
                </FormField>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send enquiry"}
              {!submitting && <ArrowRight size={17} />}
            </button>

            <p
              role="status"
              aria-live="polite"
              className="mt-4 text-sm text-blue-300"
            >
              {status}
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 px-5 py-6 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-black">
              KM
            </span>
            <span>
              <span className="block text-sm font-semibold">
                Kathleen Monzales
              </span>
              <span className="text-xs text-slate-400">
                Web Developer
              </span>
            </span>
          </a>

          <div className="flex flex-wrap justify-center gap-5 text-xs text-slate-400">
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#process">
              Process
            </a>
            <a className="hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Kathleen Monzales
          </p>
        </div>
      </footer>
    </main>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
    >
      {children}
    </a>
  );
}

function Benefit({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <Icon size={17} className="text-blue-600" />
      {label}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.18em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </span>
      {children}
    </label>
  );
}
