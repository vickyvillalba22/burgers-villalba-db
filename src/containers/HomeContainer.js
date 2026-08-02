import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ProductGrid from "@/components/sections/ProductGrid";
import ErrorMsg from "@/components/ui/ErrorMsg";
import HeroBanner from "@/components/sections/HeroBanner";
import CategoryList from "@/components/sections/CategoryList";

const HomeContainer = ({ products, categories }) => {

  return (
    <main className="min-h-screen px-6 py-6 text-slate-900 bg-background">
      <div className="mx-auto max-w-6xl space-y-8">

        {/* Hero Section */}
        <HeroBanner />

        {/* Categories Section */}
        <CategoryList categories={categories} />

        {/* Popular Combos Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Popular Combos</h2>
            <Link href="/categories" className="text-orange-500 text-xs font-bold flex items-center gap-1 hover:underline">
              View All
              <Icon icon="hugeicons:arrow-right-01" className="w-3 h-3" />
            </Link>
          </div>
          
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
        </section>

      </div>
    </main>
  );
};

export default HomeContainer;