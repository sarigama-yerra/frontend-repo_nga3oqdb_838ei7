import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxLayer = ({ speed, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);
  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  );
};

const CanShape = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="w-full h-full rounded-[18px] bg-gradient-to-b from-slate-100 to-slate-300 shadow-[0_20px_60px_rgba(56,189,248,0.45)]">
      <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(115deg,rgba(34,211,238,0.25),transparent_35%),linear-gradient(245deg,rgba(59,130,246,0.2),transparent_45%)]" />
      <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-2 h-2/3 rounded-full bg-white/60 blur-[2px] opacity-70" />
    </div>
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[60%] h-2 rounded-t-xl bg-slate-200" />
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-2 rounded-b-xl bg-slate-400" />
  </div>
);

const SplashShape = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="w-full h-full rounded-full bg-cyan-400/40 blur-2xl" />
    <div className="absolute inset-6 rounded-full border border-cyan-200/40" />
  </div>
);

const ParallaxShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 sm:py-36">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_10%,#22d3ee_0%,transparent_30%),radial-gradient(circle_at_80%_30%,#38bdf8_0%,transparent_25%),radial-gradient(circle_at_50%_80%,#3b82f6_0%,transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-white text-3xl sm:text-5xl font-extrabold text-center mb-16">Feel the Layers</h2>

        <div className="relative h-[420px] sm:h-[520px]">
          <ParallaxLayer speed={-40}>
            <div className="absolute inset-x-0 -top-10 flex justify-center">
              <div className="w-[900px] h-[900px] rounded-full bg-cyan-500/20 blur-3xl" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={-20}>
            <div className="absolute inset-x-0 top-6 flex justify-center">
              <div className="w-[700px] h-[700px] rounded-full bg-blue-500/30 blur-3xl" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={10}>
            <div className="absolute inset-x-0 top-8 flex justify-center">
              <CanShape className="w-40 h-64 sm:w-56 sm:h-80" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={30}>
            <div className="absolute left-10 sm:left-24 top-24 rotate-[-12deg]">
              <CanShape className="w-20 h-32 sm:w-28 sm:h-40 opacity-80" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={50}>
            <div className="absolute right-10 sm:right-24 bottom-0 rotate-[15deg]">
              <SplashShape className="w-28 h-28 sm:w-40 sm:h-40 opacity-70" />
            </div>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
};

export default ParallaxShowcase;
