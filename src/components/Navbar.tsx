
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    { name: 'Store', href: '#store' },
    { name: 'Discord', href: '#discord' },
  ];
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
      isScrolled 
        ? "py-3 bg-white/90 dark:bg-dark-900/90 backdrop-blur-lg border-b border-rise-100/50 dark:border-dark-800/50" 
        : "py-5 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-minecraft tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rise-500 to-red-600">RISE</span>
            <span className="text-dark-900 dark:text-white">MC</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-dark-600 dark:text-gray-300 transition-colors hover:text-rise-500 dark:hover:text-rise-400"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-gradient-to-r from-rise-500 to-red-600 hover:from-rise-600 hover:to-red-700 text-white rounded-full shadow-md">
            Play Now
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark-900 dark:text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-white dark:bg-dark-900 border-b border-rise-100 dark:border-dark-800 md:hidden transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="block py-2 text-base font-medium text-dark-600 dark:text-gray-300 hover:text-rise-500 dark:hover:text-rise-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-gradient-to-r from-rise-500 to-red-600 hover:from-rise-600 hover:to-red-700 text-white shadow-md">
            Play Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
