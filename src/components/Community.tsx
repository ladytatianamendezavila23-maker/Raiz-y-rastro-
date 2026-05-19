import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    name: "Elena M.",
    role: "Cultivadora Urbana",
    text: "En la huerta encontré un espacio para el silencio y la memoria de mis ancestros. Cada semilla es una conexión con el pasado.",
    image: "https://picsum.photos/seed/person1/400/500",
  },
  {
    name: "Javier R.",
    role: "Vecino y Colaborador",
    text: "Raíz y Rastro no es solo sobre plantas, es sobre nosotros. Hemos transformado un baldío en un pulmón de esperanza.",
    image: "https://picsum.photos/seed/person2/400/500",
  },
];

export default function Community() {
  return (
    <section className="py-32 bg-moss relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-0 right-0 opacity-[0.02] select-none pointer-events-none translate-x-1/4">
        <h2 className="text-[25vw] font-serif italic text-stone whitespace-nowrap">Comunidad</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center border-b border-white/5 pb-16"
        >
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-gold mb-6 block">
            Voces de la Tierra
          </span>
          <h2 className="text-editorial-title text-5xl md:text-8xl max-w-4xl mx-auto leading-[0.85] text-stone">
            La huerta también es <br className="hidden md:block" />
            <span className="italic pl-16 md:pl-32 block">de quienes la hacen posible.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              className={`flex flex-col ${idx % 2 !== 0 ? "lg:mt-48" : ""}`}
            >
              <div className="relative mb-12 group">
                <div className="overflow-hidden aspect-[4/5] rounded-sm border border-white/5 shadow-2xl bg-earth">
                  <img
                    src={t.image}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                </div>
                <div className="absolute top-6 right-6 text-[8px] tracking-[0.4em] uppercase text-stone/40">Retrato / 24</div>
                <div className="absolute -bottom-6 -right-6 md:-right-12 bg-gold h-32 w-32 md:h-48 md:w-48 opacity-5 blur-[100px] -z-10" />
              </div>
              <div className="pl-0 md:pl-16 border-l border-gold/10">
                <blockquote className="text-2xl md:text-3xl font-serif italic mb-10 leading-relaxed text-stone/90">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-gold/40" />
                  <div>
                    <h4 className="font-sans font-bold tracking-[0.3em] text-gold uppercase text-[10px] mb-1">
                      {t.name}
                    </h4>
                    <p className="font-serif italic text-sm text-stone/40">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

