import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-3 mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
          CERTIFICATES & ACTIVITIES
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Proof of continuous learning.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-white">{cert.title}</h3>
              <p className="text-xs text-gray-400">{cert.issuer}</p>
            </div>

            <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs">
              <span className="text-gray-500">{cert.date}</span>
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center"
                >
                  View <ExternalLink size={12} className="ml-1" />
                </a>
              ) : (
                <span className="text-gray-500 italic">{cert.verificationStatus}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
