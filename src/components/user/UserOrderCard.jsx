import Link from "next/link";

export default function UserOrderCard({ order }) {
  return (
    <article className="border rounded-lg p-4">
      <p>
        <strong>Orden:</strong> #{order.orderNumber}
      </p>

      <p>
        <strong>Estado:</strong> {order.status}
      </p>

      <p>
        <strong>Total:</strong> ${order.total}
      </p>

      <p>
        <strong>Fecha:</strong>{" "}
        {new Date(order.createdAt).toLocaleDateString()}
      </p>

      <Link
        href={`/user/order/${order._id}`}
        className="inline-block mt-3 text-blue-600 hover:underline"
      >
        Ver detalle
      </Link>
    </article>
  );
}