"use client";

import Link from "next/link";

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

          <h2 className="text-xl font-bold">
            Carrito
          </h2>

          <button onClick={closeCart}>
            ✕
          </button>

        </div>

        <div className="flex h-[calc(100%-80px)] flex-col">

        <div className="flex-1 flex flex-col gap-4 overflow-y-auto p-4">

            {cart.length === 0 ? (

            <p className="text-center text-slate-500">
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

            <p className="mb-4 text-lg font-bold">
            Total: ${cartTotal}
            </p>

            <Link
              href="/cart"
              onClick={closeCart}
              className="block w-full rounded-full bg-(--accent) py-3 text-center font-semibold text-white"
            >
              Ir al carrito
            </Link>

        </div>

        </div>

      </aside>
    </>
  );
};

export default CartSidebar;