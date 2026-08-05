import Link from "next/link";
import { Icon } from "@iconify/react";
import BackButton from "@/components/ui/BackButton";

export default function DashboardPage() {
  return (
    <main className="container mx-auto min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <BackButton />

        {/* Header */}
        <section className="rounded-3xl bg-linear-to-r from-orange-950 to-orange-800 p-10 text-white shadow-lg mt-4">
          <div className="flex items-center gap-3 text-orange-100">
            <Icon
              icon="hugeicons:dashboard-square-01"
              className="h-6 w-6"
            />
            <span className="text-sm font-semibold uppercase tracking-[0.25em]">
              Administración
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold">
            Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-orange-100">
            Gestioná productos, categorías y órdenes desde un único lugar.
          </p>
        </section>

        {/* Modules */}
        <section className="mt-10 grid gap-8 md:grid-cols-2">

          <Link
            href="/dashboard/products"
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
          >
            <div className="flex items-start gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                <Icon
                  icon="hugeicons:package-01"
                  className="h-8 w-8"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900">
                  Productos
                </h2>

                <p className="mt-2 text-slate-600">
                  Administrá productos, categorías y toda la información de la tienda.
                </p>

                <div className="mt-6 flex items-center gap-2 font-medium text-orange-500">
                  Administrar
                  <Icon
                    icon="hugeicons:arrow-right-01"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>

            </div>
          </Link>

          <Link
            href="/dashboard/orders"
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
          >
            <div className="flex items-start gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                <Icon
                  icon="hugeicons:shopping-bag-01"
                  className="h-8 w-8"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900">
                  Órdenes
                </h2>

                <p className="mt-2 text-slate-600">
                  Consultá pedidos, revisá su información y actualizá su estado.
                </p>

                <div className="mt-6 flex items-center gap-2 font-medium text-orange-500">
                  Ver órdenes
                  <Icon
                    icon="hugeicons:arrow-right-01"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>

            </div>
          </Link>

        </section>

      </div>
    </main>
  );
}