
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, Video, ExternalLink, Headphones, Activity } from 'lucide-react';

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
        // For example: const response = await fetch('https://api.risemc.fun/discord/members');
        
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
      className="py-24 bg-gradient-to-b from-indigo-950/30 to-rise-950 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="w-full lg:w-1/2" ref={contentRef}>
            <div className="animate-reveal">
              <div className="inline-flex items-center rounded-full px-3 py-1 mb-6 bg-indigo-900/30 border border-indigo-800/30">
                <span className="text-xs font-medium text-indigo-300">
                  Join Our Community
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Connect with us on <span className="text-indigo-400">Discord</span>
              </h2>
              
              <p className="text-gray-300 mb-8 max-w-lg">
                Be part of our growing community. Chat with other players, stay updated with server announcements, participate in events, and get support from our team.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {discordFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`animate-reveal delayed-${index * 100} flex items-start`}
                  >
                    <div className="mt-1 mr-3 p-2 rounded-md bg-indigo-900/50 text-indigo-400">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={() => window.open('https://discord.risemc.fun', '_blank')}
              >
                Join Our Discord
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Discord embed/preview */}
          <div className="w-full lg:w-1/2 animate-reveal">
            <div className="bg-dark-800 rounded-2xl shadow-xl overflow-hidden border border-dark-700">
              {/* Discord header */}
              <div className="bg-indigo-600 p-4 text-white flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src="https://i.imgur.com/FRAdsKu.png" 
                    alt="Discord Logo" 
                    className="w-8 h-8 mr-3" 
                  />
                  <div>
                    <h3 className="font-bold">RISEMC Community</h3>
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
                  className="bg-indigo-500 hover:bg-indigo-700 text-white text-xs"
                  onClick={() => window.open('https://discord.risemc.fun', '_blank')}
                >
                  Click to Visit
                </Button>
              </div>
              
              {/* Discord content preview */}
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://i.imgur.com/yqBfITY.png" 
                      alt="Server Icon" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-white">RISEMC Server</p>
                    <p className="text-xs text-gray-400">Welcome to our official Discord server!</p>
                  </div>
                </div>
                
                {/* Channel preview */}
                <div className="bg-dark-900 rounded-lg p-4 mb-4">
                  <div className="flex items-center text-sm mb-2">
                    <MessageSquare size={14} className="mr-2 text-gray-500" />
                    <span className="font-medium text-gray-300">#announcements</span>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex">
                      <span className="bg-green-900/30 text-green-400 text-xs px-1.5 py-0.5 rounded mr-2">
                        NEW
                      </span>
                      <p className="text-gray-300">Summer event starting this weekend! Join for double XP and special rewards.</p>
                    </div>
                    <div>
                      <p className="text-gray-300">Server maintenance scheduled for Tuesday, June 15th at 3:00 AM UTC.</p>
                    </div>
                    <div>
                      <p className="text-gray-300">Congratulations to @MinecraftPro for reaching the highest level this month!</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center text-sm text-gray-400">
                  Join {memberCount?.toLocaleString() || "thousands of"} other members and be part of our community
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
