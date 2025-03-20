
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, Video, ExternalLink, Headphones, Activity } from 'lucide-react';
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
        // For example: const response = await fetch('https://api.coinmc.fun/discord/members');
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Random number between 5000-10000 for demo purposes
        const randomCount = Math.floor(Math.random() * 5000) + 5000;
        setMemberCount(randomCount);
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

  const discordFeatures = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: 'Community Chat',
      description: 'Connect with other players, ask questions, and share your creations.',
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Find Friends',
      description: 'Meet new people, join teams, and create lasting friendships.',
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      title: 'Voice Chat',
      description: 'Communicate with your teammates in real-time while playing.',
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: 'Server Updates',
      description: 'Get notified about server news, events, and maintenance.',
    },
  ];
  
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
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {discordFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`animate-reveal delayed-${index * 100} flex items-start`}
                  >
                    <div className="mt-1 mr-3 p-2 rounded-md bg-coin-100/50 text-coin-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-coin-900">{feature.title}</h3>
                      <p className="text-sm text-coin-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
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
          
          {/* Discord embed/preview */}
          <div className="w-full lg:w-1/2 animate-reveal">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-coin-200">
              {/* Discord header */}
              <div className="bg-coin-500 p-4 text-white flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src="https://i.imgur.com/FRAdsKu.png" 
                    alt="Discord Logo" 
                    className="w-8 h-8 mr-3" 
                  />
                  <div>
                    <h3 className="font-bold">COINMC Community</h3>
                    <p className="text-xs opacity-80">
                      {isLoading ? (
                        <span className="inline-flex items-center">
                          <span className="animate-pulse h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                          Loading member count...
                        </span>
                      ) : (
                        <span>{memberCount?.toLocaleString() || "Many"} members</span>
                      )}
                    </p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="bg-coin-400 hover:bg-coin-600 text-white text-xs"
                  onClick={() => {
                    playButtonClickSound();
                    window.open('https://discord.coinmc.fun', '_blank');
                  }}
                >
                  Click to Visit
                </Button>
              </div>
              
              {/* Discord content preview - Replaced announcements with welcome message */}
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://i.imgur.com/QSLgHKC.jpg" 
                      alt="Server Icon" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-coin-900">COINMC Server</p>
                    <p className="text-xs text-coin-700">Welcome to our official Discord server!</p>
                  </div>
                </div>
                
                {/* Welcome message instead of announcements */}
                <div className="bg-coin-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center text-sm mb-2">
                    <MessageSquare size={14} className="mr-2 text-coin-500" />
                    <span className="font-medium text-coin-800">#welcome</span>
                  </div>
                  
                  <div className="text-center p-4">
                    <img 
                      src="https://i.imgur.com/nJFfBfa.png" 
                      alt="Minecraft Characters" 
                      className="h-24 mx-auto mb-3" 
                    />
                    <p className="text-coin-800 font-minecraft text-sm">
                      Welcome to the official COINMC Discord!
                    </p>
                    <p className="text-coin-700 text-xs mt-2">
                      Join voice chats, find teammates, and stay updated with server events
                    </p>
                  </div>
                </div>
                
                <div className="text-center text-sm text-coin-600">
                  Join our vibrant community of Minecraft players today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discord;
