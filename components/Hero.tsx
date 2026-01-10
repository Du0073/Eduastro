
import React from 'react';
import { TiktokIcon } from './icons/TiktokIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { YoutubeIcon } from './icons/YoutubeIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative text-center py-24 sm:py-32 lg:py-40 bg-white dark:bg-[#0a0e27] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.1)_0%,_rgba(99,102,241,0)_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Welcome to Eduastro
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-400">
                Exploring the cosmos through education, computation, and outreach. Join us on a journey to make astronomy accessible to everyone.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 font-semibold rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-white transition-colors duration-300">
                    <TiktokIcon className="w-5 h-5" />
                    TikTok
                </a>
                <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 font-semibold rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-white transition-colors duration-300">
                    <InstagramIcon className="w-5 h-5" />
                    Instagram
                </a>
                <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 font-semibold rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-white transition-colors duration-300 relative">
                    <YoutubeIcon className="w-5 h-5" />
                    YouTube
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-bold text-slate-800 bg-amber-400 rounded-full">SOON</span>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
