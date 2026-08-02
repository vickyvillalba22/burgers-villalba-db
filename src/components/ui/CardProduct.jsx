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
    <article className="group relative flex flex-col overflow-hidden rounded-[1.5rem] bg-white p-3 sm:p-4 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md border border-slate-50">

      {/* Tags & Favorite */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-red-600 text-white text-[8px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
          Bestseller
        </span>
      </div>

      {showFavoriteToggle && (
        <div className="absolute right-3 top-3 z-10">
          <FavoriteToggle
            product={product}
            requireConfirmOnRemove={requireConfirmOnRemove}
          />
        </div>
      )}

      <Link href={`/product/${product._id}`} className="flex flex-col h-full">

        {/* Product Image */}
        <div className="relative mx-auto aspect-square w-full max-w-[120px] sm:max-w-[160px] mt-4 sm:mt-2">
          {product.image ? (
            <Image
              alt={product.name}
              fill
              src={getProductImageSrc(product.image)}
              className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-[10px] sm:text-sm text-slate-500 bg-slate-50 rounded-2xl">
              Sin imagen
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="mt-3 sm:mt-4 flex-1 flex flex-col">
          <h2 className="text-xs sm:text-base font-bold text-slate-900 leading-tight line-clamp-2">
            {product.name}
          </h2>

          <p className="mt-1 text-[9px] sm:text-[11px] text-slate-400 font-medium line-clamp-1">
            {product.description || "Freshly cooked chicken"}
          </p>

          {/* Rating */}
          <div className="mt-1 sm:mt-2 flex items-center gap-0.5 sm:gap-1">
            <div className="flex text-orange-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Icon key={s} icon="hugeicons:star" className="w-2 h-2 sm:w-3 sm:h-3 fill-current" />
              ))}
            </div>
            <span className="text-[8px] sm:text-[10px] text-slate-400 font-bold ml-0.5">
              4.8
            </span>
          </div>

          {/* Price & Action */}
          <div className="mt-3 sm:mt-4 flex items-center justify-between">
            <span className="text-sm sm:text-xl font-black text-slate-900">
              ${product.price}
            </span>
            
          </div>
        </div>

      </Link>

    </article>
  );
}
