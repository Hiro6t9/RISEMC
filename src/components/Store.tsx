
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Package, Crown, ExternalLink, Tag, CreditCard } from 'lucide-react';
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

  const storeFeatures = [
    {
      icon: <Crown className="h-5 w-5" />,
      title: 'Support the Server',
      description: 'Help us continue to provide an amazing gaming experience.',
    },
    {
      icon: <Package className="h-5 w-5" />,
      title: 'Cosmetic Items',
      description: 'Stand out with unique cosmetics that make you look awesome.',
    },
    {
      icon: <Tag className="h-5 w-5" />,
      title: 'Special Kits',
      description: 'Get a head start with powerful gear and resources.',
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: 'Secure Payments',
      description: 'All transactions are processed through secure payment gateways.',
    },
  ];
  
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
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {storeFeatures.map((feature, index) => (
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
          
          {/* Updated Store preview to match the provided image */}
          <div className="w-full lg:w-1/2 animate-reveal">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-coin-200">
              {/* Store header */}
              <div className="bg-[#FFC000] p-4 text-white flex items-center justify-between">
                <div className="flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  <div>
                    <h3 className="font-bold">COINMC Store</h3>
                    <p className="text-xs opacity-90">Support the server & get perks</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="bg-amber-400 hover:bg-amber-500 text-white border-none"
                  onClick={() => {
                    playButtonClickSound();
                    window.open('https://store.coinmc.fun', '_blank');
                  }}
                >
                  Click to Visit
                </Button>
              </div>
              
              {/* Store content preview - Matching the screenshot */}
              <div className="p-4">
                {/* Featured Items header */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-[#FFC000] flex items-center justify-center text-white">
                    <Crown size={20} />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-coin-900">Featured Items</p>
                    <p className="text-xs text-amber-700">Check out our best-selling items!</p>
                  </div>
                </div>
                
                {/* Store items preview */}
                <div className="bg-amber-50 rounded-lg p-4 mb-4 text-center">
                  <p className="text-amber-800 font-medium">Browse our collection of unique items</p>
                </div>
                
                {/* Button at the bottom */}
                <div className="text-center">
                  <Button 
                    className="w-full bg-[#FFC000] hover:bg-amber-500 text-white border-0"
                    onClick={() => {
                      playButtonClickSound();
                      window.open('https://store.coinmc.fun', '_blank');
                    }}
                  >
                    Browse All Items
                    <ShoppingCart size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
