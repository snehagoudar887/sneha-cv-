import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-800/80 px-6 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-400">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold">
          SG
        </div>
        <span className="text-gray-300 font-medium">{personal.fullName}</span>
      </div>

      <p className="italic text-gray-500">
        Designed with curiosity. Built to keep learning.
      </p>

      <p>© {currentYear} {personal.fullName}. All rights reserved.</p>
    </footer>
  );
}
