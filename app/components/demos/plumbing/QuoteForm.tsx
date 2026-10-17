"use client";

import { useState, type FormEvent } from "react";
import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { DemoIcon } from "./icons";

export default function QuoteForm({ config }: { config: PlumbingDemoConfig }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="quote" className="py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
        <div className="hidden overflow-hidden rounded-l-2xl lg:block"><img src={config.services.items[4]?.image ?? config.about.image} alt="Modern bathroom" loading="lazy" className="h-full min-h-[490px] w-full object-cover" /></div>
        <div className="rounded-2xl bg-white p-1 sm:p-4 lg:rounded-l-none lg:p-8">
          <p className="mb-2 text-[11px] font-extrabold tracking-[.18em] text-[var(--brand-primary)]">{config.quote.eyebrow}</p>
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{config.quote.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">{config.quote.description}</p>
          {submitted ? (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900"><p className="font-bold">Thanks! Your demo form was submitted.</p><p className="mt-1">This preview does not send your details anywhere. These are only for demo purposes.</p><button onClick={() => setSubmitted(false)} className="mt-3 font-bold underline">Submit another request</button></div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-bold text-slate-700">Full Name *<input required name="name" autoComplete="name" placeholder="Your name" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm font-normal outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-blue-100" /></label>
              <label className="text-xs font-bold text-slate-700">Phone Number *<input required name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm font-normal outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-blue-100" /></label>
              <label className="text-xs font-bold text-slate-700">Email Address *<input required name="email" type="email" autoComplete="email" placeholder="you@example.com" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm font-normal outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-blue-100" /></label>
              <label className="text-xs font-bold text-slate-700">Service Needed *<select required name="service" defaultValue="" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm font-normal outline-none focus:border-[var(--brand-primary)]"><option value="" disabled>Select a service</option>{config.quote.services.map((service) => <option key={service}>{service}</option>)}</select></label>
              <label className="text-xs font-bold text-slate-700 sm:col-span-2">Tell us about your plumbing needs *<textarea required name="description" rows={3} placeholder="E.g. leaking tap, blocked drain, hot water system..." className="mt-2 w-full resize-y rounded-lg border border-slate-200 px-3 py-3 text-sm font-normal outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-blue-100" /></label>
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2"><button type="submit" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white" style={{ background: "var(--brand-primary)" }}>Submit Request <DemoIcon name="arrow" /></button><span className="flex items-center gap-1.5 text-[10px] text-slate-500"><DemoIcon name="check" className="text-[var(--brand-primary)]" /> Free, no-obligation quote</span><span className="flex items-center gap-1.5 text-[10px] text-slate-500"><DemoIcon name="clock" className="text-[var(--brand-primary)]" /> Quick response</span></div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
