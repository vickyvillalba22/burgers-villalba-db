"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useAppContext } from "@/app/context/AppContext";
import CartItemCard from "@/components/cart/CartItemCard";
import BackButton from "@/components/ui/BackButton";

export default function CartPage() {
  const { cart, cartTotal } = useAppContext();

  return (
    <main className="container mx-auto px-4 py-8 w-[80%]">

      <BackButton />

      <div className="mb-8 mt-8 flex flex-col gap-2">
        <h1 className="text-3xl font-medium flex items-center gap-4">
          <Icon icon="hugeicons:shopping-cart-01" className="w-8 h-8 text-amber-500" />
          Mi carrito
        </h1>

        <p className="text-sm text-neutral-500">
          Revisá tus productos antes de finalizar la compra.
        </p>
      </div>

      {cart.length === 0 ? (
        <section className="flex flex-col items-center gap-4 rounded-xl border p-10 text-center">
          <Icon icon="hugeicons:shopping-cart-01" className="w-16 h-16 text-slate-300" />
          <h2 className="text-xl font-semibold">
            Tu carrito está vacío
          </h2>

          <p className="text-neutral-500">
            Agregá algunos productos para continuar.
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

            <h2 className="mb-4 text-xl font-semibold flex items-center gap-2">
              <Icon icon="hugeicons:receipt-01" className="w-5 h-5 text-amber-500" />
              Resumen
            </h2>

            <div className="mb-4 flex justify-between items-center">
              <span className="flex items-center gap-1.5 text-neutral-600">
                <Icon icon="hugeicons:money-01" className="w-5 h-5 text-amber-500" />
                Total
              </span>
              <span className="font-bold text-xl text-amber-600">
                ${cartTotal}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 text-center font-medium text-white hover:bg-amber-600 transition"
            >
              <Icon icon="hugeicons:shopping-basket-02" className="w-5 h-5" />
              Continuar al checkout
            </Link>

          </aside>

        </div>
      )}

    </main>
  );
}