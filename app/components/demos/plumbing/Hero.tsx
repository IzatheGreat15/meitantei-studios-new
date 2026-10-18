import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { DemoIcon } from "./icons";

export default function Hero({ config }: { config: PlumbingDemoConfig }) {
  return (
    <section id="home" className="relative isolate flex min-h-[570px] items-center overflow-hidden bg-slate-950 sm:min-h-[640px]">
      <img src={config.hero.backgroundImage} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/15" />
      <div
        className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 ${config.hero.alignment === "center" ? "flex justify-center" : ""
          }`}
      >
        <div className={`max-w-2xl text-white ${config.hero.alignment === "center" ? "text-center" : "" }`}>
          <p className="mb-4 text-xs font-extrabold tracking-[.2em] text-[var(--brand-primary)]">{config.hero.eyebrow}</p>
          <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{config.hero.title}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">{config.hero.description}</p>
          <div className={`mt-7 flex flex-wrap gap-3 ${config.hero.alignment === "center" ? "justify-center" : "" }`}>
            <a href="#quote" className="inline-flex items-center gap-3 rounded-lg px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:brightness-110" style={{ background: "var(--brand-primary)" }}>{config.hero.primaryCta}<DemoIcon name="arrow" /></a>
            <a href={`tel:${config.contact.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 rounded-lg border border-white/60 bg-black/20 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"><DemoIcon name="phone" />{config.contact.phone}</a>
          </div>
          <div className={`mt-9 flex flex-wrap ${config.hero.alignment === "center" ? "justify-center" : "" } gap-x-7 gap-y-4 text-xs font-semibold text-white`}>
            {[["clock", "Prompt Service"], ["shield", "Quality Workmanship"], ["map", "Perth & Surrounds"]].map(([icon, label]) => (
              <span key={label} className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-lg" style={{ color: "var(--brand-primary)" }}><DemoIcon name={icon} /></span>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
