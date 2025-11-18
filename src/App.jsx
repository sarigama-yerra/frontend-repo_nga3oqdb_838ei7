import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ParallaxShowcase from './components/ParallaxShowcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <ParallaxShowcase />
      <CTA />
      <footer className="py-10 text-center text-sm text-cyan-100/60 bg-black/80">
        © {new Date().getFullYear()} FrostByte Energy · Stay icy ❄️
      </footer>
    </div>
  );
}

export default App;
