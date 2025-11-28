import React from 'react';
import { ContentData } from '../types';

interface RoadmapProps {
  content: ContentData;
}

const Roadmap: React.FC<RoadmapProps> = ({ content }) => {
  return (
    <section id="roadmap" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-20 text-center">{content.roadmap.title}</h2>
        
        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-500 to-teal-400 rounded-full opacity-30"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {content.roadmap.stages.map((stage, idx) => (
                <div key={idx} className="relative group">
                    {/* Dot on line */}
                    <div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-900 border-4 border-blue-500 z-10 group-hover:border-teal-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                    
                    <div className="pt-0 md:pt-24 text-center flex flex-col items-center">
                        <div className="md:hidden w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent mb-4 rounded-full"></div>
                        
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all hover:-translate-y-2 w-full">
                             <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3 block">{stage.phase}</span>
                            <h3 className="text-xl font-bold text-white mb-3">{stage.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{stage.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;