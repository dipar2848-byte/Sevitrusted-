import { Navbar } from "./components/Navbar";
import { FloatingActions } from "./components/FloatingActions";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { Services } from "./components/sections/Services";
import { Doctors } from "./components/sections/Doctors";
import { Automation } from "./components/sections/Automation";
import { HowItWorks } from "./components/sections/HowItWorks";
import { About } from "./components/sections/About";
import { Testimonials } from "./components/sections/Testimonials";
import { Facility } from "./components/sections/Facility";
import { Faq } from "./components/sections/Faq";
import { FinalCta } from "./components/sections/FinalCta";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Doctors />
        <Automation />
        <HowItWorks />
        <About />
        <Testimonials />
        <Facility />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
