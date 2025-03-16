
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { playButtonClickSound } from '@/utils/sound';

const Hero = () => {
  const [playersOnline, setPlayersOnline] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const serverIp = 'play.risemc.fun';
  
  // Simulate fetching player count - in a real app, this would be an API call
  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        setIsLoading(true);
        // In a real implementation, replace this with an actual API call to your Minecraft server
        // For example: const response = await fetch('https://api.risemc.fun/players');
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Random number between 100-500 for demo purposes
        const randomCount = Math.floor(Math.random() * 500) + 100;
        setPlayersOnline(randomCount);
      } catch (error) {
        console.error('Failed to fetch player count:', error);
        setPlayersOnline(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlayerCount();
    
    // Refresh player count every 60 seconds
    const interval = setInterval(fetchPlayerCount, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const copyIpToClipboard = () => {
    navigator.clipboard.writeText(serverIp);
    playButtonClickSound();
    toast.success('Server IP copied to clipboard');
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-creamy-100/70 pointer-events-none"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 pt-10 pb-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full px-4 py-1 mb-8 bg-white/70 backdrop-blur-sm border border-rise-200 shadow-sm">
            {isLoading ? (
              <div className="flex items-center">
                <span className="animate-pulse h-2 w-2 rounded-full bg-rise-500 mr-2"></span>
                <span className="text-xs font-medium text-rise-700">
                  Connecting to server...
                </span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="animate-pulse h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                <span className="text-xs font-medium text-rise-700">
                  {playersOnline !== null 
                    ? `${playersOnline} Players Online Now` 
                    : "Server status unavailable"}
                </span>
              </div>
            )}
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rise-500 to-red-600">Rise</span> Above <br className="md:hidden" />
            The Rest
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-rise-900/80 mb-10 max-w-2xl">
            Join the ultimate Minecraft experience with unique game modes, custom plugins, and an amazing community.
          </p>
          
          {/* Server IP */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <div 
              className="relative group flex items-center px-5 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-rise-200 shadow-sm cursor-pointer"
              onClick={copyIpToClipboard}
            >
              <div className="flex items-center gap-2">
                <span className="text-rise-900 font-medium tracking-wide font-minecraft">
                  {serverIp}
                </span>
                <Copy size={14} className="text-rise-600 group-hover:text-rise-500 transition-colors" />
              </div>
              
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-rise-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Click to copy
              </div>
            </div>
            
            <Button 
              className="px-6 py-6 bg-gradient-to-r from-rise-500 to-red-600 hover:from-rise-600 hover:to-red-700 text-white rounded-lg shadow-md transition-transform hover:scale-105"
              onClick={() => {
                playButtonClickSound();
                window.open('https://store.risemc.fun', '_blank');
              }}
            >
              Play Now
            </Button>
          </div>
          
          {/* Screenshot preview */}
          <div className="relative mt-8 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl animate-float">
            <div className="absolute inset-0 bg-gradient-to-t from-rise-500/20 to-transparent pointer-events-none"></div>
            <img 
              src="https://i.imgur.com/GXoL5gH.jpg" 
              alt="RISEMC Gameplay" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-xs mb-2 text-rise-700">Scroll to explore</span>
            <ChevronDown size={20} className="text-rise-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
