import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Highlights } from './components/Highlights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center relative overflow-hidden">
        {/* Abstract shapes in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-blue/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-purple/20 rounded-full blur-[120px] mix-blend-screen" />

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center p-[2px] mb-8"
          >
            <div className="w-full h-full bg-brand-black rounded-2xl flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-transparent border-t-brand-blue border-r-brand-purple rounded-full"
              />
            </div>
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl font-space font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 uppercase"
          >
            Loading Experience
          </motion.h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-black min-h-screen text-white relative selection:bg-brand-blue/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Highlights />
        <Contact />
      </main>

      <Footer />
      
      {/* Custom Cursor Effect (Optional, simulated with fixed overlay if needed, but standard pointer is fine for now) */}
    </div>
  );
}

export default App;
