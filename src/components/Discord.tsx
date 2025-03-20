
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { playButtonClickSound } from '@/utils/sound';

const Discord = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [memberCount, setMemberCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Simulate fetching Discord member count
  useEffect(() => {
    const fetchMemberCount = async () => {
      try {
        setIsLoading(true);
        // In a real implementation, replace this with an actual API call to your Discord server
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Fixed count to match the screenshot: 5,050 members
        setMemberCount(5050);
      } catch (error) {
        console.error('Failed to fetch Discord member count:', error);
        setMemberCount(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemberCount();
    
    // No need to refresh too often for Discord counts
    const interval = setInterval(fetchMemberCount, 300000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section 
      id="discord" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-coin-100/30 to-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="w-full lg:w-1/2" ref={contentRef}>
            <div className="animate-reveal">
              <div className="inline-flex items-center rounded-full px-3 py-1 mb-6 bg-coin-100/30 border border-coin-200/30">
                <span className="text-xs font-medium text-coin-700">
                  Join Our Community
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Connect with us on <span className="text-coin-500">Discord</span>
              </h2>
              
              <p className="text-coin-800 mb-8 max-w-lg">
                Be part of our growing community. Chat with other players, stay updated with server announcements, participate in events, and get support from our team.
              </p>
              
              <Button 
                className="bg-coin-500 hover:bg-coin-600 text-white"
                onClick={() => {
                  playButtonClickSound();
                  window.open('https://discord.coinmc.fun', '_blank');
                }}
              >
                Join Our Discord
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Simplified Discord Card */}
          <div className="w-full lg:w-1/2 animate-reveal">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-coin-200">
              {/* Simple header */}
              <div className="bg-[#FFC000] p-6 text-white text-center">
                <h3 className="font-bold text-2xl mb-1">COINMC Discord</h3>
                <p className="opacity-90">
                  {isLoading ? 'Loading member count...' : `${memberCount?.toLocaleString() || "5,050"} members`}
                </p>
              </div>
              
              {/* Simple content */}
              <div className="p-8 text-center">
                <p className="text-coin-800 font-medium mb-6">
                  Join our community to chat with players, find teammates, and stay updated on server events
                </p>
                
                <Button 
                  className="w-full bg-[#FFC000] hover:bg-amber-500 text-white"
                  onClick={() => {
                    playButtonClickSound();
                    window.open('https://discord.coinmc.fun', '_blank');
                  }}
                >
                  Join Discord
                  <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discord;
