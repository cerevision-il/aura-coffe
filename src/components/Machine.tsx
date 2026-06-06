import { motion } from 'framer-motion';
import { Gauge, Thermometer, Bean, Droplets, Cpu, Volume2 } from 'lucide-react';

const anatomy = [
  {
    icon: Gauge,
    title: '19-Bar Italian Pump',
    desc: 'A commercial-grade pump delivers the exact pressure needed to extract a dense, golden crema from every shot.',
  },
  {
    icon: Thermometer,
    title: 'PID Thermoblock',
    desc: 'Water is held to within ±0.5°C of your target, so the bitterness and acidity of every cup stays perfectly in balance.',
  },
  {
    icon: Bean,
    title: 'Conical Burr Grinder',
    desc: 'Hardened steel burrs grind whole beans on demand across 30 fineness steps — fresh grounds for every single brew.',
  },
  {
    icon: Droplets,
    title: 'Auto Milk System',
    desc: 'An integrated steam wand textures silk-smooth microfoam for flat whites and lattes, then rinses itself clean.',
  },
  {
    icon: Cpu,
    title: '5" Haptic Display',
    desc: 'A hand-finished ceramic shell wraps a crisp touchscreen that mirrors everything you can do from the app.',
  },
  {
    icon: Volume2,
    title: 'Whisper-Quiet Build',
    desc: 'Vibration-damped internals keep the grind and brew under 55 dB — quiet enough for a 6am cup.',
  },
];

export function Machine() {
  return (
    <section id="machine" className="relative z-20 bg-aura-dark py-28 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <p className="eyebrow mb-6">
            <span className="w-8 h-[1px] bg-aura-cream/40" />
            The Machine
          </p>
          <h2 className="text-4xl md:text-6xl text-aura-cream mb-6 leading-tight text-balance">
            Engineered around a single cup.
          </h2>
          <p className="text-aura-cream/55 text-lg font-light leading-relaxed">
            Every part of AURA exists to remove a variable between you and a flawless brew.
            Here is what is happening behind that matte ceramic shell.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Product image — sticky on desktop */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative rounded-sm overflow-hidden border border-aura-cream/10 bg-aura-mocha/20"
            >
              <div className="absolute inset-0 glow-pedestal pointer-events-none" />
              <img
                src="./Gemini_Generated_Image_43qyv943qyv943qy.png"
                alt="The AURA smart coffee machine on a kitchen counter"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { v: '19', l: 'Bar pressure' },
                { v: '±0.5°', l: 'Temp accuracy' },
                { v: '55dB', l: 'Brew noise' },
              ].map((s) => (
                <div key={s.l} className="matte-card py-5 px-2">
                  <div className="text-2xl md:text-3xl font-serif text-aura-cream">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-aura-cream/45 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Anatomy list */}
          <div className="flex flex-col gap-5">
            {anatomy.map((part, idx) => (
              <motion.div
                key={part.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: 'easeOut' }}
                className="matte-card p-7 flex gap-5 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-full border border-aura-cream/20 flex items-center justify-center bg-aura-dark/40 group-hover:border-aura-cream/50 transition-colors duration-500">
                  <part.icon className="w-5 h-5 text-aura-cream" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl text-aura-cream mb-2">{part.title}</h3>
                  <p className="text-aura-cream/55 font-light leading-relaxed text-[15px]">{part.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
