import { LANDING_CONFIG } from '@/landing/config';
import { SiX, SiInstagram, SiLinkedin } from 'react-icons/si';
import logo from "@/assets/screenshots/hero.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'sidequest-app';

  return (
    <footer className="relative z-10 bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="SideQuest"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-neon-green">SideQuest</span>
            </div>
            <p className="text-foreground/70 text-sm">
              A campus super app and gamified ecosystem that transforms everyday campus life into an engaging experience.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <p className="text-foreground/70 text-sm">
              <a
                href={`mailto:${LANDING_CONFIG.contactEmail}`}
                className="hover:text-neon-green transition-colors"
              >
                {LANDING_CONFIG.contactEmail}
              </a>
            </p>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Legal</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href={LANDING_CONFIG.privacyPolicyUrl}
                className="text-foreground/70 hover:text-neon-green transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href={LANDING_CONFIG.termsUrl}
                className="text-foreground/70 hover:text-neon-green transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href={LANDING_CONFIG.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-neon-green transition-colors hover-glow"
          >
            <SiX size={24} />
          </a>
          <a
            href={LANDING_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-neon-green transition-colors hover-glow"
          >
            <SiInstagram size={24} />
          </a>
          <a
            href={LANDING_CONFIG.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-neon-green transition-colors hover-glow"
          >
            <SiLinkedin size={24} />
          </a>
        </div>

        {/* Copyright and Attribution */}
        <div className="text-center text-sm text-foreground/60 space-y-2">
          <p>© {currentYear} SideQuest. All rights reserved.</p>
          <p>
            Buy me a coffee ☕ —{' '}
            <a
              href={`https://www.linkedin.com/in/sujan-gowda-s-24a0442b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-green hover:underline"
            >
              @SujanGowda
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
