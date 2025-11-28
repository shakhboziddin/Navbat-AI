import React from 'react';
import { ContentData } from '../types';
import { Mic, Stethoscope, Calendar, Users, Bell, BarChart2 } from 'lucide-react';

interface ProcessFlowProps {
  content: ContentData;
}

const iconMap: Record<string, React.ElementType> = {
  mic: Mic,
  stethoscope: Stethoscope,
  calendar: Calendar,
  users: Users,
  bell: Bell,
  "bar-chart": BarChart2,
};

const ProcessFlow: React.FC<ProcessFlowProps> = ({ content }) => {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900">{content.processFlow.title}</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200 z-0 rounded-full opacity-50"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {content.processFlow.steps.map((step, idx) => {
              const Icon = iconMap[step.icon] || Users;
              return (
                <div key={idx} className="group relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon Circle */}
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300 relative z-10">
                        <div className="w-full h-full rounded-full absolute top-0 left-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Icon size={32} className="text-blue-600 relative z-10" strokeWidth={1.5} />
                        
                        {/* Number Badge */}
                        <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center border-4 border-white shadow-md">
                            {idx + 1}
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed px-1">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;