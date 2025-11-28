import React from 'react';
import { ContentData } from '../types';
import { Database, Server, Smartphone, Cpu, Mic, GitBranch } from 'lucide-react';

interface MethodologyProps {
  content: ContentData;
}

const icons = [Smartphone, Server, Database, Cpu, Mic, GitBranch];

const Methodology: React.FC<MethodologyProps> = ({ content }) => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">{content.methodology.title}</h2>
        
        <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {content.methodology.techItems.map((item, idx) => {
                    const Icon = icons[idx] || Cpu;
                    return (
                        <div key={idx} className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-4 bg-white text-blue-600 rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <Icon size={32} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">{item.label}</p>
                                    <p className="text-xl font-bold text-slate-800">{item.value}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;