
import { useEffect, useRef } from 'react';
import { Shield, Sword, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { playButtonClickSound } from '@/utils/sound';

interface GameMode {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  comingSoon?: boolean;
  image: string;
}

const gameModes: GameMode[] = [
  {
    id: 'lifesteal',
    title: 'LifeSteal',
    description: 'Experience a unique survival mode where you steal hearts from other players when you kill them. The more hearts you collect, the stronger you become!',
    icon: <Shield className="h-6 w-6" />,
    color: 'from-rise-400 to-rise-600',
    image: 'https://i.imgur.com/c8Bmi3T.jpg',
  },
  {
    id: 'ffa',
    title: 'FREE FOR ALL',
    description: 'A chaotic battle arena where everyone fights against each other. Only the strongest will survive!',
    icon: <Sword className="h-6 w-6" />,
    color: 'from-rose-400 to-red-600',
    comingSoon: true,
    image: 'https://i.imgur.com/Z8RT3J5.jpg',
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
      className="py-24 bg-gradient-to-b from-creamy-100/30 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Game Modes for <span className="text-transparent bg-clip-text bg-gradient-to-r from-rise-500 to-red-600">Every Player</span>
          </h2>
          <p className="text-rise-700 max-w-2xl mx-auto">
            Explore our unique game modes, each offering exciting experiences and challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {gameModes.map((mode, index) => (
            <div
              key={mode.id}
              ref={el => cardRefs.current[index] = el}
              className="animate-reveal delayed-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Game mode image */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={mode.image} 
                  alt={mode.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {mode.comingSoon && (
                  <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-rise-100/90 backdrop-blur-sm text-rise-600 flex items-center">
                    <Clock size={12} className="mr-1" />
                    COMING SOON
                  </div>
                )}
              </div>
              
              <div className="p-6 bg-white">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${mode.color} text-white shadow-md mr-4`}>
                    {mode.icon}
                  </div>
                  <h3 className="text-xl font-bold text-rise-900">{mode.title}</h3>
                </div>
                
                <p className="text-rise-700 mb-6">
                  {mode.description}
                </p>
                
                {!mode.comingSoon && (
                  <Button 
                    className="w-full mt-2 bg-gradient-to-r from-rise-500 to-red-600 text-white rounded-lg hover:from-rise-600 hover:to-red-700 transition-all hover:shadow-lg"
                    onClick={() => {
                      playButtonClickSound();
                      window.open('https://store.risemc.fun', '_blank');
                    }}
                  >
                    Play Now
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModes;
