import Image from "next/image";
import BackButton from "@/components/ui/BackButton";

const ProductDetailCont = ({ product }) => {
  return (
    <main className="container mx-auto px-4 py-8">

        <BackButton />

      <div className="grid gap-8 md:grid-cols-2">

        <div className="rounded-xl bg-slate-100">
        {product.image ? (
            <Image
            src={`/images/products/${product.image}`}
            width={600}
            height={600}
            alt={product.name}
            className="w-full rounded-xl"
            />
        ) : (
            <div className="flex aspect-square items-center justify-center text-slate-500">
            Sin imagen
            </div>
        )}
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-4 text-slate-600">
            {product.description}
          </p>

          {product.categories?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
                {product.categories.map((category) => (
                <span
                    key={typeof category === "string" ? category : category._id}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                    {typeof category === "string" ? category : category.name}
                </span>
                ))}
            </div>
            ) : null}

        <div className="mt-6 space-y-2">
            <p className="text-3xl font-bold text-emerald-700">
                ${product.price}
            </p>

            {product.stock > 0 ? (
            <p className="text-sm font-medium text-emerald-600">
                Stock disponible: {product.stock}
            </p>
            ) : (
            <p className="text-sm font-medium text-red-600">
                Sin stock disponible
            </p>
            )}

        </div>

        <button
            disabled={product.stock === 0}
            className={`mt-6 rounded-lg px-6 py-3 text-white transition ${
                product.stock > 0
                ? "bg-black hover:bg-slate-800"
                : "cursor-not-allowed bg-slate-400"
            }`}
            >
            {product.stock > 0 ? "Agregar al carrito" : "Sin stock"}
        </button>
    </div>

      </div>

    </main>
  )
}

export default ProductDetailCont