import React from 'react'

import { getRelatedProducts } from "@/app/actions/products";
import CardProduct from "@/components/ui/CardProduct";

const RelatedProducts = async ({ product }) => {
  const relatedProducts = await getRelatedProducts(
    product._id,
    product.categories
  );

  if (!relatedProducts.length) return null;

  return (
    <section>

      <h2>Productos relacionados</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((relatedProduct) => (
          <CardProduct
            key={relatedProduct._id}
            product={relatedProduct}
          />
        ))}
      </div>

    </section>
  );
};

export default RelatedProducts