import { Smartphone, Bean, Sparkles, Recycle, Timer, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Smartphone,
    title: 'Brew From Your Phone',
    desc: 'Start a cup from bed, save favourites per person, and watch the live brew status — all from the AURA app.',
  },
  {
    icon: Bean,
    title: 'Bean-To-Cup',
    desc: 'Load whole beans once. AURA grinds, doses and tamps the perfect puck automatically for every shot.',
  },
  {
    icon: Sparkles,
    title: 'Self-Cleaning',
    desc: 'Automatic backflush and milk-circuit rinse after every brew. A guided descale runs only when it is truly needed.',
  },
  {
    icon: Recycle,
    title: 'Zero-Pod Waste',
    desc: 'No plastic capsules, ever. Used grounds drop into a compostable puck bin you empty once a week.',
  },
  {
    icon: Timer,
    title: 'Wake-Up Schedules',
    desc: 'Set a brew time and AURA pre-heats so your first espresso is waiting the moment you walk in.',
  },
  {
    icon: ShieldCheck,
    title: '2-Year Warranty',
    desc: 'Stainless internals, serviceable parts, and over-the-air firmware that keeps getting better with time.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-28 md:py-40 px-6 md:px-12 bg-aura-brown relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="eyebrow justify-center mb-6">
            <span className="w-8 h-[1px] bg-aura-cream/40" />
            Why AURA
            <span className="w-8 h-[1px] bg-aura-cream/40" />
          </p>
          <h2 className="text-4xl md:text-6xl text-aura-cream mb-6 text-balance">Café habits, home comforts</h2>
          <p className="text-aura-cream/55 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            All the control of a professional setup, with none of the mess, noise or learning curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.7, ease: 'easeOut' }}
              className="matte-card p-9 flex flex-col group"
            >
              <div className="w-14 h-14 rounded-full border border-aura-cream/20 flex items-center justify-center mb-7 group-hover:border-aura-cream/60 transition-colors duration-500 bg-aura-dark/40">
                <feature.icon className="w-6 h-6 text-aura-cream" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl mb-3 text-aura-cream">{feature.title}</h3>
              <p className="text-aura-cream/55 leading-relaxed font-light text-[15px]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
