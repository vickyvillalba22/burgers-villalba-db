import React from 'react'
import Image from 'next/image'

const HeroSection = () => {

  const heroItems = [
    { type: "letter", value: "S" },
    { type: "image", value: "/images/1.jpg" },
    { type: "letter", value: "I" },
    { type: "image", value: "/images/2.jpg" },
    { type: "letter", value: "M" },
    { type: "image", value: "/images/3.jpg" },
    { type: "letter", value: "P" },
    { type: "image", value: "/images/4.jpg" },
    { type: "letter", value: "L" },
    { type: "image", value: "/images/5.jpg" },
    { type: "letter", value: "Y" },
  ];

  return (
    <section className="overflow-hidden min-h-full">

      <div className="mx-auto max-w-7xl">

        {/* SIMPLY */}
        <div className="flex items-center justify-center gap-2">

          {heroItems.map((item, index) =>
            item.type === "letter" ? (
              <span
                key={index}
                className="font-titles text-[clamp(4rem,12vw,10rem)] leading-none text-transparent stroke-text"
              >
                {item.value}
              </span>
            ) : (
              <div
                key={index}
                className="relative h-20 w-20 overflow-hidden rounded-lg md:h-28 md:w-28"
              >
                <Image
                  src={item.value}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            )
          )}

        </div>

        {/* BURGER */}
        <div className="flex flex-col justify-center items-center gap-1">

          <span className="font-decorations text-7xl text-orange-500 md:text-8xl font-deco translate-y-8 script-outline">
            best
          </span>

          <Image
            src="/images/hero_image.png"
            alt="Hamburguesa principal"
            width={250}
            height={250}
            priority
            className="w-350px h-auto object-contain z-2"
          />

          
          {/* BURGERS */}
          <div>
            <h1 className="font-titles text-9xl leading-none text-accent text-(--accent) -translate-y-11 z-1">BURGERS</h1>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-2 flex justify-center">

          <button className="rounded-full bg-(--accent) px-8 py-3 font-semibold text-white transition hover:scale-105 mb-10">
            ORDER NOW
          </button>

        </div>

      </div>

    </section>
  )
}

export default HeroSection