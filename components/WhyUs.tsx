import React from 'react';
import { ContentData } from '../types';
import { ShieldCheck, BrainCircuit, Layout, Heart, Check } from 'lucide-react';

interface WhyUsProps {
  content: ContentData;
}

const icons = [ShieldCheck, BrainCircuit, Layout, Heart, Check];

const WhyUs: React.FC<WhyUsProps> = ({ content }) => {
  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">{content.whyUs.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {content.whyUs.points.map((point, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                <div key={idx} className={`flex items-start gap-4 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${idx === content.whyUs.points.length - 1 ? 'md:col-span-2 bg-blue-50 border-blue-100' : 'bg-slate-50 border-slate-100 hover:bg-white hover:shadow-lg'}`}>
                    <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600 shrink-0 border border-slate-100">
                        <Icon size={24} />
                    </div>
                    <div>
                        <p className="text-lg text-slate-700 font-medium leading-snug pt-1">{point}</p>
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

export default WhyUs;