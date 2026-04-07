import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black font-space mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to build something extraordinary? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-3xl font-bold font-space text-white mb-8">Reach Out directly</h3>
              <div className="space-y-6">
                <a href="mailto:hello@dharanigovardhan.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Email</p>
                    <p className="text-white font-medium group-hover:text-brand-blue transition-colors">hello@dharanigovardhan.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center text-gray-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Location</p>
                    <p className="text-white font-medium">India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 border border-white/5 relative overflow-hidden mt-auto">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-[50px]" />
              <p className="text-lg text-white font-medium italic relative z-10">
                "Code is poetry. Architecture is art."
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col gap-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                {submitted ? 'Message Sent!' : 'Send Message'}
                {!submitted && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
