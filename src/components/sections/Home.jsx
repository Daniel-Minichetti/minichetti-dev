import React, { useEffect } from 'react';
import 'particles.js'; // This imports the particles.js library (it attaches particlesJS to the window)
import { RevealOnScroll } from '../RevealOnScroll';

const ParticlesBackground = () => {
  useEffect(() => {
    // Ensure the particlesJS function exists and then load your configuration file
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles.json', () => {
        console.log('particles.js config loaded');
      });
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensure it appears behind your content
      }}
    />
  );
};

export const Home = () => {
  return (
    <>
      <ParticlesBackground />
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi, I'm Daniel Minichetti
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I’m a recent Graduate in Computer Science looking to get into software development. Always Building and Learning.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
