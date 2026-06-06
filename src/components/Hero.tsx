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

  // Scroll Indicator fades out
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
