
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Card from './components/Card';
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {simulations.map((item) => (
                <Card key={item.title} title={item.title} description={item.description} />
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
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
