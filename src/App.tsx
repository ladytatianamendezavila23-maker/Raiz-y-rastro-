/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import GardenAlbum from "./components/GardenAlbum";
import VideoSection from "./components/VideoSection";
import Community from "./components/Community";
import Participation from "./components/Participation";
import Closing from "./components/Closing";
import IntroVideo from "./components/IntroVideo";

export default function App() {
  const [introVisible, setIntroVisible] = useState(true);

  return (
    <main className="bg-[#0d1510] min-h-screen text-[#dce5dc] relative selection:bg-moss/30">
      {/* Intro Overlay: Highest z-index, blocks all content */}
      <AnimatePresence>
        {introVisible && (
          <IntroVideo 
            key="intro-overlay" 
            onComplete={() => setIntroVisible(false)} 
          />
        )}
      </AnimatePresence>

      {/* Main Content: Hidden until intro finishes, then fades in */}
      <motion.div
        key="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: introVisible ? 0 : 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className={introVisible ? "pointer-events-none invisible" : "visible"}
      >
        <Navigation />
        <Hero />
        <GardenAlbum />
        <VideoSection />
        <Community />
        <Participation />
        <Closing />
      </motion.div>
    </main>
  );
}


