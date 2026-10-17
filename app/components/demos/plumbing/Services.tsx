import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { DemoIcon } from "./icons";

export default function Services({ config }: { config: PlumbingDemoConfig }) {
  return (
    <section id="services" className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div><p className="mb-2 text-[11px] font-extrabold tracking-[.18em] text-[var(--brand-primary)]">{config.services.eyebrow ?? "OUR SERVICES"}</p><h2 className="text-2xl font-black tracking-tight sm:text-3xl">{config.services.title}</h2>{config.services.description && <p className="mt-2 max-w-2xl text-sm text-slate-600">{config.services.description}</p>}</div>
          <a href="#quote" className="hidden items-center gap-2 text-xs font-bold text-[var(--brand-primary)] sm:flex">View all services <DemoIcon name="arrow" /></a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {config.services.items.map((service) => (
            <article key={service.title} className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={service.image} alt={service.title} loading="lazy" className="h-28 w-full object-cover sm:h-32" />
              <div className="p-3.5">
                <DemoIcon name={service.icon} className="mb-2 text-xl text-[var(--brand-primary)]" />
                <h3 className="text-sm font-extrabold leading-snug">{service.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{service.description}</p>
                <a href="#quote" className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold text-[var(--brand-primary)]">Learn more <DemoIcon name="arrow" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
