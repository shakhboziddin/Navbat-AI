import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
      <Globe className="w-4 h-4 text-slate-600" />
      <div className="flex gap-1 text-sm font-medium">
        {(['uz', 'ru', 'en'] as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => onLanguageChange(lang)}
            className={`px-2 py-0.5 rounded transition-colors ${
              currentLang === lang
                ? 'bg-blue-600 text-white'
                : 'text-slate-500 hover:text-blue-600 hover:bg-slate-100'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;