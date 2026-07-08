"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

import { useAppContext } from "@/app/context/AppContext";
import BackButton from "@/components/ui/BackButton";

export default function CheckoutReviewPage() {

  const {
    cart,
    cartTotal,
    checkoutData,
    clearCart,
    setCheckoutData,
  } = useAppContext();
  
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isSubmitting = useRef(false); // Ref para prevenir dobles envíos
  const abortControllerRef = useRef(null); // Ref para AbortController

  // Cleanup al desmontar el componente
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleConfirmPurchase = async () => {
    // Prevenir dobles envíos con ref
    if (isSubmitting.current) {
      return;
    }

    // Validar que el carrito no esté vacío
    if (cart.length === 0) {
      setError("El carrito está vacío");
      return;
    }

    // Validar que existan datos de checkout (seguridad adicional)
    if (!checkoutData) {
      setError("Faltan datos de checkout");
      return;
    }

    isSubmitting.current = true;
    setIsLoading(true);
    setError(null);

    // Crear nuevo AbortController para esta solicitud
    abortControllerRef.current = new AbortController();

    try {
      // Llamar a la API para crear la orden
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: checkoutData,
          cart: cart,
        }),
        signal: abortControllerRef.current.signal,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Error al crear la orden");
      }

      // Vaciar el carrito y los datos de checkout
      clearCart();
      setCheckoutData(null);

      // Redireccionar a la página de éxito con el número de orden
      router.push(`/checkout/exito?orderNumber=${data.order.orderNumber}`);

    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Solicitud cancelada");
        return;
      }
      setError(err.message);
      console.error("Error confirming purchase:", err);
    } finally {
      setIsLoading(false);
      isSubmitting.current = false;
    }
  };

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

          {error && (
            <p className="mb-4 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            onClick={handleConfirmPurchase}
            disabled={isLoading}
            className="w-full rounded-full bg-(--accent) py-3 font-semibold text-white disabled:opacity-50"
          >
            {isLoading ? "Procesando..." : "Confirmar compra"}
          </button>

        </aside>

      </div>

    </main>

  );
}