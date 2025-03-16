
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Package, Crown, ExternalLink, Tag, CreditCard } from 'lucide-react';

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
      className="py-24 bg-gradient-to-b from-rise-950 to-dark-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="w-full lg:w-1/2" ref={contentRef}>
            <div className="animate-reveal">
              <div className="inline-flex items-center rounded-full px-3 py-1 mb-6 bg-rise-900/30 border border-rise-800/30">
                <span className="text-xs font-medium text-rise-300">
                  Support the Server
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Visit our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rise-500 to-red-600">Store</span>
              </h2>
              
              <p className="text-gray-300 mb-8 max-w-lg">
                Support the server and enhance your gameplay experience with exclusive items and perks. Our store offers a variety of options to make your time on RiseMC even more enjoyable.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {storeFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`animate-reveal delayed-${index * 100} flex items-start`}
                  >
                    <div className="mt-1 mr-3 p-2 rounded-md bg-rise-900/50 text-rise-400">
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
                className="bg-gradient-to-r from-rise-500 to-red-600 hover:from-rise-600 hover:to-red-700 text-white shadow-md"
                onClick={() => window.open('https://store.risemc.fun', '_blank')}
              >
                Visit Store
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Store preview */}
          <div className="w-full lg:w-1/2 animate-reveal">
            <div className="bg-dark-800 rounded-2xl shadow-xl overflow-hidden border border-dark-700">
              {/* Store header */}
              <div className="bg-gradient-to-r from-rise-500 to-red-600 p-4 text-white flex items-center justify-between">
                <div className="flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  <div>
                    <h3 className="font-bold">RISEMC Store</h3>
                    <p className="text-xs opacity-80">Support the server & get perks</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="bg-rise-600/60 hover:bg-rise-700 text-white text-xs"
                  onClick={() => window.open('https://store.risemc.fun', '_blank')}
                >
                  Click to Visit
                </Button>
              </div>
              
              {/* Store content preview */}
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gradient-to-r from-rise-500 to-red-600 flex items-center justify-center text-white">
                    <Crown size={20} />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-white">Featured Items</p>
                    <p className="text-xs text-gray-400">Check out our best-selling items!</p>
                  </div>
                </div>
                
                {/* Store items preview */}
                <div className="bg-dark-900 rounded-lg p-4 mb-6">
                  <img 
                    src="https://i.imgur.com/vKSkM3L.jpg" 
                    alt="Store Items" 
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  
                  <div className="text-center text-sm text-gray-300 font-medium mt-2">
                    Browse our collection of unique items
                  </div>
                </div>
                
                <div className="text-center">
                  <Button 
                    className="w-full bg-gradient-to-r from-rise-500 to-red-600 hover:from-rise-600 hover:to-red-700 text-white shadow-md"
                    onClick={() => window.open('https://store.risemc.fun', '_blank')}
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
