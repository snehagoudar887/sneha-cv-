import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f19]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/20">
            SG
          </div>
          <span className="font-heading text-lg font-semibold text-white tracking-wide">
            Sneha Goudar
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-gray-800 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-cyan-400 text-sm py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
