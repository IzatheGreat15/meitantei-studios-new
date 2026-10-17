import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";

export default function About({ config }: { config: PlumbingDemoConfig }) {
  const stats = [[config.about.experience, "Years Experience"], [config.about.customers, "Happy Customers"], [config.about.rating, "Average Rating"]];
  return (
    <section id="about" className="py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-9 px-5 sm:px-8 md:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="mb-2 text-[11px] font-extrabold tracking-[.18em] text-[var(--brand-primary)]">{config.about.eyebrow ?? "ABOUT US"}</p>
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{config.about.title}</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">{config.about.description}</p>
          <a href="#quote" className="mt-5 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white" style={{ background: "var(--brand-primary)" }}>More About Us <span aria-hidden="true">→</span></a>
          <div className="mt-8 grid grid-cols-3 divide-x divide-slate-200">
            {stats.map(([value, label]) => <div key={label} className="px-2 text-center first:pl-0 last:pr-0"><p className="text-2xl font-black tracking-tight sm:text-3xl">{value}</p><p className="mt-1 text-[10px] text-slate-500 sm:text-xs">{label}</p></div>)}
          </div>
        </div>
        <img src={config.about.image} alt={`${config.brand.name} plumber at work`} loading="lazy" className="h-[300px] w-full rounded-2xl object-cover shadow-md sm:h-[390px]" />
      </div>
    </section>
  );
}
