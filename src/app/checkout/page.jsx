'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

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

      <h1 className="mb-8 text-3xl font-medium flex items-center gap-3 mt-4">
        <Icon icon="hugeicons:shopping-basket-02" className="w-8 h-8 text-amber-500" />
        Checkout
      </h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* Datos personales */}
          <section className="rounded-xl border p-6">

            <h2 className="mb-4 text-xl font-semibold flex items-center gap-2">
              <Icon icon="hugeicons:identity-card" className="w-5 h-5 text-amber-500" />
              Información personal
            </h2>

            <div className="grid gap-4">

              <div className="relative flex items-center">
                <Icon icon="hugeicons:user" className="absolute left-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Nombre completo"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3 pl-10"
                  required
                />
              </div>

              <div className="relative flex items-center">
                <Icon icon="hugeicons:mail-01" className="absolute left-3 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3 pl-10"
                  required
                />
              </div>

              <div className="relative flex items-center">
                <Icon icon="hugeicons:smart-phone-01" className="absolute left-3 w-5 h-5 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3 pl-10"
                  required
                />
              </div>

            </div>

          </section>

          {/* Entrega */}
          <section className="rounded-xl border p-6">

            <h2 className="mb-4 text-xl font-semibold flex items-center gap-2">
              <Icon icon="hugeicons:location-01" className="w-5 h-5 text-amber-500" />
              Datos de entrega
            </h2>

            <div className="grid gap-4">

              <div className="relative flex items-center">
                <Icon icon="hugeicons:home-01" className="absolute left-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="address"
                  placeholder="Dirección"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3 pl-10"
                  required
                />
              </div>

              <div className="relative flex items-center">
                <Icon icon="hugeicons:building-01" className="absolute left-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="city"
                  placeholder="Ciudad"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3 pl-10"
                  required
                />
              </div>

              <div className="relative flex items-center">
                <Icon icon="hugeicons:pin" className="absolute left-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Código Postal"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3 pl-10"
                />
              </div>

            </div>

          </section>

          {/* Observaciones */}
          <section className="rounded-xl border p-6">

            <h2 className="mb-4 text-xl font-semibold flex items-center gap-2">
              <Icon icon="hugeicons:note-01" className="w-5 h-5 text-amber-500" />
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
            className="inline-flex items-center gap-2 rounded-full bg-(--accent) px-6 py-3 font-semibold text-white cursor-pointer hover:opacity-90 transition"
          >
            <span>Continuar al resumen</span>
            <Icon icon="hugeicons:arrow-right-01" className="w-5 h-5" />
          </button>

        </form>

        {/* Resumen lateral */}
        <aside className="h-fit rounded-xl border p-6">

          <h2 className="mb-4 text-xl font-semibold flex items-center gap-2">
            <Icon icon="hugeicons:receipt-01" className="w-5 h-5 text-amber-500" />
            Resumen
          </h2>

          <div className="flex justify-between items-center">

            <span className="flex items-center gap-1.5 text-slate-600">
              <Icon icon="hugeicons:money-01" className="w-5 h-5 text-amber-500" />
              Total
            </span>

            <span className="font-bold text-xl text-amber-600">
              ${cartTotal}
            </span>

          </div>

        </aside>

      </div>

    </main>

  );
}

export default Checkout