"use client";

import Link from "next/link";
import { useAppContext } from "@/app/context/AppContext";
import CartItemCard from "@/components/cart/CartItemCard";
import BackButton from "@/components/ui/BackButton";

export default function CartPage() {
  const { cart, cartTotal } = useAppContext();

  return (
    <main className="container mx-auto px-4 py-8">

        <BackButton />

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Mi carrito
        </h1>

        <p className="text-sm text-neutral-500">
          Revisá tus productos antes de finalizar la compra.
        </p>
      </div>

      {cart.length === 0 ? (
        <section className="flex flex-col items-center gap-4 rounded-xl border p-10 text-center">
          <h2 className="text-xl font-semibold">
            Tu carrito está vacío
          </h2>

          <p className="text-neutral-500">
            Agregá algunos productos para continuar.
          </p>

          <Link
            href="/"
            className="rounded-lg bg-amber-500 px-4 py-2 font-medium text-white"
          >
            Ver productos
          </Link>
        </section>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          <section className="space-y-4">
            {cart.map((item) => (
              <CartItemCard
                key={item.cartItemId}
                item={item}
              />
            ))}
          </section>

          <aside className="h-fit rounded-xl border p-6">

            <h2 className="mb-4 text-xl font-semibold">
              Resumen
            </h2>

            <div className="mb-4 flex justify-between">
              <span>Total</span>
              <span className="font-bold">
                ${cartTotal}
              </span>
            </div>

            <Link
              href="/checkout"
              className="block w-full rounded-lg bg-amber-500 px-4 py-3 text-center font-medium text-white"
            >
              Continuar al checkout
            </Link>

          </aside>

        </div>
      )}

    </main>
  );
}