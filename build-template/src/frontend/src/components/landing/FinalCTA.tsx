import { Button } from '@/components/ui/button';
import { LANDING_CONFIG } from '@/landing/config';
import { useInViewFadeIn } from '@/hooks/useInViewFadeIn';

export function FinalCTA() {
  const { ref, isVisible } = useInViewFadeIn<HTMLElement>();

  const handleDownload = () => {
    if (LANDING_CONFIG.openInNewTab) {
      window.open(LANDING_CONFIG.downloadUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = LANDING_CONFIG.downloadUrl;
    }
  };

  return (
    <section
      ref={ref}
      className={`relative z-10 py-32 md:py-40 ${isVisible ? 'fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neon-green neon-text-glow mb-6">
          Ready to Start Your Quest?
        </h2>
        <p className="text-2xl md:text-3xl text-foreground/80 mb-12">
          Eat. Earn. Connect.
        </p>
        <Button
          onClick={handleDownload}
          size="lg"
          className="bg-neon-green text-background hover:bg-neon-green/90 neon-glow hover-glow text-xl px-16 py-8 font-bold"
        >
          Download Now
        </Button>
      </div>
    </section>
  );
}
