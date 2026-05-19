import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center p-12 md:p-24 bg-moss">
      {/* Decorative vertical text for editorial feel */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 vertical-text text-[10px] tracking-[0.4em] uppercase opacity-40 hidden md:block">
        Narrativa Transmedia — 2026
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 vertical-text rotate-180 text-[10px] tracking-[0.4em] uppercase opacity-40 hidden md:block">
        Ecosistemas Digitales Vivos
      </div>

      <div className="grid grid-cols-12 gap-12 items-center w-full max-w-7xl relative z-10">
        {/* Left Column: Visual & Metadata */}
        <div className="col-span-12 lg:col-span-5 h-full flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full aspect-[4/5] rounded-sm shadow-2xl border border-white/5 relative overflow-hidden group bg-earth"
          >
            {/* Cinematic Placeholder (Video removed as requested) */}
            <div className="absolute inset-0 bg-gradient-to-t from-moss to-transparent opacity-60"></div>
            
            <div className="absolute bottom-8 left-8 flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-stone">
              <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-gold border-b-[4px] border-b-transparent ml-1"></div>
              </div>
              <span className="uppercase">Ver Inicio — Cap 01</span>
            </div>
            <div className="absolute top-6 right-6 text-[10px] uppercase tracking-widest opacity-40 text-stone">
              Video Loop / 00:45
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 flex gap-4"
          >
            <div className="w-16 h-px bg-gold/30 mt-3 flex-shrink-0"></div>
            <p className="text-sm italic opacity-70 leading-relaxed font-serif max-w-[280px] text-stone">
              Una narrativa que crece desde la tierra, las manos y la memoria colectiva.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Title Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center lg:pl-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xs font-bold tracking-[0.5em] text-gold mb-6 block uppercase"
          >
            La Siembra — El Origen
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-editorial-title text-6xl md:text-8xl mb-12 text-stone"
          >
            Cultivar es <br />
            <span className="md:pl-32 block">reconectarnos con</span>
            <span className="text-gold">lo esencial.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="relative group cursor-pointer"
            >
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 opacity-80 group-hover:text-gold transition-colors">El Álbum</h3>
              <div className="flex gap-4 items-start">
                <div className="w-20 h-24 bg-earth border border-white/5 flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] leading-relaxed opacity-60 uppercase tracking-tighter">
                    Cada planta tiene un proceso. Descubre la galería de procesos vivos.
                  </p>
                  <span className="text-[10px] text-gold border-b border-gold/40 pb-0.5 mt-3 inline-block uppercase tracking-widest">
                    Explorar Fotos
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="relative group cursor-pointer"
            >
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 opacity-80 group-hover:text-gold transition-colors">Comunidad</h3>
              <div className="flex gap-4 items-start">
                <div className="w-20 h-24 bg-earth border border-white/5 flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] leading-relaxed opacity-60 uppercase tracking-tighter">
                    La huerta también es de quienes la hacen posible. Conoce las historias.
                  </p>
                  <span className="text-[10px] text-gold border-b border-gold/40 pb-0.5 mt-3 inline-block uppercase tracking-widest">
                    Ver Testimonios
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] text-gold/60">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
}

