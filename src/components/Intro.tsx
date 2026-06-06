import { motion } from 'framer-motion';

export function Intro() {
  return (
    <section className="relative z-20 bg-aura-brown py-32 md:py-44 px-6 md:px-12 overflow-hidden grain">
      {/* soft warm light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] glow-pedestal pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="eyebrow justify-center mb-10"
        >
          <span className="w-8 h-[1px] bg-aura-cream/40" />
          Meet AURA
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-aura-cream/90 font-serif text-balance"
        >
          A coffee machine that grinds, doses, tamps and pulls a true
          <span className="text-aura-cream italic"> 19-bar espresso</span> — then learns exactly how you like it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 text-aura-cream/55 max-w-2xl mx-auto text-lg font-light leading-relaxed"
        >
          No pods. No guesswork. Just whole beans, precision engineering, and a companion app
          that turns your kitchen counter into a specialty coffee bar.
        </motion.p>
      </div>
    </section>
  );
}
