import type { CSSProperties } from "react";
import type { PlumbingDemoConfig } from "@/config/demos/plumbing/types";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import TrustBar from "./TrustBar";
import About from "./About";
import Process from "./Process";
import Projects from "./Projects";
import Reviews from "./Reviews";
import QuoteForm from "./QuoteForm";
import ServiceAreas from "./ServiceAreas";
import Footer from "./Footer";

export default function PlumbingDemo({ config }: { config: PlumbingDemoConfig }) {
  const style = {
    "--brand-primary": config.brand.primaryColor,
    "--brand-secondary": config.brand.secondaryColor,
    "--brand-accent": config.brand.accentColor,
  } as CSSProperties;

  return (
    <div style={style} className="min-h-screen bg-white text-slate-900">
      <Navbar config={config} />
      <main>
        <Hero config={config} />
        <Services config={config} />
        <TrustBar config={config} />
        <About config={config} />
        <Process config={config} />
        <Projects config={config} />
        <Reviews config={config} />
        <QuoteForm config={config} />
        <ServiceAreas config={config} />
      </main>
      <Footer config={config} />
    </div>
  );
}
