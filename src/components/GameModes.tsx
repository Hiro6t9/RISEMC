
import { useEffect, useRef } from 'react';
import { Shield, Sword, Users, Gem, Bomb } from 'lucide-react';

interface GameMode {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  players?: number;
}

const gameModes: GameMode[] = [
  {
    id: 'survival',
    title: 'Survival',
    description: 'Experience classic Minecraft with a twist. Build, mine, and survive with friends in our enhanced survival world.',
    icon: <Shield className="h-6 w-6" />,
    color: 'from-green-400 to-emerald-600',
    players: 127,
  },
  {
    id: 'factions',
    title: 'Factions',
    description: 'Create or join powerful factions, build fortresses, forge alliances, and dominate the server through strategic warfare.',
    icon: <Sword className="h-6 w-6" />,
    color: 'from-blue-400 to-blue-600',
    players: 85,
  },
  {
    id: 'skyblock',
    title: 'SkyBlock',
    description: 'Start your journey on a floating island and expand your kingdom in the sky with unique challenges and rewards.',
    icon: <Gem className="h-6 w-6" />,
    color: 'from-purple-400 to-purple-600',
    players: 64,
  },
  {
    id: 'minigames',
    title: 'MiniGames',
    description: 'Jump into action-packed mini-games including Bed Wars, Spleef, Parkour, and many more exciting challenges.',
    icon: <Bomb className="h-6 w-6" />,
    color: 'from-amber-400 to-orange-600',
    players: 156,
  },
  {
    id: 'creative',
    title: 'Creative',
    description: 'Unleash your imagination with unlimited resources on our lag-free creative server with WorldEdit support.',
    icon: <Users className="h-6 w-6" />,
    color: 'from-pink-400 to-rose-600',
    players: 72,
  },
];

const GameModes = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      id="game-modes"
      ref={sectionRef} 
      className="py-24 bg-white dark:bg-dark-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Game Modes for <span className="gradient-text">Every Player</span>
          </h2>
          <p className="text-dark-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our diverse range of game modes, each offering unique experiences and challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameModes.map((mode, index) => (
            <div
              key={mode.id}
              ref={el => cardRefs.current[index] = el}
              className={`animate-reveal delayed-${index * 100} glass-card rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-gradient-to-br ${mode.color} text-white`}>
                {mode.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{mode.title}</h3>
              
              <p className="text-dark-600 dark:text-gray-300 mb-4 flex-grow">
                {mode.description}
              </p>
              
              {mode.players && (
                <div className="flex items-center text-sm text-dark-500 dark:text-gray-400">
                  <Users size={14} className="mr-1" />
                  <span>{mode.players} Online</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModes;
