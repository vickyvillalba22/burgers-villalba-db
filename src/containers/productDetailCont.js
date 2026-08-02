import BackButton from "@/components/ui/BackButton";
import RelatedProducts from "@/components/sections/RelatedProducts";
import BasicDetails from "@/components/sections/BasicDetails";
import ProductCustomizationCont from "@/components/customization/ProductCustomizationCont";

const ProductDetailCont = ({ product }) => {
  return (
    <main className="container mx-auto min-h-screen px-6 py-8">
      <BackButton />

      <section className="mt-6 grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
        {/* Información del producto */}
        <div className="xl:col-span-4">
          <BasicDetails product={product} />
        </div>

        {/* Customización + Resumen */}
        <div className="xl:col-span-8">
          <ProductCustomizationCont product={product} />
        </div>
      </section>

      <section className="mt-16">
        <RelatedProducts product={product} />
      </section>
    </main>
  );
};

export default ProductDetailCont;