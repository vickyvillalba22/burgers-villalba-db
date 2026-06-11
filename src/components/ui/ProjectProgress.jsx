export default function ProjectProgress() {
  const stages = [
    "Catálogo",
    "Carrito",
    "Constructor de Hamburguesas",
    "Usuarios",
    "Checkout y Órdenes",
    "Diseño y Pulido Final",
  ];

  // Estamos terminando Catálogo
  const currentStage = 1;

  const progress = (currentStage / stages.length) * 100;

  return (
    <section className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            TP4 - Ecommerce de Hamburguesas
          </h2>

          <p className="text-sm text-slate-500">
            Etapa actual: {stages[currentStage - 1]}
          </p>
        </div>

        <span className="text-2xl font-black text-orange-500">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="mb-6 h-4 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-linear-to-r from-amber-400 via-orange-500 to-red-500 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {stages.map((stage, index) => {
          const completed = index < currentStage;
          const active = index === currentStage - 1;

          return (
            <div
              key={stage}
              className={`rounded-full px-3 py-1 text-sm font-medium flex gap-1 ${
                completed
                  ? "bg-emerald-100 text-emerald-700"
                  : active
                  ? "bg-orange-100 text-orange-700"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              <span>{completed ? "✓" : ""}</span>
              <span>{stage}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}