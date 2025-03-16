
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Star, ArrowUpRight } from 'lucide-react';

interface StoreItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  category: string;
}

const storeItems: StoreItem[] = [
  {
    id: 'vip-rank',
    name: 'VIP Rank',
    description: 'Get exclusive perks, custom tags, and enhanced gameplay features.',
    price: 9.99,
    image: 'https://i.imgur.com/OXpbVQU.png',
    featured: true,
    category: 'ranks',
  },
  {
    id: 'mvp-rank',
    name: 'MVP Rank',
    description: 'All VIP perks plus special commands, particle effects, and more slots.',
    price: 19.99,
    image: 'https://i.imgur.com/KrHC2Pf.png',
    featured: true,
    category: 'ranks',
  },
  {
    id: 'legend-crate',
    name: 'Legend Crate Key',
    description: 'Unlock rare items, powerful gear, and exclusive cosmetics.',
    price: 4.99,
    image: 'https://i.imgur.com/mKVnGDA.png',
    category: 'crates',
  },
  {
    id: 'mystery-box',
    name: 'Mystery Box',
    description: 'Random selection of valuable items with a chance for legendary gear.',
    price: 2.99,
    image: 'https://i.imgur.com/CGVN8aF.png',
    category: 'items',
  },
];

const Store = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    itemRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      id="store" 
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-dark-950/50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Server <span className="gradient-text">Store</span>
          </h2>
          <p className="text-dark-600 dark:text-gray-300 max-w-2xl mx-auto">
            Support the server and enhance your gameplay with exclusive items, ranks, and perks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storeItems.map((item, index) => (
            <div
              key={item.id}
              ref={el => itemRefs.current[index] = el}
              className={`animate-reveal delayed-${index * 100} bg-white dark:bg-dark-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-dark-700 flex flex-col`}
            >
              {/* Featured badge */}
              {item.featured && (
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                  <Crown size={12} className="mr-1" />
                  BEST VALUE
                </div>
              )}
              
              {/* Item image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Category pill */}
                <span className="text-xs uppercase tracking-wider bg-gray-100 dark:bg-dark-700 text-dark-500 dark:text-gray-400 px-2 py-1 rounded-full inline-block mb-2 w-fit">
                  {item.category}
                </span>
                
                {/* Item details */}
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                
                <p className="text-dark-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                  {item.description}
                </p>
                
                {/* Price and button */}
                <div className="flex items-end justify-between mt-2">
                  <span className="text-xl font-bold text-rise-500">${item.price}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-rise-500 text-rise-500 hover:bg-rise-500 hover:text-white"
                  >
                    <span>Buy Now</span>
                    <ArrowUpRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-reveal">
          <Button 
            className="bg-white dark:bg-dark-800 text-rise-500 hover:bg-rise-500 hover:text-white border border-rise-200 dark:border-dark-700"
          >
            View All Store Items
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Store;
