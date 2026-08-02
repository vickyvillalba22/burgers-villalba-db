import HomeContainer from "@/containers/HomeContainer";
import { getProducts } from "@/lib/products";
import { getCategories } from "@/lib/categories";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();

  return <HomeContainer products={products} categories={categories} />;
}