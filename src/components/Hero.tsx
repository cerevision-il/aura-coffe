import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth scroll mapping for video currentTime
  useEffect(() => {
    let animationFrameId: number;
    let targetTime = 0;
    
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (duration > 0) {
        targetTime = latest * duration;
      }
    });

    const updateVideoTime = () => {
      if (videoRef.current && duration > 0) {
        // A very light interpolation for smoother frames (optional, direct assign is often enough)
        const diff = targetTime - videoRef.current.currentTime;
        if (Math.abs(diff) > 0.05) {
          videoRef.current.currentTime += diff * 0.5;
        } else {
          videoRef.current.currentTime = targetTime;
        }
      }
      animationFrameId = requestAnimationFrame(updateVideoTime);
    };

    updateVideoTime();
    
    return () => {
      unsubscribe();
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollYProgress, duration]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Phone Mockup fades out early
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const phoneY = useTransform(scrollYProgress, [0, 0.25], ["0%", "30%"]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);
  
  // Hero Text fades out
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-aura-dark w-full" id="product">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-aura-dark">
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-aura-brown/30 z-10 mix-blend-multiply pointer-events-none" />
          <video 
            ref={videoRef}
            src="./coffee_is_ready.mp4"
            className="w-full h-full object-cover opacity-90"
            muted
            playsInline
            onLoadedMetadata={handleLoadedMetadata}
            preload="auto"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-aura-brown via-transparent to-aura-brown/50 z-10 pointer-events-none"></div>

        {/* Hero Title Container */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="relative z-20 flex flex-col items-center text-center px-4 -mt-40"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-aura-cream mb-6 tracking-wide drop-shadow-xl">
            The Future of Cognitive Flow
          </h1>
          <p className="text-xl text-aura-cream/80 max-w-2xl font-light">
            Scroll to initiate the brewing sequence.
          </p>
        </motion.div>

        {/* Elegant Phone Mockup */}
        <motion.div 
          style={{ opacity: phoneOpacity, y: phoneY, scale: phoneScale }}
          className="absolute bottom-12 z-30 pointer-events-none flex flex-col items-center"
        >
          <div className="relative w-[300px] h-[600px] bg-aura-dark border-8 border-aura-brown rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center p-8 before:content-[''] before:absolute before:top-0 before:w-32 before:h-7 before:bg-aura-brown before:rounded-b-3xl">
            <div className="mt-16 w-full flex flex-col items-center h-full">
              <div className="text-aura-cream/50 text-xs tracking-widest uppercase mb-4">Aura System</div>
              <div className="text-3xl font-serif mb-12 text-center text-aura-cream">Synchronizing<br/>Biometrics</div>
              
              {/* Elegant Loader */}
              <div className="relative w-32 h-32 flex items-center justify-center mb-auto mt-4">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-aura-cream/20 border-t-aura-cream/80"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-aura-cream/10 border-b-aura-cream/60"
                />
                <div className="w-16 h-16 rounded-full bg-aura-cream/5 flex items-center justify-center backdrop-blur-sm border border-aura-cream/10">
                  <div className="w-2 h-2 rounded-full bg-aura-cream animate-pulse" />
                </div>
              </div>
              
              <div className="w-full space-y-3 mb-8">
                <div className="flex justify-between text-xs text-aura-cream/60 uppercase tracking-wider">
                  <span>Extracting</span>
                  <span className="text-aura-cream">Deep Work Alpha</span>
                </div>
                <div className="h-[2px] w-full bg-aura-cream/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-full bg-aura-cream w-3/4"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator line */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-aura-cream/50 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
}
