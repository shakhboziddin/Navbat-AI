import React from 'react';
import { ContentData } from '../types';
import { ArrowRight, PlayCircle } from 'lucide-react';

interface HeroProps {
  content: ContentData;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-teal-400 opacity-10 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        <div className="text-center max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Title */}
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black text-slate-900 tracking-tighter mb-8 leading-[0.9] animate-fade-in-up mt-10">
            NAVBAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">AI</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-3xl text-slate-500 mb-12 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in-delayed">
            {content.hero.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up-delayed opacity-0" style={{ animationFillMode: 'forwards' }}>
            <button 
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth'})}
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 group transform active:scale-95"
            >
              {content.hero.cta}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth'})}
              className="px-8 py-4 rounded-full bg-white text-slate-700 font-bold text-lg border border-slate-200 hover:border-blue-200 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md flex items-center gap-2 transform active:scale-95"
            >
              {content.nav.problem}
              <PlayCircle size={20} className="text-slate-400" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;