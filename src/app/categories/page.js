import Link from "next/link";
import { Icon } from "@iconify/react";

import { getCategories } from "@/lib/categories";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8">
          <div className="flex items-center gap-2">
            <Icon icon="hugeicons:filter" className="w-8 h-8 text-amber-500" />
            <h1 className="max-w-3xl text-4xl font-semibold">Categorías</h1>
          </div>
        
            
          <p className="mt-4 max-w-2xl text-base text-slate-600">
            Cada categoria lista los productos asociados desde su pagina publica.
          </p>
        </section>

        {categories.length === 0 ? (
          <p className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
            Todavia no hay categorias cargadas.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category._id}
                className="rounded-lg bg-white p-5 shadow-sm hover:bg-(--medium)/20"
                href={`/category/${category._id}`}
              >
                <h2 className="text-xl font-semibold text-slate-950">
                  {category.name}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {category.description || "Sin descripcion"}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
