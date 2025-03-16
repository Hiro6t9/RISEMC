
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
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
    { name: 'Discord', href: 'https://discord.risemc.fun' },
  ];
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
      isScrolled 
        ? "py-3 bg-rise-950/90 backdrop-blur-lg border-b border-rise-900/50" 
        : "py-5 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-minecraft tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rise-500 to-red-600">RISE</span>
            <span className="text-white">MC</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-rise-500"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.name}
            </a>
          ))}
          
          {mounted && (
            <div className="flex items-center space-x-2">
              <Sun size={16} className="text-gray-300" />
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={toggleTheme} 
                className="data-[state=checked]:bg-rise-600" 
              />
              <Moon size={16} className="text-gray-300" />
            </div>
          )}
          
          <Button 
            className="bg-gradient-to-r from-rise-500 to-red-600 hover:from-rise-600 hover:to-red-700 text-white rounded-full shadow-md"
            onClick={() => window.open('https://store.risemc.fun', '_blank')}
          >
            Play Now
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          {mounted && (
            <div className="flex items-center">
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-rise-600"
              />
            </div>
          )}
          
          <button 
            className="text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-rise-950 border-b border-rise-900 md:hidden transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="block py-2 text-base font-medium text-gray-300 hover:text-rise-500"
              onClick={() => setMobileMenuOpen(false)}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
