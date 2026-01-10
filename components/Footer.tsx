
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#1a1f3a] border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Eduastro. Making astronomy accessible to all.</p>
        <p className="mt-2">Follow us on social media for daily cosmic content!</p>
      </div>
    </footer>
  );
};

export default Footer;
