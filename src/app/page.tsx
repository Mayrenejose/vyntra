"use client";

import FeatureStrip from "../components/home/FeatureStrip";
import HowWeWork from "../components/home/HowWeWork";
import Services from "../components/home/Services";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Footer from "../components/layout/Footer";
import FinalCTA from "../components/sections/FinalCTA";
import { useState } from "react";
import ContactModal from "../components/sections/ContactModal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main>
      <Navbar onOpenContact={() => setOpenModal(true)} />
      <Hero />
      <FeatureStrip />
      <HowWeWork />
      <Services />
      <FinalCTA />
      <Footer />
      <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </main>
  );
}