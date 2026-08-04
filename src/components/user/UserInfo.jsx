import { Icon } from "@iconify/react";

export default function UserInfo({ user }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center text-center">

        {/* Avatar */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg">
          <Icon
            icon="hugeicons:user-01"
            className="h-12 w-12"
          />
        </div>

        {/* Nombre */}
        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          {user.name}
        </h2>

        {/* Email */}
        <div className="mt-3 flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
          <Icon
            icon="hugeicons:mail-01"
            className="h-5 w-5 text-orange-500"
          />
          {user.email}
        </div>

        {/* Separador */}
        <div className="my-6 h-px w-full bg-slate-200" />

        {/* Datos */}
        <div className="grid w-full gap-4">

          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
            <div className="rounded-xl bg-orange-100 p-2">
              <Icon
                icon="hugeicons:shopping-bag-01"
                className="h-6 w-6 text-orange-500"
              />
            </div>

            <div className="text-left">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Cuenta
              </p>
              <p className="font-semibold text-slate-900">
                Cliente registrado
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
            <div className="rounded-xl bg-orange-100 p-2">
              <Icon
                icon="hugeicons:security-check"
                className="h-6 w-6 text-orange-500"
              />
            </div>

            <div className="text-left">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Estado
              </p>
              <p className="font-semibold text-green-600">
                Activa
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}