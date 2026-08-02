"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

import { useAppContext } from "@/app/context/AppContext";
import CardProduct from "@/components/ui/CardProduct";
import BackButton from "@/components/ui/BackButton";

export default function FavoritesPage() {
  const { favorites } = useAppContext();

  return (
    <main className="container mx-auto w-[90%] px-4 py-8">

      <BackButton />

      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Icon icon="hugeicons:favourite" className="w-8 h-8 text-amber-500" />
          Mis favoritos
        </h1>

        <p className="text-sm text-neutral-500">
          Productos que guardaste para ver más tarde.
        </p>
      </div>

      {favorites.length === 0 ? (
        <section className="flex flex-col items-center gap-4 rounded-xl border p-10 text-center">
          <Icon icon="hugeicons:favourite" className="w-16 h-16 text-slate-300" />
          <h2 className="text-xl font-semibold">
            Todavía no tenés favoritos
          </h2>

          <p className="text-neutral-500">
            Agregá productos desde el catálogo para verlos acá.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600 transition"
          >
            <Icon icon="hugeicons:burger-01" className="w-5 h-5" />
            Ver productos
          </Link>
        </section>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((product) => (
            <CardProduct
              key={product._id}
              product={product}
              requireConfirmOnRemove
            />
          ))}
        </div>
      )}

    </main>
  );
}
