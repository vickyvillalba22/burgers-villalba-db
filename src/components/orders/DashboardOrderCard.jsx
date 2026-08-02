import Link from "next/link";
import { Icon } from "@iconify/react";

export default function DashboardOrderCard({ order }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">

        <div className="space-y-1">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Icon icon="hugeicons:shopping-bag-01" className="w-5 h-5 text-amber-500" />
            Orden #{order.orderNumber}
          </h2>

          <p className="text-slate-600 flex items-center gap-1.5 text-sm">
            <Icon icon="hugeicons:information-circle" className="w-4 h-4 text-slate-400" />
            Estado: {order.status}
          </p>

          <p className="text-slate-500 flex items-center gap-1.5 text-sm">
            <Icon icon="hugeicons:calendar-01" className="w-4 h-4 text-slate-400" />
            {new Date(order.createdAt).toLocaleDateString("es-AR")}
          </p>
        </div>

        <div className="text-right">

          <p className="text-xl font-bold text-amber-600">
            ${order.total}
          </p>

          <Link
            href={`/dashboard/order/${order._id}`}
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800 transition"
          >
            <Icon icon="hugeicons:eye" className="w-4 h-4" />
            <span>Ver detalle</span>
          </Link>

        </div>

      </div>
    </article>
  );
}