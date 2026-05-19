import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";

const ALBUM_IMAGES = [
  { id: 1, src: "https://picsum.photos/seed/garden1/800/1000", title: "Crecimiento", type: "video" },
  { id: 2, src: "https://picsum.photos/seed/leaf1/600/400", title: "Detalle", type: "video" },
  { id: 3, src: "https://picsum.photos/seed/soil1/500/700", title: "Tierra", type: "video" },
  { id: 4, src: "https://picsum.photos/seed/water1/600/800", title: "Vida", type: "video" },
  { id: 5, src: "https://picsum.photos/seed/hands1/700/500", title: "Cuidado", type: "video" },
];

export default function GardenAlbum() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-32 px-4 md:px-12 lg:px-24 bg-moss">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-end border-b border-white/5 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase mb-4 block">Capítulo 02</span>
            <h2 className="text-editorial-title text-6xl md:text-8xl mb-8 text-stone">
              Cada planta tiene <br />
              <span className="italic pl-12 md:pl-24">un proceso.</span>
            </h2>
            <p className="font-sans text-stone/50 max-w-md text-[11px] uppercase tracking-tighter leading-relaxed">
              Descúbrelo. Cada imagen es una puerta a su crecimiento, un rastro de la raíz que se expande por el cemento.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-end items-end h-full"
          >
            <div className="text-right">
              <span className="vertical-text text-[8px] tracking-[0.6em] uppercase opacity-20 mr-4">Procesos Vivos</span>
              <div className="h-32 w-[1px] bg-gold/20 inline-block align-bottom" />
            </div>
          </motion.div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 translate-y-16">
            <GardenItem
              item={ALBUM_IMAGES[0]}
              onClick={() => setSelectedVideo("video1")}
              delay={0.1}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <GardenItem
              item={ALBUM_IMAGES[1]}
              onClick={() => setSelectedVideo("video2")}
              delay={0.3}
            />
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-5 md:mt-24 lg:-mt-16">
            <GardenItem
              item={ALBUM_IMAGES[2]}
              onClick={() => setSelectedVideo("video3")}
              delay={0.5}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:-mt-32">
            <GardenItem
              item={ALBUM_IMAGES[3]}
              onClick={() => setSelectedVideo("video4")}
              delay={0.2}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8 md:mt-12 lg:mt-0">
            <GardenItem
              item={ALBUM_IMAGES[4]}
              onClick={() => setSelectedVideo("video5")}
              delay={0.4}
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-moss/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-10 right-10 text-stone/40 hover:text-gold transition-colors z-[110]"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-earth overflow-hidden rounded-sm shadow-2xl border border-white/5 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                autoPlay
                controls
                className="w-full h-full object-cover"
                src="https://assets.mixkit.co/videos/preview/mixkit-hand-planting-a-small-tree-in-the-forest-42557-large.mp4"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GardenItem({ item, onClick, delay }: { item: any, onClick: () => void, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto border border-white/5 shadow-lg bg-earth">
        <motion.img
          src={item.src}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-moss/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold/10 backdrop-blur-sm"
          >
            <Play className="text-gold fill-gold ml-1" size={20} />
          </motion.div>
        </div>
        <div className="absolute top-4 right-4 text-[8px] tracking-[0.4em] uppercase text-stone/40">
          Gal {item.id}
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center px-2">
        <div className="flex items-center gap-4">
          <div className="w-8 h-[1px] bg-gold/30" />
          <h3 className="font-serif italic text-xl text-stone/80 group-hover:text-gold transition-colors">{item.title}</h3>
        </div>
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-stone/40">
          Archivo 2024
        </span>
      </div>
    </motion.div>
  );
}

