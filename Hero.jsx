import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, GraduationCap, Award, Calendar } from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex items-center">
      <div className="grid md:grid-cols-12 gap-12 items-center w-full">
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>Computer Engineering Student</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400">
              {personal.fullName}.
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
            I build useful digital solutions.
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
            {personal.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-purple-500/25"
            >
              <span>Explore My Projects</span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 font-medium hover:border-gray-500 transition-all"
            >
              <span>Connect With Me</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="md:col-span-5">
          <div className="relative rounded-2xl bg-gradient-to-b from-gray-800/80 to-gray-900/90 p-8 border border-gray-700/60 backdrop-blur-xl shadow-2xl">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold font-heading shadow-xl shadow-purple-500/30 mb-6">
              SG
            </div>

            <div className="text-center space-y-2 mb-6">
              <h3 className="text-xl font-bold text-white">{personal.fullName}</h3>
              <p className="text-xs text-cyan-400 font-medium">Computer Engineering · Class of {personal.graduationYear}</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-800 text-xs text-gray-300">
              <div className="flex justify-between items-center py-1">
                <span className="flex items-center text-gray-400"><Calendar size={14} className="mr-2 text-purple-400" /> Internship Year</span>
                <span className="font-semibold text-white">{personal.internshipYear}</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="flex items-center text-gray-400"><GraduationCap size={14} className="mr-2 text-cyan-400" /> Expected Graduation</span>
                <span className="font-semibold text-white">{personal.graduationYear}</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="flex items-center text-gray-400"><Award size={14} className="mr-2 text-purple-400" /> Academic CGPA</span>
                <span className="font-semibold text-emerald-400">{personal.cgpa}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
