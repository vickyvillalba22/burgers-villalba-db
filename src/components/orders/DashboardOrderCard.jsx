import Link from "next/link";

export default function DashboardOrderCard({ order }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold">
            Orden #{order.orderNumber}
          </h2>

          <p className="mt-2 text-slate-600">
            Estado: {order.status}
          </p>

          <p className="text-slate-500">
            {new Date(order.createdAt).toLocaleDateString("es-AR")}
          </p>
        </div>

        <div className="text-right">

          <p className="text-xl font-bold">
            ${order.total}
          </p>

          <Link
            href={`/dashboard/order/${order._id}`}
            className="mt-4 inline-block rounded-lg bg-slate-900 px-4 py-2 text-white"
          >
            Ver detalle
          </Link>

        </div>

      </div>
    </article>
  );
}