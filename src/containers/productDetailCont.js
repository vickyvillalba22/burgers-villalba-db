import BackButton from "@/components/ui/BackButton";
import RelatedProducts from "@/components/sections/RelatedProducts";
import BasicDetails from "@/components/sections/BasicDetails";
import ProductCustomizationCont from "@/components/customization/ProductCustomizationCont";

const ProductDetailCont = ({ product }) => {

  return (
    <main className="container mx-auto px-4 py-8">

        <BackButton />

        <BasicDetails product={product} />

        <ProductCustomizationCont product={product} />

        <RelatedProducts product={product} />

    </main>
  )
}

export default ProductDetailCont