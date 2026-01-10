
import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-[#252b48] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 group">
        <h3 className="text-xl font-bold text-indigo-500 dark:text-indigo-400 mb-3">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
