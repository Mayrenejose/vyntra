import FeatureStrip from "../components/home/FeatureStrip";
import HowWeWork from "../components/home/HowWeWork";
import Services from "../components/home/Services";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Footer from "../components/layout/Footer";
import FinalCTA from "../components/ui/FinalCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureStrip />
      <HowWeWork />
      <Services />
      <FinalCTA />
      <Footer />
    </main>
  );
}