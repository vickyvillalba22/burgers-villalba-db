import CardProduct from "@/components/ui/CardProduct";

export default function ProductGrid({ products = [] }) {
  if (products.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
        Todavia no hay productos cargados.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {products.map((product) => (
        <CardProduct
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
}
