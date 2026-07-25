import DashboardOrderCard from "./DashboardOrderCard";

export default function DashboardOrders({ orders }) {
  if (orders.length === 0) {
    return (
      <p className="text-slate-600">
        No hay órdenes registradas.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <DashboardOrderCard
          key={order._id}
          order={order}
        />
      ))}
    </div>
  );
}