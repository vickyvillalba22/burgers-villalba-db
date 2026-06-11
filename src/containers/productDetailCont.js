import Image from "next/image";

const ProductDetailCont = ({ product }) => {
  return (
    <main className="container mx-auto px-4 py-8">

      <div className="grid gap-8 md:grid-cols-2">

        <div>

            <Image
                src={`/images/products/${product.image}`}
                width={100}
                height={100}
                alt={product.name}
                className="w-full rounded-xl"
            />

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

            <p className="text-sm text-slate-500">
                Stock disponible: {product.stock}
            </p>
            </div>

          <button className="mt-6 rounded-lg bg-black px-6 py-3 text-white">
            Agregar al carrito
          </button>
        </div>

      </div>

    </main>
  )
}

export default ProductDetailCont