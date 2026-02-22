import { Routes, Route } from "react-router-dom";

import { ScrollProgress } from '@/components/landing/ScrollProgress';
import { FixedWatermark } from '@/components/landing/FixedWatermark';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { RealAppExperience } from '@/components/landing/RealAppExperience';
import { InlineDownloadCTA } from '@/components/landing/InlineDownloadCTA';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { ForEveryone } from '@/components/landing/ForEveryone';
import { CampusBuzzPreview } from '@/components/landing/CampusBuzzPreview';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
import { FoundersSection } from '@/components/founders/FoundersSection'; // ✅ Added
import HowItWorksPage from '@/components/pages/how-it-works/HowItWorksPage'; // ✅ Added, but not used in routing yet

// ✅ Your original landing page layout (UNCHANGED)
function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
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
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

// ✅ Routing added (ONLY NEW PART)
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
