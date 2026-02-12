
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Card from './components/Card';
import SimulationItem from './components/SimulationItem';
import About from './components/About';
import Footer from './components/Footer';
import { simulations, notes, astronomyForAll } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0e27] text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Section
            id="simulations"
            title="🔭 Simulations & Tools"
            subtitle="Interactive astronomy simulations and educational tools"
          >
            <div className="max-w-4xl mx-auto flex flex-col gap-4">
              {simulations.map((item, index) => (
                <SimulationItem 
                  key={item.title} 
                  title={item.title} 
                  description={item.description} 
                  index={index}
                />
              ))}
            </div>
          </Section>

          <Section
            id="notes"
            title="📝 Educational Notes"
            subtitle="A collection of astronomical infographics and visual summaries"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {notes.map((item) => (
                <Card key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </Section>

          <Section
            id="astronomy-for-all"
            title="🌍 Astronomy for All"
            subtitle="Connecting with astronomy outreach projects worldwide"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {astronomyForAll.map((item) => (
                <Card key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </Section>

          <Section
            id="help-us"
            title="❤️ Help Us"
            subtitle="Support Eduastro and help us continue making the universe accessible to everyone"
          >
            <div className="max-w-2xl mx-auto bg-white dark:bg-[#252b48] p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl text-center">
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Your support allows us to maintain our website, develop new interactive simulations, 
                and bring astronomy to communities worldwide. Every contribution helps us ignite 
                curiosity about the cosmos and keep our educational resources free for all.
              </p>
              <button className="px-10 py-4 bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/30">
                Donate Now
              </button>
            </div>
          </Section>
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
