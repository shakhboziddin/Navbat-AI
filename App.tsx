
import React from 'react';
import { CONTENT } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import BookingDemo from './components/BookingDemo';
import DashboardDemo from './components/DashboardDemo';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  const content = CONTENT;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <Navbar navItems={content.nav} />
      <main className="flex-grow">
        <Hero hero={content.hero} />
        <Features features={content.features} />
        <DashboardDemo content={content.crmDemo} />
        <BookingDemo content={content.bookingDemo} />
        <WhyUs content={content.whyUs} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
