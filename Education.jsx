import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-3 mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
          EDUCATION
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Building my foundation.
        </h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div key={idx} className="p-8 rounded-2xl bg-gray-900/60 border border-gray-800 flex items-start space-x-6">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0 hidden sm:block">
              <GraduationCap size={24} />
            </div>
            <div className="space-y-2">
              <span className="text-xs text-purple-400 font-semibold">{edu.period}</span>
              <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
              <p className="text-sm text-gray-300">{edu.institution}</p>
              {edu.university && <p className="text-xs text-gray-400">{edu.university}</p>}
              {edu.cgpa && (
                <p className="text-xs text-emerald-400 font-medium pt-1">
                  CGPA: {edu.cgpa}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
