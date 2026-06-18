import Image from "next/image";
import BackButton from "@/components/ui/BackButton";
import RelatedProducts from "@/components/RelatedProducts";
import CustomExistingProduct from "@/components/CustomExistingProduct";
import BasicDetails from "@/components/ui/sections/BasicDetails";

const ProductDetailCont = ({ product }) => {
  return (
    <main className="container mx-auto px-4 py-8">

        <BackButton />

        <BasicDetails product={product} />

        <CustomExistingProduct />

        <RelatedProducts />

    </main>
  )
}

export default ProductDetailCont