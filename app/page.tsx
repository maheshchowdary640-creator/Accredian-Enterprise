"use client";

import React, { useState } from "react";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/sections/Hero";
import { TrustCompanies } from "../components/sections/TrustCompanies";
import { SolutionsSection } from "../components/sections/SolutionsSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { StatsSection } from "../components/sections/StatsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CtaSection } from "../components/sections/CtaSection";
import { ContactSection } from "../components/sections/ContactSection";
import { Footer } from "../components/layout/Footer";
import { DemoModal } from "../components/sections/DemoModal";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Sticky Responsive Navbar */}
      <Header onBookDemoClick={() => setDemoOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Phase 1: Hero Section */}
        <Hero onBookDemoClick={() => setDemoOpen(true)} />

        {/* Phase 2: Trusted Companies logo strip */}
        <TrustCompanies />

        {/* Phase 2: Solutions cards section */}
        <SolutionsSection />

        {/* Phase 2: Technical features grid section */}
        <FeaturesSection />

        {/* Phase 3: Statistics counters grid */}
        <StatsSection />

        {/* Phase 3: Customer testimonials section */}
        <TestimonialsSection />

        {/* Phase 3: Conversion call-to-action banner */}
        <CtaSection onBookDemoClick={() => setDemoOpen(true)} />

        {/* Phase 3: Contact information & validation form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Demo Request Modal overlay dialog */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
