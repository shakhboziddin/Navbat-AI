import React, { useState } from 'react';
import { CONTENT } from './constants';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ProcessFlow from './components/ProcessFlow';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Methodology from './components/Methodology';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('uz');
  const content = CONTENT[lang];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar content={content} lang={lang} setLang={setLang} />
      <main className="flex-grow">
        <Hero content={content} />
        <ProblemSolution content={content} />
        <ProcessFlow content={content} />
        <WhyUs content={content} />
        <Team content={content} />
        <Roadmap content={content} />
        <Methodology content={content} />
      </main>
      <Footer />
    </div>
  );
};

export default App;