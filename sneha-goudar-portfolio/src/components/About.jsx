import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { User, Compass } from 'lucide-react';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-3 mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
          A LITTLE ABOUT ME
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Curious mind. Practical builder.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          A short introduction to my academic background, interests, and the kind of work I enjoy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-gray-700 transition-all space-y-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <User size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">Who I am</h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            {about.whoIAm}
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-gray-700 transition-all space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Compass size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">What I'm exploring</h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            {about.whatExploring}
          </p>
        </div>
      </div>
    </section>
  );
}
