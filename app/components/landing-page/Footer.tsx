
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050d20] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-5 py-6 sm:px-8 md:grid-cols-[1fr_auto_1fr]">

        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-3 justify-self-center md:justify-self-start"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[var(--brand-blue)] text-xs font-black">
            KM
          </span>

          <span>
            <strong className="block text-xs">
              Kathleen Monzales
            </strong>
            <small className="text-[10px] text-slate-400">
              Web Developer
            </small>
          </span>
        </a>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-slate-400">
          <a className="transition-colors hover:text-white" href="#projects">
            Projects
          </a>
          <a className="transition-colors hover:text-white" href="#process">
            Process
          </a>
          <a className="transition-colors hover:text-white" href="#pricing">
            Pricing
          </a>
          <a
            className="inline-flex items-center gap-1 transition-colors hover:text-white"
            href="#contact"
          >
            Contact <FiArrowUpRight />
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-center text-[10px] text-slate-500 md:justify-self-end md:text-right">
          © 2026 Kathleen Monzales.
          <span className="md:block"> All rights reserved.</span>
        </p>

      </div>
    </footer>
  );
}
