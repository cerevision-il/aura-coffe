import { useEffect, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll position directly to the video frame.
  // The video is encoded all-keyframe (every frame is seekable), so a direct
  // 1:1 assignment scrubs smoothly and stops exactly when scrolling stops —
  // no easing lag, no mid-clip pauses.
  useEffect(() => {
    let frameId: number;
    let target = 0;

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (duration > 0) {
        target = latest * duration;
      }
    });

    const tick = () => {
      const video = videoRef.current;
      if (video && duration > 0 && Math.abs(target - video.currentTime) > 0.001) {
        video.currentTime = target;
      }
      frameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      unsubscribe();
      cancelAnimationFrame(frameId);
    };
  }, [scrollYProgress, duration]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <div ref={containerRef} id="top" className="relative h-[300vh] bg-aura-dark w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-aura-dark">
        <video
          ref={videoRef}
          src="./coffee_is_ready.mp4"
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
        />
        {/* Bottom fade only — seats the video into the next section, no text overlay */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-aura-brown to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
