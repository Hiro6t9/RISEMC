
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

const Hero = () => {
  const [playersOnline, setPlayersOnline] = useState<number | null>(null);
  const serverIp = 'play.risemc.fun';
  
  // This would be replaced with an actual API call in production
  useEffect(() => {
    // Simulate fetching player count
    const timer = setTimeout(() => {
      setPlayersOnline(Math.floor(Math.random() * 500) + 100);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const copyIpToClipboard = () => {
    navigator.clipboard.writeText(serverIp);
    toast.success('Server IP copied to clipboard');
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden bg-pattern">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-dark-900 pointer-events-none"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-6 pt-10 pb-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full px-4 py-1 mb-8 bg-rise-100 dark:bg-rise-950/50 border border-rise-200 dark:border-rise-900/50">
            <span className="animate-pulse h-2 w-2 rounded-full bg-rise-500 mr-2"></span>
            <span className="text-xs font-medium text-rise-700 dark:text-rise-300">
              {playersOnline !== null 
                ? `${playersOnline} Players Online Now` 
                : "Connecting to server..."}
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Rise</span> Above <br className="md:hidden" />
            The Rest
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-dark-600 dark:text-gray-300 mb-10 max-w-2xl">
            Join the ultimate Minecraft experience with unique game modes, custom plugins, and an amazing community.
          </p>
          
          {/* Server IP */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <div 
              className="relative group flex items-center px-5 py-3 bg-white dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-dark-700 shadow-sm cursor-pointer"
              onClick={copyIpToClipboard}
            >
              <div className="flex items-center gap-2">
                <span className="text-dark-900 dark:text-white font-medium tracking-wide font-minecraft">
                  {serverIp}
                </span>
                <Copy size={14} className="text-gray-400 group-hover:text-rise-500 transition-colors" />
              </div>
              
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-dark-900 dark:bg-dark-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Click to copy
              </div>
            </div>
            
            <Button className="px-6 py-6 bg-rise-500 hover:bg-rise-600 text-white rounded-lg">
              Play Now
            </Button>
          </div>
          
          {/* Screenshot preview */}
          <div className="relative mt-8 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl animate-float">
            <div className="absolute inset-0 bg-gradient-to-t from-rise-500/20 to-transparent pointer-events-none"></div>
            <img 
              src="https://i.imgur.com/UZ4kI9f.png" 
              alt="RISEMC Gameplay" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-xs mb-2 text-dark-500 dark:text-gray-400">Scroll to explore</span>
            <ChevronDown size={20} className="text-rise-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
