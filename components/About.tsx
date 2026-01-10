
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-100 dark:bg-[#1a1f3a] py-20 sm:py-24 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">About Eduastro</h2>
        <div className="mt-8 space-y-6 text-lg text-slate-600 dark:text-slate-400">
            <p>
                Eduastro is dedicated to making astronomy education accessible, engaging, and inspiring for everyone. Through interactive simulations, computational tools, and global connections, we aim to ignite curiosity about the universe.
            </p>
            <p>
                Our mission is to bridge the gap between professional astronomy and public understanding, fostering a community where everyone can explore the wonders of the cosmos.
            </p>
            <p className="italic">
                More details coming soon...
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;
