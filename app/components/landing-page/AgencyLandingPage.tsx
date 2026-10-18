import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import WhyWorkWithMe from "./WhyWorkWithMe";
import Process from "./Process";
import Pricing from "./Pricing";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function AgencyLandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <WhyWorkWithMe />
        <Process />
        <Pricing />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}