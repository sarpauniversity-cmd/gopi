import { motion } from 'framer-motion';
import { Terminal, Code, Cpu } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black font-space mb-6">
              Decoding the <span className="text-gradient">Future</span>.
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              I'm Dharani Govardhan, a 1st-year AIML student with an insatiable curiosity for intelligent systems and cutting-edge web technologies. While my academic roots are in Artificial Intelligence, my creative playground is the frontend world.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Having already built <strong className="text-white">6+ live, production-ready websites</strong>, I specialize in bridging the gap between highly functional backend logic and immersive, cinematic frontend experiences. I don't just write code; I craft digital ecosystems.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass border border-white/5">
                <Terminal className="text-brand-blue w-5 h-5" />
                <span className="font-medium text-sm">Full Stack Dev</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass border border-white/5">
                <Cpu className="text-brand-purple w-5 h-5" />
                <span className="font-medium text-sm">AIML Enthusiast</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass border border-white/5">
                <Code className="text-brand-orange w-5 h-5" />
                <span className="font-medium text-sm">Creative Coder</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-purple/20 rounded-full blur-[100px] -z-10" />
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-5xl font-black font-space text-transparent bg-clip-text bg-gradient-to-br from-brand-blue to-white mb-2">1st</h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Year AIML</p>
                </div>
                <div className="glass-card rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 bg-gradient-to-br from-brand-purple/10 to-transparent">
                  <h3 className="text-5xl font-black font-space text-white mb-2">6+</h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Live Projects</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="glass-card rounded-2xl p-8 border border-brand-blue/30 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-brand-blue/20 transition-colors duration-300" />
                  <h3 className="text-5xl font-black font-space text-white mb-2 relative z-10">100%</h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider relative z-10">Dedication</p>
                </div>
                <div className="glass-card rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-4xl font-black font-space text-transparent bg-clip-text bg-gradient-to-br from-brand-orange to-white mb-2">24/7</h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Learning</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
