
import React from 'react';
import { ContentData } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  content: ContentData['testimonials'];
}

const Testimonials: React.FC<TestimonialsProps> = ({ content }) => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{content.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-slate-500 transition-colors">
              <Quote className="text-brand-blue mb-6" size={32} />
              <p className="text-lg text-slate-300 mb-8 italic leading-relaxed">
                {item.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-purple-500 rounded-full flex items-center justify-center font-bold text-white text-lg">
                    {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.author}</h4>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
