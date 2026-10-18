
import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import { DemoIcon } from "./icons";

export default function Footer({
  config,
}: {
  config: PlumbingDemoConfig;
}) {
  const serviceLinks = config.services.items.slice(0, 6);
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-white"
      style={{ background: "var(--brand-secondary)" }}
    >
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 py-12 sm:px-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:gap-12 lg:px-10">
        {/* Brand */}
        <div className="flex h-full flex-col items-start">
          <a href="#home" className="flex items-center gap-3">
            {
              config.logo && <img src={config.logo} className="w-11" />
            }

            <span className="text-lg font-black leading-tight">
              {config.brand.name}
            </span>
          </a>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
            Handyman services for homes and businesses. From everyday
            repairs to outdoor improvements, get the job done with
            practical solutions for your property.
          </p>

          {(config.footer.socialLinks ?? []).length > 0 && (
            <div className="mt-5 flex items-center gap-3">
              {(config.footer.socialLinks ?? []).map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  target={
                    social.url.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    social.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-sm transition hover:bg-white/20"
                >
                  <DemoIcon name={social.icon} />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-5 text-xs font-extrabold tracking-wider">
            QUICK LINKS
          </h3>

          <ul className="space-y-3 text-sm text-slate-300">
            {[
              ["Home", "#home"],
              ["Services", "#services"],
              ["About Us", "#about"],
              ["Our Work", "#projects"],
              ["Reviews", "#reviews"],
              ["Contact", "#quote"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  className="transition-colors hover:text-white"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-xs font-extrabold tracking-wider">
            OUR SERVICES
          </h3>

          <ul className="space-y-3 text-sm text-slate-300">
            {serviceLinks.map((service) => (
              <li key={service.title}>
                <a
                  className="transition-colors hover:text-white"
                  href="#services"
                >
                  {service.title}
                </a>
              </li>
            ))}

            <li className="pt-1">
              <a
                className="inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-slate-300"
                href="#services"
              >
                View all services
                <span aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xs font-extrabold tracking-wider">
            GET IN TOUCH
          </h3>

          <ul className="space-y-4 text-sm text-slate-300">
            {config.contact.phone && (
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <DemoIcon name="phone" />
                </span>
                <a
                  className="break-words transition-colors hover:text-white"
                  href={`tel:${config.contact.phone.replace(/[^+\d]/g, "")}`}
                >
                  {config.contact.phone}
                </a>
              </li>
            )}

            {config.contact.email && (
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <DemoIcon name="mail" />
                </span>
                <a
                  className="break-all transition-colors hover:text-white"
                  href={`mailto:${config.contact.email}`}
                >
                  {config.contact.email}
                </a>
              </li>
            )}

            {config.contact.address && (
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <DemoIcon name="map" />
                </span>
                <span className="leading-6">
                  {config.contact.address}
                </span>
              </li>
            )}

            {config.contact.businessHours && (
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <DemoIcon name="clock" />
                </span>
                <span className="leading-6">
                  {config.contact.businessHours}
                </span>
              </li>
            )}
          </ul>

          <a
            href="#quote"
            className="mt-6 inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--brand-primary)" }}
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 py-5 text-center text-xs text-slate-400 sm:px-8 md:flex-row md:justify-between md:text-left lg:px-10">
          <p>
            © {year} {config.brand.name}. {config.footer.copyright}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              className="transition-colors hover:text-white"
              href={config.footer.privacyUrl ?? "#"}
            >
              Privacy Policy
            </a>

            <a
              className="transition-colors hover:text-white"
              href={config.footer.termsUrl ?? "#"}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
