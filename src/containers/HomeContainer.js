import Link from "next/link";
import ProductGrid from "@/components/sections/ProductGrid";
import ErrorMsg from "@/components/ui/ErrorMsg";
import HeroSection from "@/components/sections/HeroSection";

const HomeContainer = ({ products }) => {

  return (
    <main className="min-h-screen px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">

        <HeroSection />

        <Link href='/build-burger'>Crear mi hamburguesa</Link>

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