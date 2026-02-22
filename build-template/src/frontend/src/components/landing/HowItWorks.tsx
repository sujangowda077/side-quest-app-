import { Card, CardContent } from "@/components/ui/card";
import { useInViewFadeIn } from "@/hooks/useInViewFadeIn";
import { Link } from "react-router-dom";
import {
  UserPlus,
  UtensilsCrossed,
  Printer,
  GraduationCap,
  Bell
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Join Quest",
    description: "Create & verify your account",
    icon: UserPlus
  },
  {
    number: "2",
    title: "Order Food",
    description: "Browse, pay via QR, get notified",
    icon: UtensilsCrossed
  },
  {
    number: "3",
    title: "Printouts",
    description: "Upload, customize, pick up",
    icon: Printer
  },
  {
    number: "4",
    title: "Get Tutors",
    description: "Post request, set bounty, learn",
    icon: GraduationCap
  },
  {
    number: "5",
    title: "Stay Updated",
    description: "Deals, offers & announcements",
    icon: Bell
  }
];

export function HowItWorks() {
  const { ref, isVisible } = useInViewFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`relative z-10 py-24 md:py-32 ${
        isVisible ? "fade-in" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-neon-green/70 mb-3">
            Step by Step
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-neon-green neon-text-glow">
            How SideQuest Works
          </h2>
          <p className="text-lg text-foreground/70 mt-4">
            Order. Print. Learn. Earn.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <Card
                key={step.number}
                className="bg-card/40 backdrop-blur-md neon-border hover-glow transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">

                  {/* Icon Circle */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-neon-green/20 flex items-center justify-center neon-glow-sm">
                    <Icon className="w-8 h-8 text-neon-green" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-foreground/70">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      {/* Explore Button */}
       <div className="flex justify-center mt-16">
{/*           <Link
            to="/how-it-works"
            className="px-10 py-4 text-black font-bold rounded-lg bg-neon-green hover:shadow-[0_0_25px_#39FF14] transition-all duration-300"
          >
            Explore Now →
          </Link>*/}
        </div>
      </div>
    </section>
  );
}