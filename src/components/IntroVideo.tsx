import { useEffect } from "react";
import { motion } from "motion/react";

interface IntroVideoProps {
  onComplete: () => void;
  key?: string | number;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  useEffect(() => {
    // Set a timeout as a fallback in case the video doesn't trigger onEnded correctly
    // or if the video is very long. The user requested 6-8 seconds.
    const timer = setTimeout(() => {
      onComplete();
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      id="introOverlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-black overflow-hidden"
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
        onError={onComplete} // Handle video load failures
        className="w-full h-full object-cover scale-105" // Slight scale to avoid edge artifacts
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-sunlight-on-a-forest-floor-1310-large.mp4"
          type="video/mp4"
        />
        {/* Fallback image if video fails to load */}
        <div className="absolute inset-0 bg-moss" />
      </video>
      
      {/* Subtle overlay to enhance the atmosphere */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </motion.div>
  );
}
