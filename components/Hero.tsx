import React from 'react';
import { ContentData } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  content: ContentData;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title with Gradient */}
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 tracking-tight mb-6 animate-fade-in-up">
            {content.hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-3xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in-delayed">
            {content.hero.subtitle}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slide-up-delayed">
            <button 
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth'})}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-600/30 hover:-translate-y-1"
            >
              {content.hero.cta}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
               onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth'})}
               className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md"
            >
              {content.nav.problem}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;