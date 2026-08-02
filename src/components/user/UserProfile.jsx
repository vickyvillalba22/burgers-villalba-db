import Link from "next/link";
import UserInfo from "./UserInfo";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function UserProfile({ user, favoritesCount }) {

    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const [ordersError, setOrdersError] = useState(null);

    useEffect(() => {
  async function loadOrders() {
    if (!user?._id) return;

    try {
      setLoadingOrders(true);

      const response = await fetch(
        `/api/users/${user._id}/orders`
      );

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setOrders(data.orders);

    } catch (error) {
      console.error(error);
      setOrdersError(error.message);
    } finally {
      setLoadingOrders(false);
    }
  }

  loadOrders();

}, [user]);

  return (
    <section className="container mx-auto py-10 px-4 max-w-4xl">

      <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Icon icon="hugeicons:user-01" className="w-8 h-8 text-amber-500" />
        Mi Perfil
      </h1>

      <div className="space-y-6">

        <UserInfo user={user} />

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-xl border p-6 flex items-center gap-4 bg-white">
            <div className="p-3 bg-amber-50 rounded-full text-amber-500">
              <Icon icon="hugeicons:favourite" className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-sm text-slate-500">Favoritos</span>
              <strong className="text-2xl font-bold text-slate-900">{favoritesCount}</strong>
            </div>
          </div>

          <div className="rounded-xl border p-6 flex items-center gap-4 bg-white">
            <div className="p-3 bg-amber-50 rounded-full text-amber-500">
              <Icon icon="hugeicons:shopping-bag-01" className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-sm text-slate-500">Órdenes</span>
              <strong className="text-2xl font-bold text-slate-900">{orders.length}</strong>
            </div>
          </div>

        </div>

        <div className="flex gap-4">

          <Link
            href="/favorites"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600 transition"
          >
            <Icon icon="hugeicons:favourite" className="w-5 h-5" />
            Ver favoritos
          </Link>

          <Link
            href="/user/orders"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800 transition"
          >
            <Icon icon="hugeicons:shopping-bag-01" className="w-5 h-5" />
            Ver mis órdenes
          </Link>

        </div>

      </div>

    </section>
  );
}