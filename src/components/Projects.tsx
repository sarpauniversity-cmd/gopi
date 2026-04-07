import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

const PROJECTS = [
  {
    title: 'Acade-Me',
    description: 'An academic platform enhancing learning experiences with seamless integration and performance.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: '#',
    github: '#',
    color: 'from-blue-600 to-cyan-400'
  },
  {
    title: 'Simats-Seat-Sync',
    description: 'A robust seating arrangement and synchronization system for large-scale university events.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Framer'],
    link: '#',
    github: '#',
    color: 'from-purple-600 to-pink-500'
  },
  {
    title: 'Expensa',
    description: 'A beautiful, intuitive personal finance and expense tracking application.',
    tags: ['React Native', 'Firebase', 'Redux', 'NativeWind'],
    link: '#',
    github: '#',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    title: 'Safethelock',
    description: 'High-security credential management system with end-to-end encryption.',
    tags: ['Vue.js', 'Rust', 'WebAssembly', 'Tailwind'],
    link: '#',
    github: '#',
    color: 'from-orange-500 to-yellow-400'
  },
  {
    title: 'Elvera',
    description: 'A premium e-commerce storefront with immersive 3D product viewing capabilities.',
    tags: ['Three.js', 'React', 'Shopify', 'GSAP'],
    link: '#',
    github: '#',
    color: 'from-rose-500 to-red-400'
  },
  {
    title: 'Go-Rail-India',
    description: 'A comprehensive railway tracking and ticketing portal with real-time updates.',
    tags: ['React', 'Express', 'Redis', 'Socket.io'],
    link: '#',
    github: '#',
    color: 'from-indigo-600 to-blue-500'
  },
  {
    title: 'Astra',
    description: 'An AI-powered personal assistant web interface for intelligent task automation.',
    tags: ['OpenAI API', 'Next.js', 'Tailwind', 'Vercel KV'],
    link: '#',
    github: '#',
    color: 'from-violet-600 to-purple-500'
  }
];

const TiltCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full rounded-3xl glass-card p-1 border border-white/10 overflow-hidden group perspective-1000 cursor-pointer"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, white, transparent)`
        }}
      />
      <div 
        className="relative h-full rounded-[1.4rem] bg-brand-black/50 backdrop-blur-3xl p-8 flex flex-col justify-between"
        style={{ transform: "translateZ(30px)" }}
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center p-[1px]`}>
              <div className="w-full h-full bg-brand-black rounded-xl" />
            </div>
            <div className="flex gap-3">
              <a href={project.github} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white hover:text-brand-blue" aria-label="Github">
                <FaGithub size={18} />
              </a>
              <a href={project.link} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white hover:text-brand-blue" aria-label="External Link">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold font-space text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-purple transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-brand-purple/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black font-space mb-6">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated collection of my live projects. From high-performance utility apps to immersive creative platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <TiltCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
