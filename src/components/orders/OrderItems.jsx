import OrderItemCard from "./OrderItemCard";

export default function OrderItems({ items }) {
  return (
    <section>

      <h2 className="text-xl font-semibold mb-4">
        Productos
      </h2>

      <div className="space-y-4">

        {items.map((item) => (
          <OrderItemCard
            key={item._id}
            item={item}
          />
        ))}

      </div>

    </section>
  );
}