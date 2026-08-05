export default function OrderItemCard({ item }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            {item.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Producto personalizado
          </p>
        </div>

        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
          x{item.quantity}
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Precio unitario
          </p>

          <p className="mt-1 text-lg font-bold text-slate-900">
            ${item.price}
          </p>
        </div>

        <div className="rounded-2xl bg-amber-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-amber-700">
            Subtotal
          </p>

          <p className="mt-1 text-xl font-bold text-amber-600">
            ${item.subtotal}
          </p>
        </div>

      </div>

      {Object.keys(item.customizations || {}).length > 0 && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">

          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
            Customizaciones
          </h4>

<ul className="space-y-2 text-sm text-slate-600">
  {Object.entries(item.customizations).map(([key, value]) => (
    <li
      key={key}
      className="flex items-center justify-between border-b border-slate-200 pb-2 last:border-0 last:pb-0"
    >
      <span className="font-medium capitalize text-slate-700">
        {key}
      </span>

      <span className="text-slate-500">
        {Array.isArray(value) ? value.join(", ") : String(value)}
      </span>
    </li>
  ))}
</ul>

        </div>
      )}

    </article>
  );
}