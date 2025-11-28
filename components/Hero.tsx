import React from 'react';
import { ContentData } from '../types';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  content: ContentData;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-teal-400 opacity-10 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        <div className="text-center max-w-5xl mx-auto">
           {/* Badge */}
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AI-Powered Healthcare
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9] animate-fade-in-up">
            NAVBAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">AI</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-normal animate-fade-in-delayed">
            {content.hero.subtitle}
          </p>

          {/* Removed Buttons as requested */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 cursor-pointer" onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth'})}>
           <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors">
              <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
              <ChevronDown size={24} />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;