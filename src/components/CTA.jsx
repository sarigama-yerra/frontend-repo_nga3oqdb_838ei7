import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-black py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.25),transparent_40%)]" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-white text-3xl sm:text-4xl font-bold">
          Ready to unlock glacial focus?
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-cyan-100/90 mt-3">
          FrostByte Energy — crisp taste, clean energy, crafted for creators and gamers.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8">
          <a href="#" className="inline-block px-7 py-3 rounded-xl bg-cyan-500 text-black font-semibold shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] transition-shadow">
            Find Your Flavor
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
