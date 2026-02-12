import { useInViewFadeIn } from '@/hooks/useInViewFadeIn';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { Flame, Megaphone, PartyPopper } from 'lucide-react';

const buzzItems = [
  { icon: Flame, text: '50% off after 4 PM', color: 'text-orange-500' },
  { icon: Megaphone, text: 'Print shop closing at 7 PM', color: 'text-blue-500' },
  { icon: PartyPopper, text: 'Free fries with combo meal', color: 'text-yellow-500' }
];

export function CampusBuzzPreview() {
  const { ref, isVisible } = useInViewFadeIn<HTMLElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      ref={ref}
      className={`relative z-10 py-20 md:py-32 overflow-hidden ${isVisible ? 'fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-neon-green neon-text-glow mb-16">
          Campus Buzz
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div className={`flex gap-8 ${!prefersReducedMotion ? 'animate-scroll' : ''}`}>
              {/* Duplicate items for seamless loop */}
              {[...buzzItems, ...buzzItems].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 min-w-[300px] neon-border"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                      <p className="text-lg font-semibold text-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
