import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface PhoneMockupProps {
  screenshot: string;
  alt: string;
}

export function PhoneMockup({ screenshot, alt }: PhoneMockupProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className={`relative ${!prefersReducedMotion ? 'floating' : ''}`}>
      <div className="relative w-full max-w-[300px] mx-auto">
        {/* Phone frame with glow */}
        <div className="relative rounded-[2.5rem] overflow-hidden neon-glow-sm">
          {/* Screenshot */}
          <img
            src={screenshot}
            alt="App Screenshot"
            className="rounded-[40px] shadow-[0_0_40px_rgba(0,255,136,0.4)]"
          />
          {/*Reflection*/}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent rounded-[40px]" />
          {/* Frame overlay */}
          <div className="absolute inset-0 rounded-[2.5rem] border-4 border-foreground/10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
