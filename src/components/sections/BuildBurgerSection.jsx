import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function BuildBurgerSection() {
  return (
    <section className="my-12 relative overflow-hidden rounded-3xl bg-[#F91814] text-white shadow-2xl py-10 px-6 md:px-12">
      
      {/* Top Badge */}
      <div className="flex justify-center mb-2">
        <span className="font-deco text-white text-lg md:text-xl tracking-wider">
          ★ Experiencia Única ★
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-center font-titles text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-white tracking-wide uppercase drop-shadow-md">
        Armá tu propia hamburguesa
      </h2>

      {/* Content Layout */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 relative z-10 max-w-5xl mx-auto">
        
        {/* Left Description */}
        <div className="text-center lg:text-right text-slate-100 text-sm md:text-base font-medium leading-relaxed max-w-xs mx-auto lg:max-w-none">
          ¿Querés algo épico? Elegí tus medallas de carne favoritas, los mejores quesos derretidos, bacon crocante y los aderezos que más te gusten.
        </div>

        {/* Center Burger with Yellow Scalloped Frame */}
        <div className="relative flex flex-col items-center justify-center py-4">
          
          {/* Yellow decorative scalloped shape background */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
            
            {/* Outer scalloped yellow shape */}
            <div className="absolute inset-0 bg-[#FFD84F] rounded-[40%_60%_70%_30%/50%_60%_40%_50%] border-4 border-amber-300 shadow-xl flex items-center justify-center transform -rotate-3 scale-105">
              <div className="w-[90%] h-[90%] bg-amber-50 rounded-full border-2 border-amber-200"></div>
            </div>

            {/* Burger Image */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/products/doble-cheddar.png"
                alt="Hamburguesa personalizada"
                fill
                className="object-contain"
              />
            </div>

          </div>

          {/* Yellow CTA Badge / Button Box */}
          <div className="z-20 -mt-8 bg-[#FFD84F] text-slate-950 p-3 px-6 rounded-2xl border-4 border-amber-300 shadow-xl text-center transform hover:scale-105 transition-all">
            <span className="block font-deco text-amber-900 text-xs md:text-sm tracking-wider mb-1">
              ¡Personalizala a tu gusto!
            </span>

            <Link
              href="/build-burger"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F91814] px-6 py-2.5 font-titles text-xl sm:text-2xl text-white tracking-wider transition hover:bg-red-700 shadow-md uppercase cursor-pointer"
            >
              <Icon icon="hugeicons:burger-01" className="w-6 h-6 text-yellow-300" />
              Armá tu hamburguesa
            </Link>
          </div>

        </div>

        {/* Right Description */}
        <div className="text-center lg:text-left text-slate-100 text-sm md:text-base font-medium leading-relaxed max-w-xs mx-auto lg:max-w-none">
          Armá tu combinación paso a paso, elegí los aderezos secretos y mirá cómo queda en tiempo real antes de agregarla al carrito.
        </div>

      </div>

      {/* Repeating Black Ribbon Bar */}
      <div className="mt-10 -mx-6 md:-mx-12 bg-slate-950 text-amber-400 font-titles text-base md:text-lg tracking-widest py-2.5 overflow-hidden flex whitespace-nowrap border-y border-amber-500/30 shadow-inner">
        <div className="flex justify-around w-full px-4 gap-6 items-center uppercase">
          <span>★ ARMÁ LA TUYA</span>
          <span className="text-white">100% CUSTOM</span>
          <span>★ INGREDIENTES FRESCOS</span>
          <span className="text-white">BEST BURGERS</span>
          <span>★ COMBINACIÓN ÉPICA</span>
        </div>
      </div>

    </section>
  );
}
