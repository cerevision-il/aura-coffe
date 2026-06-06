import { Activity, Droplet, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Activity,
    title: "Biometric Sync",
    desc: "Seamlessly interfaces with your wearables to assess cognitive load and physical state."
  },
  {
    icon: Droplet,
    title: "Molecular Synthesis",
    desc: "Precision micro-dosing of functional compounds tailored entirely to your immediate needs."
  },
  {
    icon: Leaf,
    title: "Organic Ingredients",
    desc: "Sourced from the finest sustainable farms, delivering pure, uncompromised quality in every cup."
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6 md:px-12 bg-aura-brown relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl text-aura-cream mb-6">Uncompromising Craft</h2>
          <div className="w-24 h-[1px] bg-aura-cream/30 mx-auto mb-8"></div>
          <p className="text-aura-cream/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            The elegant intersection of ancient botanicals and modern biometric engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border border-aura-cream/20 flex items-center justify-center mb-8 group-hover:border-aura-cream/60 transition-colors duration-500 bg-aura-dark/50 shadow-xl shadow-black/20">
                <feature.icon className="w-8 h-8 text-aura-cream" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl mb-4 text-aura-cream">{feature.title}</h3>
              <p className="text-aura-cream/60 leading-relaxed font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
