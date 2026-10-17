import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { DemoIcon } from "./icons";

export default function TrustBar({ config }: { config: PlumbingDemoConfig }) {
  return (
    <section className="text-white" style={{ background: "var(--brand-secondary)" }}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-7 sm:px-8 md:grid-cols-4 lg:px-10">
        {config.trustHighlights.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <span className="shrink-0 text-2xl text-sky-300"><DemoIcon name={item.icon} /></span>
            <div><h3 className="text-xs font-extrabold sm:text-sm">{item.title}</h3><p className="mt-1 text-[11px] leading-4 text-slate-300">{item.description}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
