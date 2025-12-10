
import React from 'react';
import { ContentData } from '../types';
import { ArrowRight, Activity, Database } from 'lucide-react';
import { AuroraBackground } from './ui/aurora-background';

interface HeroProps {
  hero: ContentData['hero'];
}

const Hero: React.FC<HeroProps> = ({ hero }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AuroraBackground className="h-auto min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm text-brand-blue text-sm font-bold mb-8 border border-blue-100 animate-fade-in shadow-sm">
          <Database size={16} />
          Elektron Tibbiyot Tizimi
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1] animate-fade-in-up max-w-5xl mx-auto">
          {hero.title}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-100">
          {hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
          <button 
            onClick={() => scrollTo('crm-demo')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-blue text-white font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 text-lg"
          >
            {hero.ctaPrimary}
            <ArrowRight size={20} />
          </button>
          
          <button 
            onClick={() => scrollTo('booking-demo')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/50 backdrop-blur-md text-slate-900 font-bold border border-slate-200 hover:bg-white hover:border-slate-300 transition-all flex items-center justify-center gap-2 text-lg shadow-sm"
          >
            {hero.ctaSecondary}
          </button>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
