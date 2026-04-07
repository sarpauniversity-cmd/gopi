import { motion } from 'framer-motion';
import { Award, Zap, Code2, MonitorPlay } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Award,
    title: 'Top Performer',
    description: 'Consistently ranked among the top coding talents in local college hackathons and academic showcases.'
  },
  {
    icon: MonitorPlay,
    title: '6+ Live Apps',
    description: 'Built and deployed multiple production-ready web applications serving real-world users.'
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Mastered modern full-stack web development and AI fundamentals within my very first year of study.'
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Obsessed with writing scalable, maintainable, and highly optimized code structures.'
  }
];

export function Highlights() {
  return (
    <section id="highlights" className="py-32 relative z-10 bg-brand-navy/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black font-space mb-6">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">Highlights</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What sets me apart as a developer and a student.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-white/5 flex flex-col items-start gap-6 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 flex items-center justify-center border border-white/10">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 font-space">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
