import Link from "next/link";
import { Icon } from "@iconify/react";

export default function BuildBurgerCTA() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="rounded-3xl bg-amber-50 border border-amber-200 p-10 text-center hover:scale-105 transition-transform duration-500 ease-out">

        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-white">
          <Icon
            icon="hugeicons:hamburger-01"
            className="h-12 w-12"
          />
        </div>

        <h2 className="text-3xl font-bold">
          Armá tu hamburguesa
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Elegí el pan, la carne, los ingredientes, las papas y la bebida.
          Nosotros nos encargamos del resto.
        </p>

        <Link
          href="/build-burger"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
        >
          Empezar ahora
          <Icon icon="hugeicons:arrow-right-02"
          className="w-6 h-6 hover:translate-x-1" />
        </Link>

      </div>
    </section>
  );
}