import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Participation() {
  return (
    <section className="py-40 bg-moss border-y border-white/5 relative">
      <div className="absolute right-12 top-12 text-[10px] uppercase tracking-[0.4em] opacity-40">Participación</div>
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase mb-4 block">Formulario 01</span>
          <h2 className="text-editorial-title text-5xl md:text-7xl mb-4 text-stone">
            Ahora tú haces parte <br />
            <span className="italic pl-16">de la huerta.</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mt-12" />
        </motion.div>

        <form className="space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <label className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
                ¿Qué cultivarías tú?
              </label>
              <input
                type="text"
                placeholder="Escribe tu intención..."
                className="w-full bg-transparent border-b border-gold/20 py-4 focus:outline-none focus:border-gold transition-all duration-500 placeholder:text-stone/10 font-serif italic text-2xl text-stone"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <label className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
                ¿Qué aprendiste hoy?
              </label>
              <input
                type="text"
                placeholder="Comparte tu rastro..."
                className="w-full bg-transparent border-b border-gold/20 py-4 focus:outline-none focus:border-gold transition-all duration-500 placeholder:text-stone/10 font-serif italic text-2xl text-stone"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-12 pt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-6 border border-gold/30 px-12 py-5 rounded-sm transition-all duration-500 bg-earth/30"
            >
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-stone">Enviar Raíz</span>
              <Send size={14} className="text-gold opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              <div className="absolute inset-0 border border-gold opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 translate-y-1 -z-10" />
            </motion.button>
            <p className="text-[9px] font-sans opacity-30 text-center max-w-sm uppercase tracking-[0.2em] leading-relaxed text-stone">
              Tus respuestas alimentan el ecosistema digital vivo de <br /> Raíz y Rastro. Privacidad Garantizada.
            </p>
          </motion.div>
        </form>
      </div>
    </section>
  );
}

