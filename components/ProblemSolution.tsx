import React from 'react';
import { ContentData } from '../types';
import { XCircle, CheckCircle, AlertOctagon, Zap } from 'lucide-react';

interface ProblemSolutionProps {
  content: ContentData;
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ content }) => {
  return (
    <section id="problem" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{content.problemSolution.title}</h2>
          <p className="text-slate-500 text-xl font-light">{content.problemSolution.problemDesc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Problem Card */}
          <div className="group rounded-[2rem] p-8 lg:p-10 bg-gradient-to-b from-red-50 to-white border border-red-100 shadow-xl shadow-red-100/50 hover:shadow-2xl hover:shadow-red-200/50 transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                <AlertOctagon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-red-700">{content.problemSolution.problemTitle}</h3>
            </div>
            
            <ul className="space-y-5">
                {content.problemSolution.problemPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 shrink-0 text-red-400 mt-0.5" />
                        <span className="text-slate-700 font-medium leading-relaxed">{point}</span>
                    </li>
                ))}
            </ul>
          </div>

          {/* Solution Card */}
          <div className="group rounded-[2rem] p-8 lg:p-10 bg-gradient-to-b from-teal-50 to-white border border-teal-100 shadow-xl shadow-teal-100/50 hover:shadow-2xl hover:shadow-teal-200/50 transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                <Zap size={28} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold text-teal-700">{content.problemSolution.solutionTitle}</h3>
            </div>
            
            <ul className="space-y-5">
              {content.problemSolution.solutionItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 shrink-0 text-teal-500 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
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