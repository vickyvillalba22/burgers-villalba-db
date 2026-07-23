import Link from "next/link";
import UserOrderCard from "./UserOrderCard";

export default function UserOrders({ orders, loading, error }) {
  if (loading) {
    return (
      <section className="container mx-auto py-10">
        <p>Cargando órdenes...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto py-10">
        <p>{error}</p>
      </section>
    );
  }

  if (orders.length === 0) {
    return (
      <section className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">
          Mis órdenes
        </h1>

        <p>Todavía no realizaste ninguna compra.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">
        Mis órdenes
      </h1>

      <div className="space-y-4">
        {orders.map((order) => (
            <UserOrderCard
                key={order._id}
                order={order}
            />
        ))}
      </div>
    </section>
  );
}