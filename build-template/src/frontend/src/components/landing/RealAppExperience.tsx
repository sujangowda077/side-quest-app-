import { PhoneMockup } from './PhoneMockup';
import { useInViewFadeIn } from '@/hooks/useInViewFadeIn';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import printShop from "@/assets/screenshots/print-shop.jpeg";
import foodMenu from "@/assets/screenshots/food-menu.jpg";
import runner from "@/assets/screenshots/runner.jpg";
import profile from "@/assets/screenshots/profile.png";
import tutors from "@/assets/screenshots/tutors.jpeg";
export function RealAppExperience() {
  const { ref: sectionRef, isVisible: sectionVisible } = useInViewFadeIn<HTMLElement>();

  return (
    <section
      id="features"
      ref={sectionRef}
      className={`relative z-10 py-20 md:py-32 ${sectionVisible ? 'fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-neon-green neon-text-glow mb-16 md:mb-24">
          See SideQuest in Action
        </h2>

        <div className="space-y-24 md:space-y-32">
          {/* Runner Screen - Left screenshot, Right text */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <PhoneMockup
                screenshot={runner}
                alt="Runner Quest Screen"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-neon-green">
                Earn Between Classes
              </h3>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Accept delivery quests, see your earnings upfront, and get paid instantly via UPI. Secure OTP-based delivery ensures safe handoffs.
              </p>
            </div>
          </div>

          {/* Print Shop Screen - Right screenshot, Left text */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-neon-green">
                Smart Print Ordering
              </h3>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Upload PDFs directly from your phone. Choose B&W or color, single or double-sided, add binding, and get notified when your prints are ready.
              </p>
            </div>
            <div>
              <PhoneMockup
                screenshot={printShop}
                alt="Print Shop Screen"
              />
            </div>
          </div>

          {/* Food Menu Screen */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <PhoneMockup
                screenshot={foodMenu}
                alt="Campus Eats Menu"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-neon-green">
                Live Campus Menus
              </h3>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Browse real-time menus from campus cafes, see what's available, and order instantly. No more waiting in long lines.
              </p>
            </div>
          </div>


          {/* Profile + Mana Screen */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-neon-green">
                Gamified Rewards System
              </h3>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Every order earns Mana (XP). Track your balance, level up your profile, and unlock status within the campus ecosystem.
              </p>
            </div>
            <div>
          
              <PhoneMockup
                screenshot={profile}
                alt="Profile and Mana Screen"
              />
            </div>
          </div>
          {/*Tutors Screen - Right screenshot, Left text */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <PhoneMockup
                screenshot={tutors}
                alt="Tutors Screen"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-neon-green">
                Campus Tutoring
              </h3>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Find and book tutoring sessions with campus experts. Schedule, pay, and get feedback all within the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
