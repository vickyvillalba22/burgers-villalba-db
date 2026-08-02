"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

import { useAppContext } from "@/app/context/AppContext";
import CartItemCard from "./CartItemCard";

const CartSidebar = () => {

  const {
    cart,
    cartTotal,
    isCartOpen,
    closeCart,
  } = useAppContext();

  return (
    <>
      {isCartOpen && (

        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={closeCart}
        />

      )}

      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white shadow-xl transition-transform duration-300 ${
          isCartOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between border-b p-4">

          <h2 className="text-xl font-bold flex items-center gap-2">
            <Icon icon="hugeicons:shopping-cart-01" className="w-6 h-6 text-amber-500" />
            Carrito
          </h2>

          <button onClick={closeCart} className="p-1 rounded hover:bg-slate-100 cursor-pointer" aria-label="Cerrar carrito">
            <Icon icon="hugeicons:cancel-01" className="w-6 h-6 text-slate-600" />
          </button>

        </div>

        <div className="flex h-[calc(100%-80px)] flex-col">

        <div className="flex-1 flex flex-col gap-4 overflow-y-auto p-4">

            {cart.length === 0 ? (

            <p className="text-center text-slate-500 py-10 flex flex-col items-center gap-2">
                <Icon icon="hugeicons:shopping-cart-01" className="w-12 h-12 text-slate-300" />
                Tu carrito está vacío
            </p>

            ) : (

            cart.map((item) => (
                <CartItemCard
                key={item.cartItemId}
                item={item}
                />
            ))

            )}

        </div>

        <div className="border-t p-4">

            <p className="mb-4 text-lg font-bold flex items-center justify-between">
              <span>Total:</span>
              <span className="text-amber-600">${cartTotal}</span>
            </p>

            <Link
              href="/cart"
              onClick={closeCart}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-(--accent) py-3 text-center font-semibold text-white hover:opacity-90 transition"
            >
              <Icon icon="hugeicons:shopping-basket-02" className="w-5 h-5" />
              Ir al carrito
            </Link>

        </div>

        </div>

      </aside>
    </>
  );
};

export default CartSidebar;