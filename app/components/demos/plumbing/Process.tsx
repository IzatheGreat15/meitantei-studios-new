import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { DemoIcon } from "./icons";

export default function Process({ config }: { config: PlumbingDemoConfig }) {
  return (
    <section className="bg-slate-50 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="mb-2 text-[11px] font-extrabold tracking-[.18em] text-[var(--brand-primary)]">HOW IT WORKS</p>
        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Simple, Hassle-Free Service</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.process.map((step, index) => (
            <div key={step.title} className="relative flex gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-extrabold text-white" style={{ background: "var(--brand-primary)" }}>{index + 1}</span>
              <div><DemoIcon name={step.icon} className="mb-2 text-2xl text-[var(--brand-primary)]" /><h3 className="text-sm font-extrabold">{step.title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{step.description}</p></div>
              {index < config.process.length - 1 && <span className="absolute right-0 top-2 hidden text-xl text-[var(--brand-primary)] lg:block">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
