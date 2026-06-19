import React from 'react'
import Image from 'next/image'

const BasicDetails = ({product}) => {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

    <div className="rounded-3xl bg-white p-6 h-[30vh]">
        {product.image ? (
        <Image
            src={`/images/products/${product.image}`}
            width={250}
            height={250}
            alt={product.name}
            className="mx-auto w-100px object-contain drop-shadow-xl"
        />
        ) : (
        <div className="flex items-center justify-center text-slate-500">
            Sin imagen
        </div>
        )}
    </div>

  <div className="flex flex-col justify-center">

    <p className="font-decorations text-2xl text-accent">
      smashed
    </p>

    <h1 className="font-titles text-5xl leading-none text-accent md:text-7xl">
      {product.name}
    </h1>

    <p className="mt-4 max-w-lg text-slate-600">
      {product.description}
    </p>

    {product.categories?.length > 0 && (
      <div className="mt-5 flex flex-wrap gap-2">
        {product.categories.map((category) => (
          <span
            key={typeof category === "string" ? category : category._id}
            className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700"
          >
            {typeof category === "string" ? category : category.name}
          </span>
        ))}
      </div>
    )}

    <div className="mt-6 flex items-center gap-4">
      <span className="text-4xl font-bold text-accent">
        ${product.price}
      </span>

      {product.stock > 0 ? (
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          {product.stock} disponibles
        </span>
      ) : (
        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
          Sin stock
        </span>
      )}
    </div>

    <button
      disabled={product.stock === 0}
      className={`mt-8 w-fit rounded-full px-8 py-4 font-semibold text-white transition ${
        product.stock > 0
          ? "bg-(--accent) hover:scale-105"
          : "cursor-not-allowed bg-slate-400"
      }`}
    >
      {product.stock > 0 ? "Agregar al carrito" : "Sin stock"}
    </button>

  </div>

</section>
  )
}

export default BasicDetails