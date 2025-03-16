
import { useEffect, useRef } from 'react';
import { Shield, Sword, Clock } from 'lucide-react';

interface GameMode {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  comingSoon?: boolean;
}

const gameModes: GameMode[] = [
  {
    id: 'lifesteal',
    title: 'LifeSteal',
    description: 'Experience a unique survival mode where you steal hearts from other players when you kill them. The more hearts you collect, the stronger you become!',
    icon: <Shield className="h-6 w-6" />,
    color: 'from-rise-400 to-rise-600',
  },
  {
    id: 'ffa',
    title: 'FREE FOR ALL',
    description: 'A chaotic battle arena where everyone fights against each other. Only the strongest will survive!',
    icon: <Sword className="h-6 w-6" />,
    color: 'from-rose-400 to-red-600',
    comingSoon: true,
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
      className="py-24 bg-gradient-to-b from-white to-rise-50 dark:from-dark-900 dark:to-dark-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Game Modes for <span className="text-transparent bg-clip-text bg-gradient-to-r from-rise-500 to-red-600">Every Player</span>
          </h2>
          <p className="text-dark-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our unique game modes, each offering exciting experiences and challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {gameModes.map((mode, index) => (
            <div
              key={mode.id}
              ref={el => cardRefs.current[index] = el}
              className={`animate-reveal delayed-${index * 100} bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl p-8 border border-rise-100 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-5 -z-10" style={{
                background: `linear-gradient(135deg, #FCE7EA 0%, #E11D48 100%)`
              }}></div>
              
              <div className={`w-14 h-14 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br ${mode.color} text-white shadow-md`}>
                {mode.icon}
              </div>
              
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold">{mode.title}</h3>
                {mode.comingSoon && (
                  <span className="ml-3 px-3 py-1 text-xs font-semibold rounded-full bg-rise-100 text-rise-600 dark:bg-rise-900/30 dark:text-rise-300 flex items-center">
                    <Clock size={12} className="mr-1" />
                    COMING SOON
                  </span>
                )}
              </div>
              
              <p className="text-dark-600 dark:text-gray-300 mb-4">
                {mode.description}
              </p>
              
              {!mode.comingSoon && (
                <button className="mt-2 px-4 py-2 bg-gradient-to-r from-rise-500 to-red-600 text-white rounded-lg hover:from-rise-600 hover:to-red-700 transition-colors shadow-md hover:shadow-lg text-sm font-medium">
                  Play Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModes;
