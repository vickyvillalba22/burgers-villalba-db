import Link from "next/link";
import { Icon } from "@iconify/react";

export default function UserOrderCard({ order }) {
  return (
    <article className="rounded-lg p-4 bg-white shadow-sm space-y-2 w-[30%]">
      <p className="flex items-center gap-1.5 font-medium">
        <Icon icon="hugeicons:shopping-bag-01" className="w-4 h-4 text-amber-500" />
        <strong>Orden:</strong> #{order.orderNumber}
      </p>

      <p className="flex items-center gap-1.5 text-sm text-slate-600">
        <Icon icon="hugeicons:information-circle" className="w-4 h-4 text-slate-400" />
        <strong>Estado:</strong> {order.status}
      </p>

      <p className="flex items-center gap-1.5 text-sm text-slate-600">
        <Icon icon="hugeicons:dollar-01" className="w-4 h-4 text-slate-400" />
        <strong>Total:</strong> ${order.total}
      </p>

      <p className="flex items-center gap-1.5 text-sm text-slate-600">
        <Icon icon="hugeicons:calendar-01" className="w-4 h-4 text-slate-400" />
        <strong>Fecha:</strong>{" "}
        {new Date(order.createdAt).toLocaleDateString()}
      </p>

      <Link
        href={`/user/order/${order._id}`}
        className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-amber-600 hover:underline"
      >
        <Icon icon="hugeicons:eye" className="w-4 h-4" />
        <span>Ver detalle</span>
      </Link>
    </article>
  );
}