
import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const [theme, toggleTheme] = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#simulations', text: 'Simulations' },
    { href: '#notes', text: 'Notes' },
    { href: '#astronomy-for-all', text: 'For All' },
    { href: '#help-us', text: 'Help Us' },
    { href: '#about', text: 'About' },
  ];

  return (
    <header className="bg-white/70 dark:bg-[#1a1f3a]/70 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            ✨ Eduastro
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-medium">
                {link.text}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
          <div className="md:hidden flex items-center">
             <button
              onClick={toggleTheme}
              className="mr-4 px-3 py-2 text-xl rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 bg-slate-600 dark:bg-slate-300 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-slate-600 dark:bg-slate-300 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-slate-600 dark:bg-slate-300 transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white/95 dark:bg-[#1a1f3a]/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400">
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
