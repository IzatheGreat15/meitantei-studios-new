
import {
  FiCheckCircle,
  FiDollarSign,
  FiShield,
  FiUser,
} from "react-icons/fi";

const promises = [
  "A custom website designed around your business and services",
  "Mobile-friendly design that works smoothly across devices",
  "SEO foundations to help customers find your business online",
  "A clear project timeline, regular updates, and reliable communication",
  "Optional ongoing maintenance and support when you need it",
];

const features = [
  {
    icon: FiUser,
    text: "Work directly with your developer",
  },
  {
    icon: FiShield,
    text: "A clear, honest process",
  },
  {
    icon: FiDollarSign,
    text: "Practical solutions for your budget",
  },
];

export default function About() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Introduction */}
          <div className="flex flex-col">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">
              A personal approach to web development
            </p>

            <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Your web developer, not another layer of agency.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              I’m Kathleen, your dedicated web developer. My goal is to help your business get noticed online, reach more potential customers, and turn website visitors into enquiries—and enquiries into paying customers. I build modern, user-friendly websites that showcase your services, build trust, and make it easier for customers to choose your business.
            </p>

            {/* Feature cards */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {features.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex min-h-28 flex-col items-center justify-center rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-center"
                >
                  <Icon className="mb-3 text-2xl text-blue-600" />
                  <p className="text-xs font-bold leading-5 text-slate-700">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Expectations and image */}
          <div className="grid items-stretch gap-5 sm:grid-cols-[1.1fr_0.9fr] lg:pt-1">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-7">
              <h3 className="text-lg font-extrabold text-slate-900">
                What you can expect
              </h3>

              <ul className="mt-6 space-y-4">
                {promises.map((promise) => (
                  <li
                    key={promise}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <FiCheckCircle className="mt-1 shrink-0 text-lg text-blue-600" />
                    <span>{promise}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-blue-100 pt-4 text-xs leading-5 text-slate-500">
                Project scope, deliverables, and timelines are agreed
                upon before work begins.
              </p>
            </div>

            <div className="relative min-h-72 overflow-hidden rounded-2xl sm:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Bright, modern workspace"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
