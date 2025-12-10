
import React from 'react';
import { Feature } from '../types';
import { Database, Monitor, Smartphone, Bell, Shield } from 'lucide-react';

interface FeaturesProps {
  features: {
    title: string;
    subtitle: string;
    items: Feature[];
  };
}

const iconMap: any = {
  database: Database,
  monitor: Monitor,
  smartphone: Smartphone,
  bell: Bell,
};

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{features.title}</h2>
          <p className="text-slate-500 text-lg">{features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.items.map((item, idx) => {
            const Icon = iconMap[item.icon] || Shield;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
