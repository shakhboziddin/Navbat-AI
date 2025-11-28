import React from 'react';
import { ContentData } from '../types';
import { Github, Linkedin } from 'lucide-react';

interface TeamProps {
  content: ContentData;
}

const Team: React.FC<TeamProps> = ({ content }) => {
  // Since there is only one member now, we can access the first one.
  const member = content.team.members[0];

  return (
    <section id="team" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
          {content.team.title}
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-2xl hover:shadow-blue-500/10 group">
            
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-5xl font-bold text-white shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-500 ring-4 ring-slate-800">
                    {member.name.charAt(0)}
                </div>

                <div className="flex-grow">
                    <h3 className="text-3xl font-bold mb-2 text-white">{member.name}</h3>
                    <p className="text-blue-400 font-medium text-lg mb-6 uppercase tracking-wide">{member.role}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
                        {member.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="px-3 py-1.5 bg-slate-700/60 text-blue-100 text-sm rounded-lg border border-slate-600/50 hover:bg-slate-700 transition-colors">
                            {skill}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;