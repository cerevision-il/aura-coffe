import { motion } from 'framer-motion';

const specs = [
  { k: 'Pump pressure', v: '19 bar' },
  { k: 'Heating system', v: 'PID thermoblock' },
  { k: 'Grinder', v: 'Conical steel burr · 30 steps' },
  { k: 'Water tank', v: '1.8 L removable' },
  { k: 'Bean hopper', v: '280 g sealed' },
  { k: 'Connectivity', v: 'Wi-Fi · Bluetooth 5.3' },
  { k: 'Display', v: '5" haptic touchscreen' },
  { k: 'Dimensions', v: '38 × 18 × 42 cm' },
  { k: 'Power', v: '1450 W' },
  { k: 'Materials', v: 'Ceramic shell · steel core' },
  { k: 'Noise level', v: '< 55 dB' },
  { k: 'Warranty', v: '2 years' },
];

export function Specs() {
  return (
    <section id="specs" className="py-28 md:py-40 px-6 md:px-12 bg-aura-dark relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-6">
            <span className="w-8 h-[1px] bg-aura-cream/40" />
            Technical Specs
          </p>
          <h2 className="text-4xl md:text-6xl text-aura-cream text-balance">Built to last a decade</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {specs.map((s, idx) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.06 }}
              className="flex items-center justify-between gap-6 py-5 border-b border-aura-cream/10"
            >
              <span className="text-aura-cream/50 text-sm uppercase tracking-wider">{s.k}</span>
              <span className="text-aura-cream font-light text-right">{s.v}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
