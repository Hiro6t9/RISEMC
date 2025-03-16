
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GameModes from '@/components/GameModes';
import Store from '@/components/Store';
import Vote from '@/components/Vote';
import Discord from '@/components/Discord';

const Index = () => {
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
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.querySelectorAll('.animate-reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 overflow-hidden">
      {/* Animated Logo that appears when someone visits the website */}
      <motion.div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-dark-900"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 2.5,
          ease: "easeInOut" 
        }}
        onAnimationComplete={() => {
          document.body.style.overflow = "auto";
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
              <span className="text-rise-500">RISE</span>
              <motion.span 
                className="text-dark-900 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                MC
              </motion.span>
            </motion.span>
          </motion.h1>
          <motion.div 
            className="h-1 w-0 bg-rise-500 mt-4"
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </motion.div>
      </motion.div>
      
      <Navbar />
      <Hero />
      <GameModes />
      <Store />
      <Vote />
      <Discord />
      
      {/* Footer */}
      <footer className="bg-dark-900 text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} RISEMC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
