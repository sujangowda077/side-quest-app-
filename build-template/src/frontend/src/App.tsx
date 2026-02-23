import { Routes, Route } from "react-router-dom";

import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { FixedWatermark } from "@/components/landing/FixedWatermark";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { RealAppExperience } from "@/components/landing/RealAppExperience";
import { InlineDownloadCTA } from "@/components/landing/InlineDownloadCTA";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ForEveryone } from "@/components/landing/ForEveryone";
import { CampusBuzzPreview } from "@/components/landing/CampusBuzzPreview";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { FoundersSection } from "@/components/founders/FoundersSection";
import HowItWorksPage from "@/components/pages/how-it-works/HowItWorksPage";

import { AppShowcase } from "@/components/landing/AppShowcase";
import { Roadmap } from "@/components/landing/Roadmap";

import { NeonGridBackground } from "@/components/effects/NeonGridBackground";
import { MouseGlow } from "@/components/effects/MouseGlow";
import { ScrollProgressBar } from "@/components/effects/ScrollProgressBar";


function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">

      {/* GLOBAL VISUAL EFFECTS (NOT INSIDE ROUTES) */}
      <NeonGridBackground />
      <MouseGlow />
      <ScrollProgressBar />

      <ScrollProgress />
      <FixedWatermark />
      <Navbar />

      <main>
        <Hero />
        <RealAppExperience />
        <InlineDownloadCTA />
        <HowItWorks />
        <ForEveryone />
        <CampusBuzzPreview />

        {/* NEW SECTIONS */}
        <AppShowcase />
        <Roadmap />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aboutus" element={<FoundersSection />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
    </Routes>
  );
}

export default App;