import {
  FiArrowRight,
  FiMonitor,
  FiSearch,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-gradient-to-br from-white via-[#f2f8ff] to-[#dff0ff]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-[10px] font-extrabold uppercase tracking-widest text-blue-700">
            <FiZap /> Websites for Australian small businesses
          </p>

          <h1 className="max-w-xl text-4xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Your website.
            <span className="block text-[var(--brand-blue)]">
              Your next customer.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            I build modern, fast and mobile-friendly websites that help Australian small businesses stand out online, increase their visibility, and attract more customers.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--brand-blue)] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-[var(--brand-blue-dark)]"
            >
              Explore concepts <FiArrowRight />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-800 transition hover:border-blue-300"
            >
              Let&apos;s talk <FiArrowRight />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-2">
              <FiZap className="text-blue-600" /> Fast loading
            </span>
            <span className="flex items-center gap-2">
              <FiSmartphone className="text-blue-600" /> Mobile friendly
            </span>
            <span className="flex items-center gap-2">
              <FiSearch className="text-blue-600" /> SEO foundations
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <div className="absolute -inset-4 rounded-3xl bg-blue-200/50 blur-2xl" />

          <div className="relative rounded-2xl border border-white bg-white p-2.5 shadow-2xl shadow-blue-900/15 sm:rounded-3xl sm:p-3">
            <div className="flex h-9 items-center gap-1.5 px-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

              <div className="ml-3 flex-1 truncate rounded-md bg-slate-50 px-3 py-1.5 text-[10px] text-slate-400">
                west-coast-plumbing.com.au
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-xl bg-slate-900 sm:min-h-[390px]">
              <img
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1400&q=85"
                alt="Illustrative plumbing business website concept"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />

              <div className="relative flex min-h-[320px] max-w-md flex-col items-start justify-center p-6 text-white sm:min-h-[390px] sm:p-9">
                <span className="mb-4 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
                  West Coast Plumbing
                </span>

                <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                  Plumbing done right.
                </h2>

                <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                  A professional online presence designed for local service
                  businesses.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-[var(--brand-blue)] px-3 py-2 text-xs font-bold">
                    Get a quote
                  </span>
                  <span className="rounded-lg border border-white/50 px-3 py-2 text-xs font-bold">
                    Our services
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-4 flex max-w-xs items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:absolute sm:-bottom-5 sm:-left-5 sm:mx-0">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-xl text-blue-600">
              <FiMonitor />
            </span>
            <span>
              <strong className="block text-xs text-slate-900">
                Responsive design
              </strong>
              <small className="mt-1 block text-[10px] text-slate-500">
                Designed for every screen
              </small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}