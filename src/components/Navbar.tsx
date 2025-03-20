
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { playButtonClickSound } from '@/utils/sound';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Game Modes', href: '#game-modes' },
    { name: 'Discord', href: 'https://discord.coinmc.fun' },
  ];
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6",
      isScrolled 
        ? "py-3 bg-coin-500/90 backdrop-blur-lg shadow-md" 
        : "py-5 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-minecraft tracking-tight">
            <span className="text-creamy-50">COIN</span>
            <span className="text-white">MC</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={playButtonClickSound}
            >
              {link.name}
            </a>
          ))}
          
          <Button 
            className="bg-white text-coin-500 hover:bg-creamy-100 rounded-full shadow-md"
            onClick={() => {
              playButtonClickSound();
              window.open('https://store.coinmc.fun', '_blank');
            }}
          >
            Play Now
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            className="text-white p-2" 
            onClick={() => {
              playButtonClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-coin-500/95 backdrop-blur-sm shadow-lg md:hidden transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
      )}>
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="block py-2 text-base font-medium text-white/80 hover:text-white"
              onClick={(e) => {
                playButtonClickSound();
                setMobileMenuOpen(false);
              }}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="w-full bg-white text-coin-500 hover:bg-creamy-100 shadow-md"
            onClick={() => {
              playButtonClickSound();
              window.open('https://store.coinmc.fun', '_blank');
            }}
          >
            Play Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
