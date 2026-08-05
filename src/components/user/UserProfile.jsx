import Link from "next/link";
import UserInfo from "./UserInfo";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import UserActions from "./UserActions";

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
    <section className="container mx-auto py-10 px-4 max-w-4xl w-[80%]">

      <h1 className="text-3xl font-medium mb-8 flex items-center gap-3">
        <Icon icon="hugeicons:user" className="w-8 h-8 text-amber-500" />
        Mi Perfil
      </h1>

      <div className="space-y-6">

        <UserInfo user={user} />
        <UserActions favoritesCount={favoritesCount} orders = {orders} />

      </div>

    </section>
  );
}