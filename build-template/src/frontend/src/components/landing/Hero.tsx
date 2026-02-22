import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LANDING_CONFIG } from '@/landing/config';
import hero from '@/assets/screenshots/sidequest-bg.mp4';
import heroBg from "@/assets/screenshots/hero-bg.png";
import { Link } from "react-router-dom";
export function Hero() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  const handleDownload = () => {
    if (LANDING_CONFIG.openInNewTab) {
      window.open(LANDING_CONFIG.downloadUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = LANDING_CONFIG.downloadUrl;
    }
  };

  const handleBecomeRunner = () => {
    const element = document.getElementById('for-runners');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={heroBg}
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src='https://wczartlciqwwcvivrtcg.supabase.co/storage/v1/object/public/sidequest-assets/sidequest-bg%20(1).mp4' type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-0">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neon-green neon-text-glow mb-6 animate-fadeIn">
          SideQuest
        </h1>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          Level Up Your Campus Life
        </h2>

        <p
          className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeIn"
          style={{ animationDelay: '0.4s' }}
        >
          SideQuest transforms everyday campus life into a gamified ecosystem. Order food, print assignments, earn rewards, and complete delivery quests — all in one powerful super app.
        </p>

        {/* ✅ EDITED: Added mt-10 md:mt-16 to move buttons lower */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-60 md:mt-66 animate-fadeIn"
          style={{ animationDelay: '0.6s' }}
        >
          <Button
            onClick={handleDownload}
            size="lg"
            className="px-8 py-3 bg-neon-green text-black font-semibold rounded-lg hover:shadow-[0_0_25px_#39FF14] transition-all duration-300"
          >
            Download Now
          </Button>
{/*
          <Link
            to="how-it-works"
            className="px-8 py-3 border border-neon-green text-neon-green rounded-lg hover:shadow-[0_0_25px_#39FF14] hover:bg-neon-green hover:text-black transition-all duration-300"
          >
            Explore Now
          </Link>*/}
        </div>
      </div>
    </section>
  );
}
