import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { DemoIcon } from "./icons";

export default function ServiceAreas({ config }: { config: PlumbingDemoConfig }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 py-12 text-white">
      <img src={config.serviceAreaBanner.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/25" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 sm:px-8 md:grid-cols-[1fr_auto] lg:px-10">
        <div><p className="mb-2 text-[11px] font-extrabold tracking-[.18em] text-sky-300">{config.serviceAreaBanner.eyebrow}</p><h2 className="max-w-xl text-2xl font-black sm:text-3xl">{config.serviceAreaBanner.title}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">{config.serviceAreaBanner.description}</p><div className="mt-4 flex flex-wrap gap-2">{config.serviceAreas.slice(0, 6).map((area) => <span key={area} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold">{area}</span>)}</div></div>
        <a href="#quote" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-extrabold text-slate-900 transition hover:bg-slate-100">{config.serviceAreaBanner.cta}<DemoIcon name="arrow" /></a>
      </div>
    </section>
  );
}
