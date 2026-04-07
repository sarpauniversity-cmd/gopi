import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useRef } from 'react';

const SOCIAL_LINKS = [
  { icon: FaGithub, href: 'https://github.com/dharanigovardhan' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/dharanigovardhan' },
  { icon: FaTwitter, href: '#' },
  { icon: Mail, href: 'mailto:contact@example.com' },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/30 rounded-full blur-[120px] mix-blend-screen animate-blob"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-2000"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[200px] mix-blend-screen animate-blob animation-delay-4000" />
        
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-blue"></span>
          </span>
          <span className="text-sm font-medium tracking-wide text-gray-300">1st Year AIML Student & Full Stack Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 font-space"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange text-glow">Future-Ready</span>
          <br className="hidden md:block" /> Digital Experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          Hi, I'm <strong className="text-white">Dharani Govardhan</strong>. I craft world-class, premium web applications merging deep technical architecture with cinematic 3D design aesthetics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-brand-blue/20" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 rounded-full glass border border-white/10 hover:bg-white/5 transition-all font-medium text-gray-300 flex items-center gap-2 hover:border-brand-purple/50"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center gap-6 mt-16"
        >
          {SOCIAL_LINKS.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-blue/50 hover:bg-brand-blue/10 transition-all hover:-translate-y-1"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-brand-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
