import BackButton from "@/components/ui/BackButton";
import ProductDashboardContainer from "@/containers/ProductDashboardContainer";

export const dynamic = "force-dynamic";

const endpoints = [
  "GET /api/products",
  "POST /api/products",
  "GET /api/products/:id",
  "PUT /api/products/:id",
  "DELETE /api/products/:id",
  "GET /api/categories",
  "POST /api/categories",
  "GET /api/categories/:id",
  "PUT /api/categories/:id",
  "DELETE /api/categories/:id",
];

export default function DashboardPage() {
  return (
    <main className="container mx-auto min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <BackButton />

        {/* Header */}
        <section className="rounded-3xl bg-linear-to-r from-orange-950 to-orange-800 p-10 text-white shadow-lg mt-4">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-100">
            Programación 3
          </p>

          <h1 className="mt-5 text-4xl font-bold">
            Dashboard de productos
          </h1>

          <p className="mt-3 max-w-2xl text-orange-100">
            Administración de productos y categorías utilizando Next.js,
            Route Handlers y MongoDB.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {endpoints.map((endpoint) => (
              <span
                key={endpoint}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm"
              >
                {endpoint}
              </span>
            ))}
          </div>
        </section>

        {/* Content */}
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Productos
              </h2>

              <p className="mt-1 text-slate-500">
                Gestioná el catálogo de la tienda.
              </p>
            </div>
          </div>

          <ProductDashboardContainer />
        </section>

      </div>
    </main>
  );
}
