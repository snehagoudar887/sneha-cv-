import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award } from 'lucide-react';

export default function Learning() {
  const { learning } = portfolioData;

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-6">Courses and participation</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        {learning.map((item, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-gray-900/40 border border-gray-800/80 flex items-start space-x-4">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
              <Award size={18} />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">{item.title}</h4>
              <p className="text-xs text-gray-400 mt-0.5">{item.issuer}</p>
              <span className="text-xs text-purple-400 mt-2 block font-medium">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
