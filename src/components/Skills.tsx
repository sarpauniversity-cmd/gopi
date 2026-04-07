import { motion } from 'framer-motion';

const SKILLS = [
  { category: 'Frontend Ecosystem', items: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'] },
  { category: 'Backend Architectures', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
  { category: 'AI & Machine Learning', items: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Data Visualization', 'NLP Basics'] },
  { category: 'Tools & DevOps', items: ['Git', 'Docker', 'Vercel', 'AWS Basics', 'Figma', 'Linux'] }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black font-space mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies I use to build scalable, intelligent, and visually stunning applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-bold font-space text-white mb-6 relative z-10">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skillGroup.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-brand-blue/10 hover:border-brand-blue/30 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
