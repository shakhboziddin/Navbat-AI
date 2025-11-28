import React from 'react';
import { ContentData } from '../types';
import { X, Check, AlertCircle, Zap } from 'lucide-react';

interface ProblemSolutionProps {
  content: ContentData;
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ content }) => {
  return (
    <section id="problem" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {content.problemSolution.title}
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {content.problemSolution.problemDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Problem Side */}
            <div className="bg-red-50/60 rounded-[2rem] p-8 lg:p-10 border border-red-100 relative overflow-hidden group hover:bg-red-50 transition-colors duration-300 flex flex-col">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-100/50 rounded-bl-full -mr-10 -mt-10 opacity-60 pointer-events-none"></div>
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-14 h-14 bg-white text-red-600 rounded-2xl flex items-center justify-center shadow-sm border border-red-100">
                        <AlertCircle size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-red-900">
                        {content.problemSolution.problemTitle}
                    </h3>
                </div>

                <ul className="space-y-4 relative z-10 flex-grow">
                    {content.problemSolution.problemPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3.5 text-red-900/80">
                            <div className="mt-1 shrink-0">
                                <X className="w-5 h-5 text-red-500" strokeWidth={2.5} />
                            </div>
                            <span className="font-medium leading-relaxed">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Solution Side */}
            <div className="bg-teal-50/60 rounded-[2rem] p-8 lg:p-10 border border-teal-100 relative overflow-hidden group hover:bg-teal-50 transition-colors duration-300 shadow-xl shadow-teal-900/5 flex flex-col">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100/50 rounded-bl-full -mr-10 -mt-10 opacity-60 pointer-events-none"></div>
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-400 text-white rounded-2xl flex items-center justify-center shadow-md shadow-teal-200">
                        <Zap size={28} fill="currentColor" />
                    </div>
                    <h3 className="text-2xl font-bold text-teal-900">
                        {content.problemSolution.solutionTitle}
                    </h3>
                </div>

                <ul className="space-y-4 relative z-10 flex-grow">
                    {content.problemSolution.solutionItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-3.5 text-teal-900/80">
                            <div className="w-6 h-6 shrink-0 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                                <Check className="w-3.5 h-3.5 text-teal-700" strokeWidth={3} />
                            </div>
                            <span className="font-medium leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;