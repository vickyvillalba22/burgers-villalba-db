import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import ProductDetailCont from "@/containers/productDetailCont";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailCont product={product} />;
}