import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const subtitleY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0]);
  const blurAmount = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const filter = useMotionTemplate`blur(${blurAmount}px)`;

  return (
    <section ref={ref} className="relative h-[110vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Frosted gradient overlay for readability (doesn't block the Spline) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />

      <motion.div style={{ opacity: fadeOut, filter }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1 style={{ y: titleY }} className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
          FrostByte Energy
        </motion.h1>
        <motion.p style={{ y: subtitleY }} className="mt-4 max-w-2xl text-lg sm:text-xl text-cyan-100/90">
          Ultra‑crisp. Zero crash. Powered by glacial focus.
        </motion.p>

        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-8 flex items-center gap-2 text-cyan-100/80">
          <ChevronDown className="w-6 h-6" />
          <span className="text-sm">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
