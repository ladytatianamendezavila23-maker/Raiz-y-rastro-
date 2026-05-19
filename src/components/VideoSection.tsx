import { motion } from "motion/react";
import { Play } from "lucide-react";

const VIDEOS = [
  { id: 1, title: "El origen del suelo", duration: "03:45", image: "https://picsum.photos/seed/video1/1200/600" },
  { id: 2, title: "Manos que transforman", duration: "04:12", image: "https://picsum.photos/seed/video2/1200/600" },
];

export default function VideoSection() {
  return (
    <section className="py-32 px-4 md:px-12 bg-moss">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left border-l border-gold/10 pl-8 md:pl-16"
        >
          <span className="text-[10px] font-bold tracking-[0.5em] text-gold uppercase mb-6 block">Capítulo 03 — Visión</span>
          <h2 className="text-editorial-title text-6xl md:text-8xl leading-[0.8] mb-10 text-stone">
            Lo que pasa en la <br />
            huerta <span className="italic pl-12 md:pl-48 block">no se explica, se vive.</span>
          </h2>
          <div className="w-24 h-px bg-gold/20 mt-12 hidden md:block" />
        </motion.div>

        <div className="space-y-16">
          {VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              className="group relative cursor-pointer overflow-hidden aspect-[21/9] rounded-sm border border-white/5 bg-earth shadow-2xl"
            >
              <img
                src={video.image}
                alt={video.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moss via-moss/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                <div className="flex items-end gap-8 mb-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold flex items-center justify-center text-moss shadow-2xl"
                  >
                    <Play fill="currentColor" size={24} className="translate-x-0.5" />
                  </motion.div>
                  <div className="flex-1 border-b border-white/10 pb-4">
                    <h3 className="text-editorial-title text-4xl md:text-6xl text-stone group-hover:text-gold transition-colors duration-500">
                      {video.title}
                    </h3>
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-sans text-[9px] uppercase tracking-[0.4em] opacity-40">
                         Capítulo {video.id} — Documental
                      </p>
                      <span className="font-serif italic text-stone/60 text-lg">{video.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-end gap-2">
                <span className="text-[9px] uppercase tracking-[0.6em] text-gold border-b border-gold/30 pb-1">Ver Ahora</span>
                <span className="text-[7px] uppercase tracking-widest opacity-30 text-stone">Full Experience</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

