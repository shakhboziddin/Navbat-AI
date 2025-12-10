
import React from 'react';
import { ContentData } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface WhyUsProps {
  content: ContentData['whyUs'];
}

const WhyUs: React.FC<WhyUsProps> = ({ content }) => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-purple-500/20 rounded-3xl transform rotate-3 blur-2xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
               alt="Medical Team" 
               className="relative rounded-3xl shadow-2xl z-10 border border-slate-100"
             />
             <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-slate-100 hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-bold text-slate-800">Tizim Faol</span>
                </div>
                <p className="text-slate-600 text-sm">"Navbat AI bizning klinikamiz samaradorligini 2 barobar oshirdi."</p>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-8 leading-tight">{content.title}</h2>
            <div className="space-y-8">
              {content.items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue">
                      <CheckCircle2 size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
