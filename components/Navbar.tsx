import React, { useState } from 'react';
import { NavItem } from '../types';
import { Activity, Menu, X } from 'lucide-react';

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    // In this demo, "Login" takes you to the dashboard simulation
    scrollToSection('dashboard');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Activity size={20} />
            </div>
            <span className="font-bold text-xl text-brand-dark tracking-tight">Navbat AI</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
                {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
                >
                    {item.label}
                </button>
                ))}
            </div>
            <button 
              onClick={handleLogin}
              className="px-5 py-2.5 rounded-xl bg-brand-dark text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
            >
              Kirish
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center">
             <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
             >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl flex flex-col p-4 animate-fade-in-up">
            {navItems.map((item) => (
            <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left font-medium text-slate-700 py-3 px-4 rounded-lg hover:bg-slate-50 hover:text-brand-blue"
            >
                {item.label}
            </button>
            ))}
             <button 
                onClick={handleLogin}
                className="mt-4 w-full bg-brand-dark text-white px-4 py-3 rounded-lg font-medium shadow-md"
            >
              Tizimga kirish
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;