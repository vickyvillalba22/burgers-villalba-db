import OrderCustomer from "./OrderCustomer";
import OrderHeader from "./OrderHeader";
import OrderItems from "./OrderItems";
import OrderSummary from "./OrderSummary";
import OrderStatusSelector from "./OrderStatusSelector";

export default function OrderDetail({ order, loading, error, isAdmin = false, onStatusChange }) {
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
  <section className="container mx-auto min-h-[calc(100vh-7rem)] py-8">

    <div className="flex flex-col gap-10">

      <div className="space-y-6 flex justify-between h-[55vh]">

        <OrderHeader order={order} isAdmin={isAdmin} onStatusChange={onStatusChange} />

        <OrderCustomer customer={order.customer} />

      </div>

      <OrderItems items={order.items} />

    </div>
  </section>
);
}