import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { DemoIcon } from "./icons";

export default function Reviews({ config }: { config: PlumbingDemoConfig }) {
  if (!config.reviews.length) return null;
  return (
    <section id="reviews" className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-7 flex items-end justify-between gap-4"><div><p className="mb-2 text-[11px] font-extrabold tracking-[.18em] text-[var(--brand-primary)]">WHAT OUR CUSTOMERS SAY</p><h2 className="text-2xl font-black tracking-tight sm:text-3xl">Trusted by Local Homeowners & Businesses</h2></div><a href="#quote" className="hidden rounded-lg border border-[var(--brand-primary)] px-4 py-2 text-xs font-bold text-[var(--brand-primary)] sm:inline-flex">Get in Touch →</a></div>
        <div className="grid gap-4 md:grid-cols-3">
          {config.reviews.map((review) => <article key={`${review.name}-${review.location}`} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="flex gap-0.5 text-amber-500" aria-label={`${review.rating} out of 5 stars`}>{Array.from({ length: Math.min(5, Math.max(0, review.rating)) }).map((_, i) => <DemoIcon key={i} name="star" />)}</div><p className="mt-3 text-sm leading-6 text-slate-600">“{review.text}”</p><div className="mt-5 flex items-center gap-3">{review.avatar ? <img src={review.avatar} alt="" className="h-9 w-9 rounded-full object-cover" /> : <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-sm font-bold text-slate-500">{review.name.slice(0, 1)}</span>}<div><p className="text-xs font-extrabold">{review.name}</p><p className="mt-0.5 text-[10px] text-slate-500">{review.location}</p></div></div></article>)}
        </div>
        <p className="mt-4 text-[10px] text-slate-400">These are not real reviews. These are only for demo purposes.</p>
      </div>
    </section>
  );
}
