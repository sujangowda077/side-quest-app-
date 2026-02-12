import { Button } from '@/components/ui/button';
import { LANDING_CONFIG } from '@/landing/config';
import { useInViewFadeIn } from '@/hooks/useInViewFadeIn';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';

export function InlineDownloadCTA() {
  const { ref, isVisible } = useInViewFadeIn<HTMLDivElement>();

  const handleDownload = () => {
    if (LANDING_CONFIG.openInNewTab) {
      window.open(LANDING_CONFIG.downloadUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = LANDING_CONFIG.downloadUrl;
    }
  };

  return (
    <div
      ref={ref}
      className={`relative z-10 py-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Button
          onClick={handleDownload}
          size="lg"
          className="bg-neon-green text-background hover:bg-neon-green/90 neon-glow hover-glow text-lg px-12 py-6 font-bold"
        >
          Download Now
        </Button>
      </div>
    </div>
  );
}
