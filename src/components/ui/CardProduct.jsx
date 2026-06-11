import Image from "next/image";
import Link from "next/link";

function getProductImageSrc(image) {
  if (!image) return "";

  if (image.startsWith("/")) {
    return image;
  }

  return `/images/products/${image}`;
}

export default function CardProduct({ product }) {
  return (
    <Link href={`/product/${product._id}`}>
      <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md">

        <div className="relative aspect-4/3 bg-slate-100">
          {product.image ? (
            <Image
              alt={product.name}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              src={getProductImageSrc(product.image)}
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-slate-500">
              Sin imagen
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-lg font-semibold text-slate-950">
              {product.name}
            </h2>

            <p className="shrink-0 text-base font-semibold text-emerald-700">
              ${product.price}
            </p>
          </div>

          <p className="mt-2 line-clamp-3 text-sm text-slate-600">
            {product.description || "Sin descripción"}
          </p>

          {product.categories?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
                {product.categories.map((category) =>
                typeof category === "string" ? (
                    <span
                    key={category}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                    {category}
                    </span>
                ) : (
                    <span
                    key={category._id}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                    {category.name}
                    </span>
                )
                )}
            </div>
            ) : null}

          <p className="mt-4 text-sm text-slate-500">
            Stock: {product.stock}
          </p>
        </div>

      </article>
    </Link>
  );
}