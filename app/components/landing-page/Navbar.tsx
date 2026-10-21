"use client";

import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Why work with me", href: "#why-me" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="flex shrink-0 items-center gap-3">
          <img src="/profile.png" className="w-10 h-10" />

          <span>
            <span className="block text-sm font-extrabold text-slate-900">
              Meitantei Studios
            </span>
            <span className="block text-[11px] text-slate-500">
              Web Developer
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-xs font-semibold text-slate-600 transition hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-[var(--brand-blue)] px-5 py-3 text-xs font-bold text-white transition hover:bg-[var(--brand-blue-dark)] sm:inline-flex"
        >
          Get a quote <FiArrowUpRight />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 text-xl md:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-slate-100 py-4 text-sm font-semibold text-slate-700 last:border-0"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[var(--brand-blue)] px-4 py-3 text-sm font-bold text-white"
          >
            Get a quote <FiArrowUpRight />
          </a>
        </nav>
      )}
    </header>
  );
}