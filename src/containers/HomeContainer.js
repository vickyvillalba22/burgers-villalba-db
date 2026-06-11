import ProductGrid from "@/components/ProductGrid";
import ProjectProgress from "@/components/ui/ProjectProgress";
import ErrorMsg from "@/components/ui/ErrorMsg";

const HomeContainer = ({ products }) => {
  return (
    <main className="min-h-screen px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">

        <section className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
            Programacion 3
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold">
            Productos
          </h1>

          <p className="mt-4 max-w-2xl text-base text-slate-600">
            Catalogo publico del ecommerce. La administracion queda disponible
            en /dashboard.
          </p>
        </section>

        <ProjectProgress />

        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <ErrorMsg
            title="No hay hamburguesas disponibles"
            description="Todavía no se cargaron productos en el catálogo."
            buttonText="Ir al Dashboard"
            buttonHref="/dashboard"
            image="/images/errors/empty-products.svg"
          />
        )}

      </div>
    </main>
  );
};

export default HomeContainer;