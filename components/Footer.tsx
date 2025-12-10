import React from 'react';
import { Activity, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white">
                    <Activity size={20} />
                </div>
                <span className="font-bold text-xl text-brand-dark tracking-tight">Navbat AI</span>
            </div>

            <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
                <a href="#" className="hover:text-brand-blue transition-colors">Maxfiylik siyosati</a>
                <a href="#" className="hover:text-brand-blue transition-colors">Foydalanish shartlari</a>
                <a href="#" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                    <Mail size={16} />
                    info@navbat.uz
                </a>
            </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-50 text-center text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Navbat AI — Klinikalarni boshqarish uchun tizim
        </div>
      </div>
    </footer>
  );
};

export default Footer;