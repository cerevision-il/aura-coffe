import { motion } from 'framer-motion';
import { Coffee, Wifi, Bluetooth } from 'lucide-react';

const steps = [
  {
    n: '01',
    title: 'Pick your cup',
    desc: 'Espresso, flat white, cortado or cold brew — tap a saved favourite or build a new one.',
  },
  {
    n: '02',
    title: 'Dial it in',
    desc: 'Adjust strength, volume, temperature and milk texture with simple sliders. AURA remembers per profile.',
  },
  {
    n: '03',
    title: 'Brew & track',
    desc: 'Hit brew from anywhere on your Wi-Fi. Live status tells you the moment your coffee is ready.',
  },
];

export function AppControl() {
  return (
    <section id="app" className="relative z-20 bg-aura-dark py-28 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vh] glow-pedestal pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Copy */}
        <div>
          <p className="eyebrow mb-6">
            <span className="w-8 h-[1px] bg-aura-cream/40" />
            The App
          </p>
          <h2 className="text-4xl md:text-6xl text-aura-cream mb-6 leading-tight text-balance">
            The whole café, in your pocket.
          </h2>
          <p className="text-aura-cream/55 text-lg font-light leading-relaxed mb-12">
            The same control panel you saw above lives on your phone. Pair once over Bluetooth, then brew
            over Wi-Fi from anywhere in the house.
          </p>

          <div className="flex flex-col gap-8">
            {steps.map((s, idx) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex gap-6"
              >
                <span className="text-2xl font-serif text-aura-cream/40 w-12 shrink-0">{s.n}</span>
                <div className="border-l border-aura-cream/10 pl-6">
                  <h3 className="text-xl text-aura-cream mb-2">{s.title}</h3>
                  <p className="text-aura-cream/55 font-light leading-relaxed text-[15px]">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="relative w-[280px] h-[570px] rounded-[3rem] border border-aura-cream/15 bg-aura-brown shadow-2xl shadow-black/50 p-3">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-aura-dark z-10" />
            <div className="w-full h-full rounded-[2.4rem] bg-gradient-to-b from-aura-mocha/40 to-aura-dark overflow-hidden flex flex-col">
              {/* status bar */}
              <div className="flex items-center justify-between px-6 pt-7 pb-4 text-aura-cream/60 text-xs">
                <span className="tracking-widest">AURA</span>
                <span className="flex items-center gap-2">
                  <Bluetooth className="w-3.5 h-3.5" />
                  <Wifi className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* cup */}
              <div className="flex-1 flex flex-col items-center justify-center px-6">
                <div className="w-28 h-28 rounded-full border border-aura-cream/15 bg-aura-dark/50 flex items-center justify-center mb-6 glow-pedestal">
                  <Coffee className="w-12 h-12 text-aura-cream" strokeWidth={1.2} />
                </div>
                <p className="text-aura-cream font-serif text-2xl">Flat White</p>
                <p className="text-aura-cream/45 text-xs mt-1 tracking-widest uppercase">Elena&rsquo;s profile</p>

                {/* strength slider */}
                <div className="w-full mt-9">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-aura-cream/40 mb-2">
                    <span>Strength</span><span>Strong</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-aura-cream/10 relative">
                    <div className="absolute left-0 top-0 h-full w-3/4 rounded-full bg-aura-cream" />
                    <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-aura-cream shadow" />
                  </div>
                </div>
              </div>

              {/* brew button */}
              <div className="px-6 pb-9">
                <div className="matte-button w-full py-4 rounded-full text-center uppercase tracking-[0.2em] text-xs">
                  Brew Now
                </div>
                <p className="text-center text-aura-cream/40 text-[10px] mt-3 tracking-widest uppercase animate-pulse-soft">
                  Heating · ready in 40s
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
