'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAppContext } from "@/app/context/AppContext";
import BackButton from "@/components/ui/BackButton";

const Checkout = () => {

const router = useRouter()

const { cartTotal, checkoutData, setCheckoutData } = useAppContext();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    notes: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setCheckoutData(formData);
    
    router.push("/checkout/resumen");

  };

  return (

    <main className="container mx-auto max-w-6xl px-4 py-8">

    <BackButton />

      <h1 className="mb-8 text-3xl font-bold">
        Checkout
      </h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* Datos personales */}
          <section className="rounded-xl border p-6">

            <h2 className="mb-4 text-xl font-semibold">
              Información personal
            </h2>

            <div className="grid gap-4">

              <input
                type="text"
                name="fullName"
                placeholder="Nombre completo"
                value={formData.fullName}
                onChange={handleChange}
                className="rounded-lg border p-3"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-lg border p-3"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-lg border p-3"
                required
              />

            </div>

          </section>

          {/* Entrega */}
          <section className="rounded-xl border p-6">

            <h2 className="mb-4 text-xl font-semibold">
              Datos de entrega
            </h2>

            <div className="grid gap-4">

              <input
                type="text"
                name="address"
                placeholder="Dirección"
                value={formData.address}
                onChange={handleChange}
                className="rounded-lg border p-3"
                required
              />

              <input
                type="text"
                name="city"
                placeholder="Ciudad"
                value={formData.city}
                onChange={handleChange}
                className="rounded-lg border p-3"
                required
              />

              <input
                type="text"
                name="zipCode"
                placeholder="Código Postal"
                value={formData.zipCode}
                onChange={handleChange}
                className="rounded-lg border p-3"
              />

            </div>

          </section>

          {/* Observaciones */}
          <section className="rounded-xl border p-6">

            <h2 className="mb-4 text-xl font-semibold">
              Observaciones
            </h2>

            <textarea
              name="notes"
              placeholder="Indicaciones para la entrega..."
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-lg border p-3"
            />

          </section>

          <button
            type="submit"
            className="rounded-full bg-(--accent) px-6 py-3 font-semibold text-white"
          >
            Continuar al resumen
          </button>

        </form>

        {/* Resumen lateral */}
        <aside className="h-fit rounded-xl border p-6">

          <h2 className="mb-4 text-xl font-semibold">
            Resumen
          </h2>

          <div className="flex justify-between">

            <span>Total</span>

            <span className="font-bold">
              ${cartTotal}
            </span>

          </div>

        </aside>

      </div>

    </main>

  );
}

export default Checkout