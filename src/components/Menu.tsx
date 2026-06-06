import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const drinks = [
  {
    id: 'espresso',
    name: 'Espresso',
    desc: 'A 25-second extraction at 19 bar, pulling 36g of dense, syrupy shot with a thick hazelnut crema. The benchmark every other drink is built on.',
    specs: [
      { k: 'Volume', v: '36 ml' },
      { k: 'Grind', v: 'Fine' },
      { k: 'Time', v: '25 s' },
    ],
  },
  {
    id: 'flatwhite',
    name: 'Flat White',
    desc: 'A double ristretto base under velvety microfoam, textured by the auto steam wand to a glossy, paint-like finish that holds latte art.',
    specs: [
      { k: 'Volume', v: '160 ml' },
      { k: 'Milk', v: 'Silk foam' },
      { k: 'Time', v: '55 s' },
    ],
  },
  {
    id: 'cortado',
    name: 'Cortado',
    desc: 'Equal parts espresso and gently steamed milk. Bright, balanced and small — the connoisseur’s mid-afternoon reset.',
    specs: [
      { k: 'Volume', v: '90 ml' },
      { k: 'Ratio', v: '1 : 1' },
      { k: 'Time', v: '45 s' },
    ],
  },
  {
    id: 'coldbrew',
    name: 'Cold Brew',
    desc: 'A flash-chilled, low-acid concentrate brewed cold over ice. Smooth, sweet and endlessly refreshing on a warm afternoon.',
    specs: [
      { k: 'Volume', v: '250 ml' },
      { k: 'Temp', v: '4 °C' },
      { k: 'Time', v: '90 s' },
    ],
  },
];

export function Menu() {
  const [active, setActive] = useState(drinks[1]);

  return (
    <section id="menu" className="py-28 md:py-40 px-6 md:px-12 bg-aura-brown relative z-20">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="eyebrow justify-center mb-6">
            <span className="w-8 h-[1px] bg-aura-cream/40" />
            The Menu
            <span className="w-8 h-[1px] bg-aura-cream/40" />
          </p>
          <h2 className="text-4xl md:text-6xl text-aura-cream text-balance">One machine, every cup</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Tabs */}
          <div className="w-full md:w-1/3 flex flex-col gap-3">
            {drinks.map((d) => (
              <button
                key={d.id}
                onClick={() => setActive(d)}
                className={cn(
                  'px-7 py-5 text-left transition-all duration-500 relative overflow-hidden border-b',
                  active.id === d.id
                    ? 'border-aura-cream text-aura-cream bg-aura-mocha/40'
                    : 'border-aura-cream/10 text-aura-cream/45 hover:text-aura-cream/80 hover:bg-aura-mocha/20'
                )}
              >
                <span className="text-2xl font-serif relative z-10">{d.name}</span>
                {active.id === d.id && (
                  <motion.div
                    layoutId="activeDrinkIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-aura-cream"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="matte-card p-10 md:p-16 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-48 h-48 glow-pedestal pointer-events-none" />
                <h3 className="text-3xl md:text-4xl font-serif mb-6 text-aura-cream">{active.name}</h3>
                <p className="text-lg text-aura-cream/65 leading-relaxed mb-12 font-light max-w-xl">
                  {active.desc}
                </p>

                <div className="grid grid-cols-3 gap-6 border-t border-aura-cream/10 pt-8">
                  {active.specs.map((s) => (
                    <div key={s.k} className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-aura-cream/40">{s.k}</span>
                      <span className="text-aura-cream font-serif text-xl">{s.v}</span>
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
