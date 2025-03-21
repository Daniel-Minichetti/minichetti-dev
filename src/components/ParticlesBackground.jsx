// ParticlesBackground.jsx
import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    console.log('Initializing particles background...');
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles.json', () => {
        console.log('particles.js config loaded');
      });
    } else {
      console.error('particlesJS is not defined. Make sure you installed particles.js via npm and imported it.');
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
        zIndex: -1, // Ensures the particles are behind your content
      }}
    />
  );
};

export default ParticlesBackground;
