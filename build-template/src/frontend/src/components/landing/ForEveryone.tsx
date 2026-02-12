import { Card, CardContent } from '@/components/ui/card';
import { useInViewFadeIn } from '@/hooks/useInViewFadeIn';
import { GraduationCap, Zap, Store } from 'lucide-react';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';

const audiences = [
  {
    id: 'for-students',
    icon: GraduationCap,
    title: 'Students',
    description: 'Skip queues. Upload prints. Earn rewards.'
  },
  {
    id: 'for-runners',
    icon: Zap,
    title: 'Runners',
    description: 'Earn money between classes.'
  },
  {
    id: 'for-vendors',
    icon: Store,
    title: 'Vendors',
    description: 'Manage orders with a real-time dashboard.'
  }
];

export function ForEveryone() {
  const { ref, isVisible } = useInViewFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`relative z-10 py-20 md:py-32 ${isVisible ? 'fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-neon-green neon-text-glow mb-16">
          For Everyone
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <Card
                key={audience.id}
                id={audience.id}
                className="bg-card/50 backdrop-blur-sm border-border hover-glow"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neon-green/10 flex items-center justify-center neon-glow-sm">
                    <Icon className="w-10 h-10 text-neon-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-neon-green mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-lg text-foreground/80">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
