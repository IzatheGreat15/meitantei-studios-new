import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { DemoIcon } from "./icons";

export default function Projects({ config }: { config: PlumbingDemoConfig }) {
  if (!config.projects.items.length) return null;
  return (
    <section id="projects" className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-7 flex items-end justify-between gap-4"><div><p className="mb-2 text-[11px] font-extrabold tracking-[.18em] text-[var(--brand-primary)]">{config.projects.eyebrow ?? "RECENT WORK"}</p><h2 className="text-2xl font-black tracking-tight sm:text-3xl">{config.projects.title}</h2></div><a href="#quote" className="hidden items-center gap-2 text-xs font-bold text-[var(--brand-primary)] sm:flex">Discuss your project <DemoIcon name="arrow" /></a></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {config.projects.items.map((project) => <article key={project.title} className="group"><div className="overflow-hidden rounded-xl bg-slate-100"><img src={project.image} alt={project.title} loading="lazy" className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" /></div><h3 className="mt-3 text-sm font-extrabold">{project.title}</h3><p className="mt-1 text-xs text-slate-500">{project.location}</p></article>)}
        </div>
        <p className="mt-4 text-[10px] text-slate-400">These are not real projects. These are only for demo purposes.</p>
      </div>
    </section>
  );
}
