import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="p-10 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-purple-950/40 border border-gray-800 text-center space-y-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
          GET IN TOUCH
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          Let's connect and keep learning.
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
          I'm open to connecting about internships, entry-level opportunities, projects, and learning from people in technology.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
          >
            <Mail size={18} />
            <span>Email Me</span>
            <ArrowUpRight size={16} />
          </a>

          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors border border-gray-700"
            >
              <Github size={18} />
              <span>GitHub Profile</span>
              <ArrowUpRight size={16} />
            </a>
          )}

          {personal.linkedin ? (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors border border-gray-700"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gray-900 text-gray-500 border border-gray-800 text-sm">
              LinkedIn to be confirmed
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
