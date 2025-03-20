
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
    }, 3300); // Match this with the complete animation duration
    
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
      {/* Animated Logo that appears when someone visits the website */}
      {showSplash && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-creamy-200 to-creamy-100"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 2.5,
            ease: "easeInOut" 
          }}
          onAnimationComplete={() => {
            document.body.style.overflow = "auto";
            setShowSplash(false);
          }}
        >
          <motion.div
            className="flex items-center justify-center flex-col"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-bold font-minecraft"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coin-500 to-yellow-600">COIN</span>
                <motion.span 
                  className="text-coin-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  MC
                </motion.span>
              </motion.span>
            </motion.h1>
            <motion.div 
              className="h-1 w-0 bg-gradient-to-r from-coin-500 to-yellow-600 mt-4"
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
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
