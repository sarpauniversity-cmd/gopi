import { ArrowUp, Code2 } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 relative z-10 bg-brand-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center p-[1px]">
            <div className="w-full h-full bg-brand-black rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="font-space font-bold text-xl tracking-tight text-white">
            Dharani<span className="text-brand-blue">.</span>
          </span>
        </div>

        <p className="text-sm text-gray-500 font-medium text-center">
          © {new Date().getFullYear()} Dharani Govardhan. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-blue/50 hover:bg-brand-blue/10 transition-all hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>
    </footer>
  );
}
