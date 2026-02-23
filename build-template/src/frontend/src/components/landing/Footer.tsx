import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black border-t border-neon-green/20 mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT SECTION */}
          <div>
            <h3 className="text-2xl font-bold text-neon-green neon-text-glow mb-4">
              SideQuest
            </h3>
            <p className="text-foreground/80 leading-relaxed max-w-sm">
              A campus super app and gamified ecosystem that transforms
              everyday campus life into an engaging experience.
            </p>
          </div>

          {/* CONTACT SECTION */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>

            <div className="flex items-center gap-3 group">
              <Mail size={18} className="text-neon-green" />

              <a
                href="mailto:office.sidequest26@gmail.com?subject=SideQuest Inquiry&body=Hi SideQuest Team,%0D%0A%0D%0AI would like to ask about..."
                className="text-neon-green transition duration-300 hover:text-white hover:underline"
              >
                office.sidequest26@gmail.com
              </a>
            </div>
          </div>

          {/* LEGAL SECTION */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Legal
            </h4>

            <div className="space-y-2">
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground/80 hover:text-neon-green transition"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground/80 hover:text-neon-green transition"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-green transition hover:scale-110"
          >
            <Twitter size={22} />
          </a>

          <a
            href="https://www.instagram.com/side_quest26/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-green transition hover:scale-110"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-green transition hover:scale-110"
          >
            <Linkedin size={22} />
          </a>
        </div>

        {/* BOTTOM COPYRIGHT + LINKS */}
        <div className="mt-12 text-center text-sm text-foreground/70 space-y-3">
          <p>© 2026 SideQuest. All rights reserved.</p>

          <p>
            Buy me a coffee ☕ —{" "}
            <a
              href="https://www.linkedin.com/in/sujan-gowda-s-24a0442b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-green font-semibold hover:underline transition"
            >
              @SujanGowda
            </a>

            {"  |  "}

            <Link
              to="/aboutus"
              className="text-neon-green font-semibold hover:underline transition"
            >
              @AboutUs
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}