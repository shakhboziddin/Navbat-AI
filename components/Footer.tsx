import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-white text-xl font-bold mb-2">NAVBAT AI</h3>
        <p className="mb-6 text-slate-500">Smart Queue & Appointment System for Uzbekistan</p>
        <p className="text-sm">Built for Hackathon Stage 1</p>
        <div className="flex justify-center gap-4 mt-6 text-xs opacity-50">
            <span>Next.js</span> • <span>React</span> • <span>Tailwind</span> • <span>TypeScript</span>
        </div>
        <p className="text-xs mt-8 opacity-30">&copy; {new Date().getFullYear()} Team NAVBAT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;