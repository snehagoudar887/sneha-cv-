import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, AlertTriangle } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-3 mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
          EXPERIENCE & LEARNING
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Learning beyond the classroom.
        </h2>
      </div>

      <div className="space-y-6">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-gray-900/60 border border-gray-800 relative space-y-4"
          >
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <span className="text-xs text-purple-400 font-semibold uppercase">{item.period}</span>
                <h3 className="text-xl font-bold text-white mt-1">{item.position}</h3>
                <p className="text-sm font-medium text-gray-300">{item.company}</p>
              </div>
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <Briefcase size={20} />
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>

            {item.verificationNotice && (
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs flex items-center space-x-2">
                <AlertTriangle size={16} className="shrink-0" />
                <span>{item.verificationNotice}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
