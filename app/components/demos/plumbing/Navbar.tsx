"use client";

import { useState } from "react";
import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { DemoIcon } from "./icons";

export default function Navbar({ config }: { config: PlumbingDemoConfig }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "#home"], ["Services", "#services"], ["About", "#about"],
    ["Projects", "#projects"], ["Reviews", "#reviews"], ["Contact", "#quote"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          {
            config.logo ? <img className="w-11 object-cover" src={config.logo} /> : (
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-2xl text-white" style={{ background: "var(--brand-primary)" }}>
                <DemoIcon name="droplet" />
              </span>
            )
          }
          <span className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">{config.brand.name}</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[.15em] text-slate-500 sm:block">{config.brand.tagline ?? "Plumbing & Maintenance"}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-xs font-semibold text-slate-700 transition hover:text-[var(--brand-primary)]">{label}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={`tel:${config.contact.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <DemoIcon name="phone" className="text-[var(--brand-primary)]" /> {config.contact.phone}
          </a>
          <a href="#quote" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:opacity-90" style={{ background: "var(--brand-secondary)" }}>
            Get a Quote <DemoIcon name="arrow" />
          </a>
        </div>

        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-xl md:hidden">
          <DemoIcon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700">{label}</a>
            ))}
          </nav>
          <a href={`tel:${config.contact.phone.replace(/[^+\d]/g, "")}`} className="mt-4 flex items-center gap-2 py-2 text-sm font-bold"><DemoIcon name="phone" className="text-[var(--brand-primary)]" />{config.contact.phone}</a>
          <a href="#quote" onClick={() => setOpen(false)} className="mt-2 flex justify-center rounded-lg px-4 py-3 text-sm font-bold text-white" style={{ background: "var(--brand-primary)" }}>Get a Quote <DemoIcon name="arrow" className="ml-2 mt-1" /></a>
        </div>
      )}
    </header>
  );
}
