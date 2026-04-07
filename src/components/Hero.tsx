import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Code2, Cpu } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-30 mix-blend-screen"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M0,500 C200,300 300,700 500,500 C700,300 800,700 1000,500"
            fill="none"
            stroke="url(#purpleGlow)"
            strokeWidth="4"
          />
          <path
            d="M0,600 C250,400 350,800 600,600 C850,400 950,800 1000,600"
            fill="none"
            stroke="url(#blueGlow)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6 md:gap-8 max-w-2xl"
            style={{ opacity }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-purple/30 text-sm font-medium text-brand-violet w-fit shadow-[0_0_15px_rgba(124,58,237,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
              </span>
              Full Stack Developer · AIML Student
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-bold leading-[1.1] tracking-tighter text-white">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-purple to-brand-blue">
                Dharani Govardhan
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 font-sans leading-relaxed max-w-xl">
              I’m a first-year AIML student and full stack developer who builds modern,
              responsive, and real-world web applications with a focus on clean design,
              performance, and practical functionality.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-black rounded-full font-semibold overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all border border-white/20 hover:border-brand-purple/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right 3D Visual Scene */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full perspective-1000 hidden md:block"
            style={{ y: y1 }}
          >
            {/* Center Main Card */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateX: [5, 15, 5],
                rotateY: [-15, -5, -15],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-96 h-96 glass-dark rounded-2xl border border-brand-purple/30 p-6 flex flex-col justify-between shadow-[0_0_50px_rgba(124,58,237,0.2)] z-20 backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
                <Terminal className="text-brand-purple w-5 h-5" />
              </div>

              <div className="flex-1 py-6 font-mono text-sm text-gray-300 space-y-2">
                <p>
                  <span className="text-brand-purple">const</span>{" "}
                  <span className="text-brand-blue">dharani</span> = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-brand-orange">"Dharani Govardhan"</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-brand-orange">"Full Stack Developer"</span>,
                </p>
                <p className="pl-4">
                  focus: <span className="text-brand-orange">["Frontend", "Backend", "Web Apps"]</span>,
                </p>
                <p className="pl-4">
                  student: <span className="text-brand-purple">true</span>,
                </p>
                <p>{"}"};</p>
                <p className="mt-4">
                  <span className="text-brand-purple">await</span>{" "}
                  dharani.<span className="text-brand-blue">build</span>();
                </p>
              </div>
            </motion.div>

            {/* Floating Layer 1 */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-10 right-0 lg:right-10 w-32 lg:w-40 h-32 lg:h-40 glass rounded-xl border border-brand-blue/40 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)] backdrop-blur-xl z-10"
            >
              <Code2 className="w-12 h-12 lg:w-16 lg:h-16 text-brand-blue drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            </motion.div>

            {/* Floating Layer 2 */}
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-10 left-0 lg:left-10 w-28 lg:w-32 h-28 lg:h-32 glass rounded-full border border-brand-orange/40 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.3)] backdrop-blur-xl z-30"
            >
              <Cpu className="w-10 h-10 lg:w-12 lg:h-12 text-brand-orange drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
