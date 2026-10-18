
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiLayers,
  FiZap,
} from "react-icons/fi";


const plans = [
  {
    name: "Business Website",
    subtitle: "Get noticed online and attract more customers",
    price: "A$1,299",
    cadence: "one-time payment",
    icon: FiLayers,
    featured: true,
    features: [
      "Custom website design tailored to your business",
      "Up to 5 pages",
      "Mobile-friendly and responsive layout",
      "Basic SEO setup and search-friendly structure",
      "Contact and quote request form",
      "Automatic email confirmation to customers",
      "Email notifications to your business for new enquiries",
      "Deployment and website launch",
      "30 days of post-launch bug fixes",
    ],
    cta: "Get started",
  },
  {
    name: "Website Care Plan",
    subtitle: "Keep your website running smoothly",
    price: "A$79",
    cadence: "per month",
    icon: FiCode,
    featured: false,
    features: [
      "Hosting and deployment management",
      "Domain and DNS assistance",
      "Minor text, image, and content updates",
      "Website availability and performance checks",
      "Contact form and enquiry email checks",
      "Minor bug fixes and troubleshooting",
      "Basic backup and recovery guidance",
      "Email support for website-related questions",
    ],
    cta: "Ask about care",
  },
];


export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-y border-blue-100 bg-gradient-to-br from-[#f4f9ff] via-white to-[#edf6ff] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">
            Pricing
          </p>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Clear pricing. No surprises.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Straightforward starting packages to help your business get
            online, attract more customers, and keep your website running
            smoothly. Final quotes depend on your requirements.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 sm:grid-cols-2">
          {plans.map(
            ({
              name,
              subtitle,
              price,
              cadence,
              icon: Icon,
              featured,
              features,
              cta,
            }) => (
              <article
                key={name}
                className={`relative flex h-full flex-col rounded-2xl bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
                  featured
                    ? "border-2 border-blue-500 shadow-lg shadow-blue-100/70 lg:scale-[1.02]"
                    : "border border-slate-200 shadow-sm"
                }`}
              >
                {/* Featured badge */}
                {featured && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[var(--brand-blue)] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    Popular choice
                  </span>
                )}

                {/* Plan heading */}
                <div className="flex min-h-[8.5rem] flex-col">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-xl text-blue-600">
                    <Icon />
                  </span>

                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                    {name}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    {subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-2 min-h-[5.5rem] border-b border-slate-100 pb-5">
                  <p className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    {price}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    {cadence}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-4 py-6">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-5 text-slate-600"
                    >
                      <FiCheck className="mt-0.5 shrink-0 text-base text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`mt-auto flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                    featured
                      ? "bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue-dark)]"
                      : "border border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  {cta}
                  <FiArrowRight className="shrink-0" />
                </a>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
