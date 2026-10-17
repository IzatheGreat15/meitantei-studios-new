import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { DemoIcon } from "./icons";

export default function Footer({ config }: { config: PlumbingDemoConfig }) {
  const serviceLinks = config.services.items.slice(0, 6);
  const year = 2026;
  return (
    <footer className="text-white" style={{ background: "var(--brand-secondary)" }}>
      <div className="mx-auto grid max-w-7xl gap-9 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr_1fr] lg:px-10">
        <div><a href="#home" className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl" style={{ color: "var(--brand-primary)" }}><DemoIcon name="droplet" /></span><span className="text-lg font-black leading-tight">{config.brand.name}</span></a><p className="mt-4 max-w-xs text-xs leading-5 text-slate-300">Plumbing services for homes and businesses. Reliable service, practical advice and quality workmanship.</p><div className="mt-4 flex gap-2">{(config.footer.socialLinks ?? []).map((social) => <a key={social.label} href={social.url} aria-label={social.label} className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-sm transition hover:bg-white/20"><DemoIcon name={social.icon} /></a>)}</div></div>
        <div><h3 className="mb-4 text-xs font-extrabold">QUICK LINKS</h3><ul className="space-y-2 text-xs text-slate-300">{[["Home", "#home"], ["Services", "#services"], ["About Us", "#about"], ["Projects", "#projects"], ["Reviews", "#reviews"], ["Contact", "#quote"]].map(([label, href]) => <li key={label}><a className="hover:text-white" href={href}>{label}</a></li>)}</ul></div>
        <div><h3 className="mb-4 text-xs font-extrabold">SERVICES</h3><ul className="space-y-2 text-xs text-slate-300">{serviceLinks.map((service) => <li key={service.title}><a className="hover:text-white" href="#services">{service.title}</a></li>)}<li><a className="hover:text-white" href="#services">All Services</a></li></ul></div>
        <div><h3 className="mb-4 text-xs font-extrabold">CONTACT US</h3><ul className="space-y-3 text-xs text-slate-300"><li className="flex gap-2"><DemoIcon name="phone" className="mt-0.5 shrink-0" /><a href={`tel:${config.contact.phone.replace(/[^+\d]/g, "")}`}>{config.contact.phone}</a></li><li className="flex gap-2 break-all"><DemoIcon name="map" className="mt-0.5 shrink-0" />{config.contact.email}</li><li className="flex gap-2"><DemoIcon name="map" className="mt-0.5 shrink-0" />{config.contact.address}</li><li className="flex gap-2"><DemoIcon name="clock" className="mt-0.5 shrink-0" />{config.contact.businessHours}</li></ul></div>
      </div>
      <div className="border-t border-white/15"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 text-[10px] text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10"><p>© {year} {config.brand.name}. {config.footer.copyright}</p><div className="flex gap-4"><a href={config.footer.privacyUrl ?? "#"}>Privacy Policy</a><a href={config.footer.termsUrl ?? "#"}>Terms of Service</a></div></div></div>
    </footer>
  );
}
