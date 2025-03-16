
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Gift, Award } from 'lucide-react';

interface VoteSite {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
  rewards: string[];
}

const voteSites: VoteSite[] = [
  {
    id: 'planet-minecraft',
    name: 'Planet Minecraft',
    description: 'Vote on Planet Minecraft once every 24 hours',
    logo: 'https://i.imgur.com/Xs3QmWM.png',
    url: 'https://www.planetminecraft.com/server/risemc/',
    rewards: ['1x Vote Key', '500 Server Points'],
  },
  {
    id: 'minecraft-server-list',
    name: 'Minecraft Server List',
    description: 'Vote on MC Server List once every 24 hours',
    logo: 'https://i.imgur.com/KWfNSZC.png',
    url: 'https://minecraftservers.org/vote/123456',
    rewards: ['1x Vote Key', '500 Server Points'],
  },
  {
    id: 'topg',
    name: 'TopG',
    description: 'Vote on TopG once every 24 hours',
    logo: 'https://i.imgur.com/190JytV.png',
    url: 'https://topg.org/minecraft-servers/server-123456',
    rewards: ['1x Vote Key', '500 Server Points'],
  },
  {
    id: 'minecraft-mp',
    name: 'Minecraft MP',
    description: 'Vote on Minecraft MP once every 24 hours',
    logo: 'https://i.imgur.com/kdTCz5X.png',
    url: 'https://minecraft-mp.com/server/123456/vote/',
    rewards: ['1x Vote Key', '500 Server Points'],
  },
];

const Vote = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const siteRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    siteRefs.current.forEach(site => {
      if (site) observer.observe(site);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      id="vote" 
      ref={sectionRef}
      className="py-24 bg-white dark:bg-dark-900 relative"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vote for <span className="gradient-text">Rewards</span>
          </h2>
          <p className="text-dark-600 dark:text-gray-300 max-w-2xl mx-auto">
            Support our server by voting daily and earn fantastic in-game rewards.
          </p>
        </div>
        
        {/* Rewards section */}
        <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 md:p-8 mb-12 animate-reveal">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Gift className="mr-2 text-rise-500" /> 
            Voting Rewards
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-dark-900 p-6 rounded-lg border border-gray-100 dark:border-dark-700">
              <div className="flex items-center mb-3">
                <Award className="text-amber-500 mr-2" />
                <h4 className="font-bold">Daily Voter</h4>
              </div>
              <p className="text-sm text-dark-500 dark:text-gray-400 mb-2">Vote on all sites in one day</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-rise-500 rounded-full mr-2"></span>
                  4x Vote Keys
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-rise-500 rounded-full mr-2"></span>
                  2,500 Server Points
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-rise-500 rounded-full mr-2"></span>
                  Daily Mystery Box
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-dark-900 p-6 rounded-lg border border-gray-100 dark:border-dark-700">
              <div className="flex items-center mb-3">
                <Award className="text-blue-500 mr-2" />
                <h4 className="font-bold">Weekly Champion</h4>
              </div>
              <p className="text-sm text-dark-500 dark:text-gray-400 mb-2">Vote every day for a week</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-rise-500 rounded-full mr-2"></span>
                  1x Legendary Crate Key
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-rise-500 rounded-full mr-2"></span>
                  10,000 Server Points
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-rise-500 rounded-full mr-2"></span>
                  Weekly Special Item
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-dark-900 p-6 rounded-lg border border-gray-100 dark:border-dark-700">
              <div className="flex items-center mb-3">
                <Award className="text-purple-500 mr-2" />
                <h4 className="font-bold">Monthly Devotee</h4>
              </div>
              <p className="text-sm text-dark-500 dark:text-gray-400 mb-2">Vote every day for a month</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-rise-500 rounded-full mr-2"></span>
                  Exclusive Monthly Kit
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-rise-500 rounded-full mr-2"></span>
                  50,000 Server Points
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-rise-500 rounded-full mr-2"></span>
                  Exclusive Cosmetics
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Voting sites */}
        <div className="grid md:grid-cols-2 gap-6">
          {voteSites.map((site, index) => (
            <div
              key={site.id}
              ref={el => siteRefs.current[index] = el}
              className={`animate-reveal delayed-${index * 100} bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-100 dark:border-dark-700 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:shadow-lg`}
            >
              {/* Site logo */}
              <div className="w-full md:w-24 h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-dark-700 flex-shrink-0">
                <img 
                  src={site.logo} 
                  alt={site.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-1">{site.name}</h3>
                <p className="text-sm text-dark-500 dark:text-gray-400 mb-3">
                  {site.description}
                </p>
                
                {/* Rewards */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium uppercase text-dark-400 dark:text-gray-500 mb-1">Rewards</h4>
                  <div className="flex flex-wrap gap-2">
                    {site.rewards.map((reward, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300 px-2 py-1 rounded-md"
                      >
                        {reward}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="bg-rise-500 hover:bg-rise-600 text-white w-full sm:w-auto"
                  onClick={() => window.open(site.url, '_blank')}
                >
                  Vote Now
                  <ExternalLink size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vote;
