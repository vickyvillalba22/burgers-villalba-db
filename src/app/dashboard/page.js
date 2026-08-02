import Link from "next/link";
import { Icon } from "@iconify/react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <section className="rounded-lg bg-slate-900 p-8 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 flex items-center gap-2">
            <Icon icon="hugeicons:dashboard-square-01" className="w-4 h-4" />
            Administración
          </p>

          <h1 className="mt-4 text-4xl font-semibold">
            Dashboard
          </h1>

          <p className="mt-3 text-slate-300">
            Panel general de administración del ecommerce.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">

          <Link
            href="/dashboard/products"
            className="rounded-lg bg-white p-6 shadow transition hover:shadow-lg flex items-start gap-4"
          >
            <div className="p-3 bg-amber-50 rounded-lg text-amber-500">
              <Icon icon="hugeicons:package-01" className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Productos
              </h2>

              <p className="mt-2 text-slate-600">
                Administrar productos y categorías.
              </p>
            </div>
          </Link>

          <Link
            href="/dashboard/orders"
            className="rounded-lg bg-white p-6 shadow transition hover:shadow-lg flex items-start gap-4"
          >
            <div className="p-3 bg-amber-50 rounded-lg text-amber-500">
              <Icon icon="hugeicons:shopping-bag-01" className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Órdenes
              </h2>

              <p className="mt-2 text-slate-600">
                Ver pedidos y actualizar su estado.
              </p>
            </div>
          </Link>

        </section>

      </div>
    </main>
  );
}