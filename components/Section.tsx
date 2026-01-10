
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="py-20 sm:py-24">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>
      </div>
      <div className="mt-16">{children}</div>
    </section>
  );
};

export default Section;
