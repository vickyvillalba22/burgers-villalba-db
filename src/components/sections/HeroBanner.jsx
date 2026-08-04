'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const slides = [
  {
    tag: 'Hot & Crispy',
    title: 'Triple Smash\nPerfection!',
    desc: 'Three juicy patties, melted cheddar, and our secret sauce.',
    img: '/images/products/triple-smash.png',
    bgColor: '#5B0000'
  },
  {
    tag: 'New Arrival',
    title: 'Bacon Burger\nDelight!',
    desc: 'Crispy bacon, premium beef, and fresh vegetables.',
    img: '/images/products/bacon-burger.png',
    bgColor: '#1A2E35'
  },
  {
    tag: 'Chef Choice',
    title: 'BBQ Deluxe\nExperience!',
    desc: 'Smoky BBQ sauce with caramelized onions and double cheese.',
    img: '/images/products/bbq-deluxe.png',
    bgColor: '#3D2B1F'
  }
]

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full aspect-video md:aspect-21/9 overflow-hidden rounded-[2.5rem] transition-colors duration-700"
      style={{ backgroundColor: slides[current].bgColor }}
    >
      <div className="absolute inset-0 p-8 md:p-12 flex items-center transition-opacity duration-500">
        <div className="w-full md:w-[40%] z-10 ml-12">
          <span className="inline-block bg-white/20 text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-white/20 backdrop-blur-sm">
            {slides[current].tag}
          </span>

          <h2 className="text-white text-3xl md:text-6xl font-bold leading-tight whitespace-pre-line">
            {slides[current].title}
          </h2>

          <p className="text-white/70 text-xs md:text-[16px] mt-4 max-w-xs font-medium">
            {slides[current].desc}
          </p>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-3/5 flex items-center justify-end overflow-hidden">
          <div className="relative w-full aspect-square translate-x-1/4 transition-transform duration-700 hover:scale-110">
            <Image
              src={slides[current].img}
              alt={slides[current].title}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <button
          onClick={prev}
          className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition hover:bg-white/20"
        >
          <Icon
            icon="hugeicons:arrow-left-02"
            className="h-8 w-8 text-white"
          />
        </button>

        <button
          onClick={next}
          className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition hover:bg-white/20"
        >
          <Icon
            icon="hugeicons:arrow-right-02"
            className="h-8 w-8 text-white"
          />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-orange-500 w-4"
                : "bg-white/30 w-1.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner
