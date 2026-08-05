import OrderStatusSelector from "./OrderStatusSelector";
import OrderSummary from "./OrderSummary";

export default function OrderHeader({ order, isAdmin, onStatusChange }) {
  return (
    <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm w-[35%] h-full">
      <div className="flex flex-col justify-between gap-6">

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-amber-600">
            Orden
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            #{order.orderNumber}
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Resumen general de la compra
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl bg-slate-50 flex justify-center items-center py-4">
            
            {isAdmin && order && (
              <OrderStatusSelector
                order={order}
                onStatusChange={onStatusChange}
              />
            )}

          </div>

          <div className="rounded-2xl bg-slate-50 px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Fecha
            </p>

            <p className="mt-1 text-lg font-semibold text-slate-900">
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <OrderSummary total={order.total} />
          </div>

        </div>

      </div>
    </header>
  );
}