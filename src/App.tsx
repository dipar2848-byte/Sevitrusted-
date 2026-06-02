import { Navbar } from "./components/Navbar";
import { FloatingActions } from "./components/FloatingActions";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Doctors } from "./components/sections/Doctors";
import { About } from "./components/sections/About";
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
        <Services />
        <Doctors />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
