
import React from 'react';

interface SimulationItemProps {
  title: string;
  description: string;
  index: number;
}

const SimulationItem: React.FC<SimulationItemProps> = ({ title, description, index }) => {
  return (
    <div className="group relative flex items-center gap-6 p-6 bg-white dark:bg-[#1a1f3a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-2" />
      
      {/* Index/Icon Circle */}
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-lg group-hover:scale-110 transition-transform duration-300">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-slate-600 dark:text-slate-400 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      </div>

      {/* Action Arrow */}
      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        <svg 
          className="w-6 h-6 text-indigo-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
};

export default SimulationItem;
