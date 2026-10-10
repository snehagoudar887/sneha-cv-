import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Learning from './components/Learning';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Learning />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
