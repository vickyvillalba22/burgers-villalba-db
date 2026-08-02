import React from 'react'
import Image from 'next/image'

import FavoriteToggle from '@/components/favorites/FavoriteToggle'

const BasicDetails = ({product}) => {
  return (
    <section className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col lg:flex-row gap-8 items-center">

    <div className="rounded-3xl p-6 h-[40vh]">
        {product.image ? (
        <Image
            src={`${product.image}`}
            width={400}
            height={300}
            alt={product.name}
            className="mx-auto object-contain drop-shadow-xl h-[40vh]"
        />
        ) : (
        <div className="flex items-center justify-center text-slate-500">
            Sin imagen
        </div>
        )}
    </div>

  <div className="flex flex-col justify-center">

    <h1 className="font-titles text-5xl leading-none text-accent md:text-6xl">
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

    <div className="mt-4">
      <FavoriteToggle product={product} />
    </div>

  </div>

</section>
  )
}

export default BasicDetails