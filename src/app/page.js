import HomeContainer from "@/containers/HomeContainer";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getProducts();

  return <HomeContainer products={products} />;
}