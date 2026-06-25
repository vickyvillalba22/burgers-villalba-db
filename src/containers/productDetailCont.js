import BackButton from "@/components/ui/BackButton";
import RelatedProducts from "@/components/sections/RelatedProducts";
import BasicDetails from "@/components/sections/BasicDetails";
import ProductCustomizationCont from "@/components/customization/ProductCustomizationCont";

const ProductDetailCont = ({ product }) => {

  return (
    <main className="container mx-auto px-4 py-8 flex flex-col items-center">

        <BackButton />

        <div className="flex justify-evenly w-[90%]">

          <BasicDetails product={product} />

          <ProductCustomizationCont product={product} />

        </div>

        <RelatedProducts product={product} />

    </main>
  )
}

export default ProductDetailCont