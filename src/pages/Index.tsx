
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GameModes from '@/components/GameModes';
import Discord from '@/components/Discord';
import Store from '@/components/Store';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  
  useEffect(() => {
    // Enable smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Animation reveal logic for elements with animate-reveal class
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-reveal').forEach(el => {
      observer.observe(el);
    });
    
    // Hide splash screen after animation completes
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3800); // Slightly longer for new animation
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.querySelectorAll('.animate-reveal').forEach(el => {
        observer.unobserve(el);
      });
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className="min-h-screen text-coin-900 overflow-hidden">
      {/* Minecraft-themed animated intro */}
      {showSplash && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-creamy-200 to-creamy-100"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 3.0,
            ease: "easeInOut" 
          }}
          onAnimationComplete={() => {
            document.body.style.overflow = "auto";
            setShowSplash(false);
          }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "url('https://i.imgur.com/W4M5TiD.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <motion.div
            className="flex items-center justify-center flex-col relative z-10"
          >
            {/* Minecraft dirt block that appears first */}
            <motion.div
              className="absolute"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1 }}
              transition={{ duration: 0.7, ease: "backOut" }}
            >
              <img 
                src="https://i.imgur.com/VY6doQP.png" 
                alt="Minecraft Block" 
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </motion.div>
            
            {/* Logo that appears after block animation */}
            <motion.div
              className="relative mt-40 md:mt-48"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.h1 
                className="text-7xl md:text-9xl font-bold font-minecraft"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <motion.span 
                  className="inline-block"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coin-500 to-yellow-600">COIN</span>
                  <motion.span 
                    className="text-coin-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  >
                    MC
                  </motion.span>
                </motion.span>
              </motion.h1>
              
              {/* Minecraft pickaxe mining animation */}
              <motion.div 
                className="absolute -right-20 top-1/2 transform -translate-y-1/2"
                initial={{ rotate: -45, x: 100, opacity: 0 }}
                animate={{ 
                  rotate: [-45, 0, -45], 
                  x: [100, 0, 100],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  delay: 1.7,
                  duration: 1.2,
                  times: [0, 0.5, 1],
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="https://i.imgur.com/dRyXQOF.png" 
                  alt="Minecraft Pickaxe" 
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </motion.div>
              
              <motion.div 
                className="h-1 bg-gradient-to-r from-coin-500 to-yellow-600 mt-4"
                initial={{ width: 0 }}
                animate={{ width: "240px" }}
                transition={{ delay: 2.0, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      
      <Navbar />
      <Hero />
      <GameModes />
      <Store />
      <Discord />
      
      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-creamy-100 py-6 text-center border-t border-coin-100">
        <div className="container mx-auto px-4">
          <p className="text-sm text-coin-700">
            © {new Date().getFullYear()} COINMC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
