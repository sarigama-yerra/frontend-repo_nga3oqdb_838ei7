import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bolt, Droplets, Brain } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, progress }) => {
  const y = useTransform(progress, [0, 1], ['20%', '-10%']);
  const opacity = useTransform(progress, [0, 0.3, 1], [0, 1, 1]);
  return (
    <motion.div style={{ y, opacity }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300"><Icon className="w-6 h-6"/></div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-cyan-100/80">{desc}</p>
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-gradient-to-b from-black to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2 style={{ opacity: scrollYProgress }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-14">
          Cold‑forged Performance
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard icon={Bolt} title="Instant Surge" desc="200 mg caffeine balanced with L‑Theanine for smooth, jitter‑free lift." progress={scrollYProgress} />
          <FeatureCard icon={Droplets} title="Ultra Crisp" desc="Icy berry profile crafted to stay refreshing session after session." progress={scrollYProgress} />
          <FeatureCard icon={Brain} title="Glacial Focus" desc="Nootropic blend keeps attention razor‑sharp without the crash." progress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
};

export default Features;
