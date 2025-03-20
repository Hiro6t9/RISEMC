
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { playButtonClickSound } from '@/utils/sound';

const Store = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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
  
  return (
    <section 
      id="store" 
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
                  Support the Server
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visit our <span className="text-coin-500">Store</span>
              </h2>
              
              <p className="text-coin-800 mb-8 max-w-lg">
                Support the server and enhance your gameplay experience with exclusive items and perks. Our store offers a variety of options to make your time on COINMC even more enjoyable.
              </p>
              
              <Button 
                className="bg-coin-500 hover:bg-coin-600 text-white shadow-md"
                onClick={() => {
                  playButtonClickSound();
                  window.open('https://store.coinmc.fun', '_blank');
                }}
              >
                Visit Store
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Simplified Store Card */}
          <div className="w-full lg:w-1/2 animate-reveal">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-coin-200">
              {/* Simple header */}
              <div className="bg-[#FFC000] p-6 text-white text-center">
                <h3 className="font-bold text-2xl mb-1">COINMC Store</h3>
                <p className="opacity-90">Support the server & get exclusive items</p>
              </div>
              
              {/* Simple content */}
              <div className="p-8 text-center">
                <p className="text-coin-800 font-medium mb-6">
                  Visit our store to browse cosmetics, kits, and more!
                </p>
                
                <Button 
                  className="w-full bg-[#FFC000] hover:bg-amber-500 text-white"
                  onClick={() => {
                    playButtonClickSound();
                    window.open('https://store.coinmc.fun', '_blank');
                  }}
                >
                  Go to Store
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

export default Store;
