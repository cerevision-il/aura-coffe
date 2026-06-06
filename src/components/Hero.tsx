import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleBrewClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section id="product" className="relative h-screen w-full bg-aura-dark flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-aura-brown/40 z-10 mix-blend-multiply pointer-events-none" />
        <video 
          ref={videoRef}
          src="./coffee_is_ready.mp4"
          className="w-full h-full object-cover opacity-90"
          muted
          playsInline
          loop={false}
          poster="./Gemini_Generated_Image_43qyv943qyv943qy.png"
        />
      </div>

      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-aura-brown via-transparent to-aura-brown/50 z-10 pointer-events-none"></div>

      {/* Content overlay */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 mt-20">
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-5xl md:text-7xl font-serif text-aura-cream mb-6 tracking-wide drop-shadow-2xl">
                The Future of Cognitive Flow
              </h1>
              <p className="text-xl text-aura-cream/80 max-w-2xl mb-12 font-light">
                Aura synthesizes personalized functional coffee blends based on your real-time biometrics.
              </p>
              
              <button 
                onClick={handleBrewClick}
                className="group flex items-center gap-4 px-10 py-5 bg-aura-cream text-aura-brown rounded-full hover:bg-white transition-all duration-500 shadow-xl shadow-black/50"
              >
                <div className="w-10 h-10 rounded-full border border-aura-brown flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-4 h-4 fill-aura-brown" />
                </div>
                <span className="font-serif text-xl tracking-widest uppercase">Brew Now</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
