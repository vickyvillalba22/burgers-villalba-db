export default function OrderHeader({ order }) {
  return (
    <header>
      <h1 className="text-3xl font-bold">
        Orden #{order.orderNumber}
      </h1>

      <p>
        Estado: {order.status}
      </p>

      <p>
        Fecha:{" "}
        {new Date(order.createdAt).toLocaleDateString()}
      </p>
    </header>
  );
}