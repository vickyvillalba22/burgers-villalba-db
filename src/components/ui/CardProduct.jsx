import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import FavoriteToggle from "@/components/favorites/FavoriteToggle";

function getProductImageSrc(image) {
  if (!image) return "";

  if (image.startsWith("/")) {
    return image;
  }

  return `/images/products/${image}`;
}

export default function CardProduct({
  product,
  showFavoriteToggle = true,
  requireConfirmOnRemove = false,
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-white p-5 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">

      {showFavoriteToggle && (
        <div className="absolute right-5 top-5 z-10">
          <FavoriteToggle
            product={product}
            requireConfirmOnRemove={requireConfirmOnRemove}
          />
        </div>
      )}

      <Link href={`/product/${product._id}`}>

        <div className="relative mx-auto h-56 w-full">
          {product.image ? (
            <Image
              alt={product.name}
              fill
              src={getProductImageSrc(product.image)}
              className="object-contain drop-shadow-xl"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-500">
              Sin imagen
            </div>
          )}
        </div>

        {product.categories?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.categories.map((category) => (
              <span
                key={typeof category === "string" ? category : category._id}
                className="rounded-full bg-background px-3 py-1 text-xs font-medium text-slate-700"
              >
                {typeof category === "string"
                  ? category
                  : category.name}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4">

          <h2 className="font-titles text-4xl leading-none uppercase text-accent">
            {product.name}
          </h2>

          <p className="mt-3 line-clamp-2 text-sm text-slate-600">
            {product.description || "Sin descripción"}
          </p>

          <div className="mt-4 flex items-end justify-between">

            <span className="text-sm text-slate-500">
              Stock: {product.stock}
            </span>

            <span className="text-3xl font-bold text-slate-900">
              ${product.price}
            </span>

          </div>

        </div>

      </Link>

    </article>
  );
}
