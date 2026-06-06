import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="preorder" className="relative z-20 bg-aura-brown py-28 md:py-40 px-6 md:px-12 overflow-hidden grain">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] glow-pedestal pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center relative"
      >
        <p className="eyebrow justify-center mb-8">
          <span className="w-8 h-[1px] bg-aura-cream/40" />
          Limited First Run
          <span className="w-8 h-[1px] bg-aura-cream/40" />
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-aura-cream mb-8 leading-[1.05] text-balance">
          Bring the café home.
        </h2>
        <p className="text-aura-cream/60 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
          Reserve your AURA today with a fully refundable deposit. First units ship spring 2026 —
          early reservations get founder pricing and a year of premium beans.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#preorder"
            className="group inline-flex items-center gap-3 matte-button px-10 py-5 rounded-full uppercase tracking-[0.15em] text-sm"
          >
            Pre-order — $1,290
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </a>
          <span className="text-aura-cream/45 text-sm font-light">Free shipping · 30-day returns</span>
        </div>
      </motion.div>
    </section>
  );
}
