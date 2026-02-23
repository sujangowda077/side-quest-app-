import { useState } from 'react';
import { useScrollY } from '@/hooks/useScrollY';
import { Button } from '@/components/ui/button';
import { LANDING_CONFIG } from '@/landing/config';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/screenshots/hero.png";
import { Link } from 'react-router-dom';

export function Navbar() {
  const scrollY = useScrollY();
  const isScrolled = scrollY > 50;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleDownload = () => {
    if (LANDING_CONFIG.openInNewTab) {
      window.open(LANDING_CONFIG.downloadUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = LANDING_CONFIG.downloadUrl;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="SideQuest"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-xl md:text-2xl font-bold text-neon-green neon-text-glow">
              SideQuest
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/how-it-works"
              className="text-foreground/80 hover:text-neon-green transition-colors"
            >
              How It Works
            </Link>
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground/80 hover:text-neon-green transition-colors"
            >
              Features
            </button>

            <button
              onClick={() => scrollToSection('for-students')}
              className="text-foreground/80 hover:text-neon-green transition-colors"
            >
              For Students
            </button>
            <button
              onClick={() => scrollToSection('for-runners')}
              className="text-foreground/80 hover:text-neon-green transition-colors"
            >
              For Runners
            </button>
            <Button
              onClick={handleDownload}
              className="bg-neon-green text-background hover:bg-neon-green/90 neon-glow-sm hover-glow font-semibold"
            >
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-neon-green transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('for-students')}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-neon-green transition-colors"
            >
              For Students
            </button>
            <button
              onClick={() => scrollToSection('for-runners')}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-neon-green transition-colors"
            >
              For Runners
            </button>
            <div className="px-4">
              <Button
                onClick={handleDownload}
                className="w-full bg-neon-green text-background hover:bg-neon-green/90 neon-glow-sm font-semibold"
              >
                Download
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
