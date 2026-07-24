import OrderCustomer from "./OrderCustomer";
import OrderHeader from "./OrderHeader";
import OrderItems from "./OrderItems";
import OrderSummary from "./OrderSummary";

export default function OrderDetail({ order, loading, error }) {
  if (loading) {
    return (
      <section className="container mx-auto py-10">
        <p>Cargando orden...</p>
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

  if (!order) {
    return (
      <section className="container mx-auto py-10">
        <p>Orden no encontrada.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-10 space-y-8">

      <OrderHeader order={order} />

      <OrderCustomer customer={order.customer} />

      <OrderItems items={order.items} />

      <OrderSummary total={order.total} />

    </section>
  );
}