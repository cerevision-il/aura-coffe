import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const formulas = [
  {
    id: 'zen',
    name: 'Zen Mode',
    desc: 'An organic L-Theanine and Ashwagandha infusion designed to naturally lower cortisol and invite a state of calm clarity.',
    benefits: ['Stress Reduction', 'Smooth Focus', 'No Jitters']
  },
  {
    id: 'alpha',
    name: 'Deep Work Alpha',
    desc: 'Premium Lion\'s Mane mushroom extract combined with precise caffeine dosing for hours of unbroken, grounded concentration.',
    benefits: ['Neuro-genesis', 'Sustained Energy', 'Cognitive Drive']
  },
  {
    id: 'boost',
    name: 'Neural Boost',
    desc: 'A robust blend of Rhodiola Rosea and Cordyceps to physically and mentally energize you naturally.',
    benefits: ['Peak Performance', 'Oxygen Utilization', 'Rapid Alertness']
  }
];

export function FormulaShowcase() {
  const [active, setActive] = useState(formulas[1]);

  return (
    <section id="blends" className="py-32 px-6 md:px-12 bg-aura-dark relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl text-center mb-24 text-aura-cream">Curated Blends</h2>
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Tabs */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            {formulas.map(f => (
              <button
                key={f.id}
                onClick={() => setActive(f)}
                className={cn(
                  "px-8 py-6 rounded-none text-left transition-all duration-500 relative overflow-hidden border-b",
                  active.id === f.id 
                    ? "border-aura-cream text-aura-cream bg-aura-brown/30" 
                    : "border-aura-cream/10 text-aura-cream/50 hover:text-aura-cream/80"
                )}
              >
                <span className="text-2xl font-serif relative z-10">{f.name}</span>
                {active.id === f.id && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-aura-cream"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3 mt-8 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="matte-panel p-10 md:p-16 rounded-sm relative overflow-hidden"
              >
                <h3 className="text-3xl font-serif mb-6 text-aura-cream">{active.name}</h3>
                <p className="text-xl text-aura-cream/70 leading-relaxed mb-12 font-light">
                  {active.desc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {active.benefits.map((b, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div className="w-2 h-2 rounded-full bg-aura-cream/30" />
                      <span className="text-aura-cream/90 font-medium tracking-wide text-sm uppercase">{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
