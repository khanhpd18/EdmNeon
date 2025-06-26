import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black/80'
    } border-b border-neon-cyan/30`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-orbitron font-bold text-neon-cyan neon-glow">
              EDM WORLD
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-neon-cyan transition-colors duration-300"
              >
                Trang chủ
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-neon-cyan transition-colors duration-300"
              >
                Giới thiệu
              </button>
              <button 
                onClick={() => scrollToSection('artists')}
                className="text-white hover:text-neon-cyan transition-colors duration-300"
              >
                Nghệ sĩ
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-white hover:text-neon-cyan transition-colors duration-300"
              >
                Sự kiện
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-neon-cyan"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-neon-cyan/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-white hover:text-neon-cyan transition-colors duration-300 w-full text-left"
              >
                Trang chủ
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-white hover:text-neon-cyan transition-colors duration-300 w-full text-left"
              >
                Giới thiệu
              </button>
              <button 
                onClick={() => scrollToSection('artists')}
                className="block px-3 py-2 text-white hover:text-neon-cyan transition-colors duration-300 w-full text-left"
              >
                Nghệ sĩ
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="block px-3 py-2 text-white hover:text-neon-cyan transition-colors duration-300 w-full text-left"
              >
                Sự kiện
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
