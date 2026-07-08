"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");

  return (
    <main className="container mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 py-8 text-center">
      <div className="mb-8 text-6xl">🎉</div>
      
      <h1 className="mb-4 text-3xl font-bold">
        ¡Compra realizada con éxito!
      </h1>

      <p className="mb-2 text-lg text-slate-600">
        Tu orden ha sido creada correctamente.
      </p>

      {orderNumber && (
        <p className="mb-8 text-2xl font-bold text-(--accent)">
          Orden # {orderNumber}
        </p>
      )}

      <Link
        href="/"
        className="rounded-full bg-(--accent) px-8 py-3 font-semibold text-white"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
