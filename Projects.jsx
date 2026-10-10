import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, AlertCircle } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-3 mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
          SELECTED WORK
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Projects built to solve problems.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Explore practical projects, application ideas, and technical work.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-gray-900/70 border border-gray-800 overflow-hidden hover:border-purple-500/40 transition-all flex flex-col justify-between"
          >
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="pt-2">
                <p className="text-xs font-semibold text-gray-400 mb-1">Key Problem Solved:</p>
                <p className="text-xs text-gray-300 italic">{project.problemSolved}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-gray-800 text-cyan-300 border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gray-950/50 border-t border-gray-800/60 flex items-center justify-between">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-medium text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={16} className="mr-2" /> View Repository
                </a>
              ) : (
                <span className="text-xs text-gray-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" /> Repo verification pending
                </span>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Live Demo <ExternalLink size={14} className="ml-1" />
                </a>
              ) : (
                <span className="text-xs text-gray-500">Demo link pending</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
