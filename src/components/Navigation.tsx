import { motion } from "motion/react";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 p-10 md:p-12 flex justify-between items-start pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center group cursor-pointer space-x-5">
        <div className="h-10 md:h-14 aspect-square flex items-center justify-center">
          <img 
            src="/logo.png" 
            alt="Logo Raíz y Rastro" 
            className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500 brightness-110"
            onError={(e) => {
              // Si falla la imagen, usamos el componente Logo como fallback
              e.currentTarget.style.display = 'none';
              const fallbackContainer = e.currentTarget.parentElement?.querySelector('.logo-fallback');
              if (fallbackContainer) fallbackContainer.classList.remove('hidden');
            }}
            referrerPolicy="no-referrer"
          />
          <div className="logo-fallback hidden h-full w-full">
            <Logo className="h-full w-full text-gold transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[12px] md:text-[14px] tracking-[0.5em] uppercase font-bold text-gold group-hover:text-stone-100 transition-colors">
            Raíz y Rastro
          </span>
          <span className="text-[8px] tracking-[0.2em] uppercase text-gold/50 font-medium">
            Huerta Urbana
          </span>
        </div>
      </div>

      <div className="pointer-events-auto flex items-center gap-8">
        <span className="text-[10px] tracking-[0.4em] uppercase text-stone/60 cursor-pointer hover:text-gold transition-colors">Menu</span>
      </div>
    </motion.nav>
  );
}

