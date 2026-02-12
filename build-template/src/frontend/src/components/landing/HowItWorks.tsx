import { Card, CardContent } from '@/components/ui/card';
import { useInViewFadeIn } from '@/hooks/useInViewFadeIn';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';

const steps = [
  {
    number: '1',
    title: 'Choose Your Quest',
    description: '(Order food, print, or deliver)'
  },
  {
    number: '2',
    title: 'Complete the Action',
    description: '(Pick up, deliver, or upload)'
  },
  {
    number: '3',
    title: 'Earn Rewards',
    description: '(Mana or instant cash)'
  }
];

export function HowItWorks() {
  const { ref, isVisible } = useInViewFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`relative z-10 py-20 md:py-32 ${isVisible ? 'fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-neon-green neon-text-glow mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="bg-card/50 backdrop-blur-sm neon-border hover-glow"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-neon-green/20 flex items-center justify-center neon-glow-sm">
                  <span className="text-3xl font-bold text-neon-green">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-foreground/70">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
