import { motion } from "motion/react";
import { Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";

export default function Closing() {
  return (
    <footer className="relative bg-moss pt-60 pb-20 overflow-hidden">
      {/* Background Image with Parallax effect simulation */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale-[0.8] contrast-125">
        <img
          src="https://picsum.photos/seed/forest-closing/1920/1080"
          alt="Nature background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-moss via-moss/40 to-moss/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mb-48"
        >
          <span className="text-[10px] font-bold tracking-[0.6em] text-gold uppercase mb-8 block">Conclusión</span>
          <h2 className="text-editorial-title text-5xl md:text-8xl mb-12 leading-[0.8] text-stone">
            La huerta no es solo cultivo. <br />
            <span className="italic pl-16 md:pl-48">Es comunidad y memoria.</span>
          </h2>
          <div className="flex flex-col items-center gap-6">
            <div className="h-32 w-[1px] bg-gradient-to-b from-gold to-transparent opacity-30" />
            <p className="font-serif italic text-3xl text-gold/60">Cultivar también es conectar.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-end pt-12 border-t border-white/5">
          <div className="text-left">
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] mb-10 opacity-40 text-stone">Redes del Ecosistema</h4>
            <div className="flex gap-10">
              {[Instagram, Youtube, Facebook, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#D4AF37" }}
                  className="text-stone/30 transition-colors"
                >
                  <Icon size={22} strokeWidth={1} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center mb-[-8px]">
            <span className="text-editorial-title text-4xl mb-1 italic text-stone">Raíz y Rastro</span>
            <p className="font-sans text-[9px] font-bold uppercase tracking-[0.8em] opacity-20 text-stone">Sigue creciendo</p>
          </div>

          <div className="text-right flex flex-col gap-4">
            <div className="flex flex-col gap-1 items-end">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 leading-relaxed text-stone">
                La narrativa continúa <br /> en otros espacios.
              </p>
              <div className="w-12 h-[1px] bg-gold/20" />
            </div>
            <span className="font-sans text-[8px] uppercase tracking-[0.1em] opacity-20 mt-6 text-stone">
              © 2026 Raíz y Rastro · Transmedia Lab
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative side markers */}
      <div className="absolute left-6 bottom-12 vertical-text text-[8px] tracking-[0.4em] uppercase opacity-20 text-stone">
        Final del rastro — 003
      </div>
    </footer>
  );
}

