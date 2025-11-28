import React, { useState } from 'react';
import { ContentData, Language } from '../types';
import LanguageSwitcher from './LanguageSwitcher';
import { Activity, Menu, X } from 'lucide-react';

interface NavbarProps {
  content: ContentData;
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ content, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'problem', label: content.nav.problem },
    { id: 'process', label: content.nav.process },
    { id: 'team', label: content.nav.team },
    { id: 'why-us', label: content.nav.whyUs },
    { id: 'roadmap', label: content.nav.roadmap },
    { id: 'how-it-works', label: content.nav.how },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <Activity size={24} />
            </div>
            <span className="font-extrabold text-2xl text-slate-900 tracking-tight">NAVBAT AI</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
                {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                >
                    {item.label}
                </button>
                ))}
            </div>
            <div className="h-6 w-px bg-slate-200"></div>
            <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
          </div>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden flex items-center gap-4">
             <div className="scale-90 origin-right">
                <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
             </div>
             <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors border border-transparent hover:border-slate-200"
                aria-label="Toggle menu"
             >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl flex flex-col animate-fade-in-up">
            <div className="p-4 space-y-1">
                {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left font-semibold text-lg text-slate-700 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all"
                >
                    {item.label}
                </button>
                ))}
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;