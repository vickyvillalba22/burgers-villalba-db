"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAppContext } from "@/app/context/AppContext";
import BackButton from "@/components/ui/BackButton";

export default function CheckoutReviewPage() {

  const {
    cart,
    cartTotal,
    checkoutData,
  } = useAppContext();
  

  if (!checkoutData) {
    return (
      <main className="container mx-auto px-4 py-8">

        <BackButton />

        <h1 className="mb-4 text-3xl font-bold">
          Resumen de compra
        </h1>

        <p className="mb-4">
          No hay información de checkout cargada.
        </p>

        <Link
          href="/checkout"
          className="rounded-full bg-(--accent) px-4 py-2 text-white"
        >
          Volver al checkout
        </Link>

      </main>
    );
  }

  return (

    <main className="container mx-auto max-w-6xl px-4 py-8">

        <BackButton />

      <h1 className="mb-8 text-3xl font-bold">
        Resumen de compra
      </h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

        <div className="space-y-6">

          {/* Datos comprador */}

          <section className="rounded-xl border p-6">

            <h2 className="mb-4 text-xl font-semibold">
              Datos del comprador
            </h2>

            <div className="space-y-2">

              <p>
                <strong>Nombre:</strong>{" "}
                {checkoutData.fullName}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {checkoutData.email}
              </p>

              <p>
                <strong>Teléfono:</strong>{" "}
                {checkoutData.phone}
              </p>

            </div>

          </section>

          {/* Entrega */}

          <section className="rounded-xl border p-6">

            <h2 className="mb-4 text-xl font-semibold">
              Entrega
            </h2>

            <div className="space-y-2">

              <p>
                <strong>Dirección:</strong>{" "}
                {checkoutData.address}
              </p>

              <p>
                <strong>Ciudad:</strong>{" "}
                {checkoutData.city}
              </p>

              <p>
                <strong>Código Postal:</strong>{" "}
                {checkoutData.zipCode || "-"}
              </p>

            </div>

          </section>

          {/* Observaciones */}

          <section className="rounded-xl border p-6">

            <h2 className="mb-4 text-xl font-semibold">
              Observaciones
            </h2>

            <p>
              {checkoutData.notes || "Sin observaciones"}
            </p>

          </section>

          {/* Productos */}

          <section className="rounded-xl border p-6">

            <h2 className="mb-4 text-xl font-semibold">
              Productos
            </h2>

            <div className="space-y-4">

              {cart.map((item) => (

                <article
                  key={item.cartItemId}
                  className="rounded-lg border p-4"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        Cantidad: {item.quantity}
                      </p>

                    </div>

                    <p className="font-bold">
                      ${item.subtotal}
                    </p>

                  </div>

                </article>

              ))}

            </div>

          </section>

        </div>

        {/* Resumen lateral */}

        <aside className="h-fit rounded-xl border p-6">

          <h2 className="mb-4 text-xl font-semibold">
            Total
          </h2>

          <div className="mb-6 flex justify-between">

            <span>Total a pagar</span>

            <span className="font-bold">
              ${cartTotal}
            </span>

          </div>

          <button
            className="w-full rounded-full bg-(--accent) py-3 font-semibold text-white"
          >
            Confirmar compra
          </button>

        </aside>

      </div>

    </main>

  );
}