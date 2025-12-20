import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";

import About from "@/components/homes/home-web-agency/About";

import Hero from "@/components/homes/home-web-agency/Hero";
import MarqueeSlider from "@/components/homes/home-web-agency/MarqueeSlider";
import MarqueeSlider2 from "@/components/homes/home-web-agency/MarqueeSlider2";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import Projects from "@/components/homes/home-web-agency/Projects";
import Services from "@/components/homes/home-web-agency/Services";
import TeamShowcase from "@/components/homes/home-web-agency/TeamShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Peak Motion - Producción Audiovisual Trail Running & Mountain Sports",
  description:
    "Donde la montaña se convierte en cine y la montaña en nuestra causa. Especialización 100% trail con estética cinematográfica minimalista.",
};

export default function Home() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <MarqueeSlider />
        <ParallaxBanner />
        <About />
        <Services />
        <MarqueeSlider2 />
        <Projects />
        <TeamShowcase />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
