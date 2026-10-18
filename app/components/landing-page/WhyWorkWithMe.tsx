import {
  FiEdit3,
  FiMapPin,
  FiMonitor,
  FiTrendingUp,
} from "react-icons/fi";

const benefits = [
  {
    title: "Local visibility",
    description:
      "Clear service pages and SEO foundations to help customers find you.",
    icon: FiMapPin,
  },
  {
    title: "More enquiries",
    description:
      "Clear messaging and calls to action that make contacting you easy.",
    icon: FiTrendingUp,
  },
  {
    title: "Mobile-first design",
    description:
      "A consistent, user-friendly experience across different screen sizes.",
    icon: FiMonitor,
  },
  {
    title: "Direct communication",
    description:
      "Work directly with your developer, from the first discussion to launch.",
    icon: FiEdit3,
  },
];

export default function WhyWorkWithMe() {
  return (
    <section
      id="why-me"
      className="border-y border-blue-100 bg-gradient-to-br from-[#f3f9ff] via-[#edf6ff] to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-blue-600">
            Why work with me
          </p>

          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            A practical approach to a better website.
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Personal service, thoughtful design and practical technology
            without unnecessary agency overhead.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex h-full items-start gap-4 rounded-2xl border border-white bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-950/5 sm:p-6"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-2xl text-blue-600">
                <Icon />
              </span>

              <div className="min-w-0">
                <h3 className="text-sm font-extrabold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}