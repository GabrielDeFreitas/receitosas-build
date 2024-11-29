import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowToWorking } from "./components/HowToWorking";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="p-4 items-center justify-center gap-4 grid grid-cols-12 max-w-7xl m-auto">
      <div className="border-2 p-4 col-span-12" id="header_nav_bar">
        <Header />
      </div>

      <div className="border-2 p-4 col-span-12" id="hero_section">
        <HeroSection />
      </div>

      <div className="border-2 p-4 col-span-12" id="how_to_working">
        <HowToWorking />
      </div>

      <div className="border-2 p-4 col-span-12" id="pricing">
        <Pricing />
      </div>

      <div className="border-2 p-4 col-span-12" id="faq">
        <FAQ />
      </div>

      <div className="border-2 p-4 col-span-12" id="cta_section">
        <CTA />
      </div>

      <div className="border-2 p-4 col-span-12" id="footer">
        <Footer />
      </div>
    </div>
  );
}
