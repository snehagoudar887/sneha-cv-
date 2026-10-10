import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Smartphone, Database, Wrench, Layout } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category) => {
    if (category.includes('Programming')) return <Code size={20} className="text-purple-400" />;
    if (category.includes('Application')) return <Smartphone size={20} className="text-cyan-400" />;
    if (category.includes('Database')) return <Database size={20} className="text-purple-400" />;
    if (category.includes('Developer')) return <Wrench size={20} className="text-cyan-400" />;
    return <Layout size={20} className="text-purple-400" />;
  };

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-3 mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
          TOOLS & TECHNOLOGIES
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Skills I'm building on.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          These skills are part of my current learning journey. I continue to develop them through coursework, practice, and projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 space-y-4">
            <div className="flex items-center space-x-3">
              {getCategoryIcon(group.category)}
              <h3 className="text-lg font-semibold text-white">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {group.items.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 rounded-lg bg-gray-800/80 border border-gray-700/60 text-gray-200 text-xs font-medium hover:border-purple-500/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
