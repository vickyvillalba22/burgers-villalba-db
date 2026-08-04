import Link from "next/link";
import { Icon } from "@iconify/react";

const UserActions = ({ favoritesCount, orders }) => {

    console.log(favoritesCount);
    
  const cards = [
    {
      href: "/favorites",
      title: "Favoritos",
      value: favoritesCount,
      subtitle: "Productos guardados",
      icon: "hugeicons:favourite",
    },
    {
      href: "/user/orders",
      title: "Órdenes",
      value: orders.length,
      subtitle: "Compras realizadas",
      icon: "hugeicons:shopping-bag-01",
    },
  ];

  return (
    <section>
      <h3 className="mb-6 text-xl font-bold text-slate-900">
        Tu actividad
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-sm text-slate-500">
                  {card.title}
                </span>

                <h4 className="mt-2 text-4xl font-bold text-slate-900">
                  {card.value}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  {card.subtitle}
                </p>
              </div>

              <div className="rounded-2xl bg-orange-100 p-3 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                <Icon
                  icon={card.icon}
                  className="h-7 w-7"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-orange-500">
              Ver detalle
              <Icon
                icon="hugeicons:arrow-right-01"
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UserActions;