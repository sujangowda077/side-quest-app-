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

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Fixed Watermark */}
      <FixedWatermark />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Real App Experience Section */}
        <RealAppExperience />

        {/* Inline Download CTA */}
        <InlineDownloadCTA />

        {/* How It Works Section */}
        <HowItWorks />

        {/* For Everyone Section */}
        <ForEveryone />

        {/* Campus Buzz Preview */}
        <CampusBuzzPreview />

        {/* Final CTA Section */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
