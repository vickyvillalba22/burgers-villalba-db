export default function OrderCustomer({ customer }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm w-[60%]">

      <div className="mb-4">

        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Datos del comprador
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Nombre
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {customer.fullName}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Email
          </p>

          <p className="mt-1 font-semibold text-slate-900 break-all">
            {customer.email}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Teléfono
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {customer.phone}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Ciudad
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {customer.city}
          </p>
        </div>


          <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Dirección
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {customer.address}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Código Postal
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {customer.zipCode}
          </p>
          
        </div>

        

        {customer.notes && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:col-span-2">
            <p className="text-xs font-medium uppercase tracking-wide text-amber-700">
              Observaciones
            </p>

            <p className="mt-2 text-slate-700">
              {customer.notes}
            </p>
          </div>
        )}

      </div>

    </section>
  );
}