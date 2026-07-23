import Link from "next/link";
import UserInfo from "./UserInfo";
import { useEffect, useState } from "react";

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
    <section className="container mx-auto py-10">

      <h1 className="text-3xl font-bold mb-8">
        Mi Perfil
      </h1>

      <div>

        <UserInfo user={user} />

        <div>

          <div>
            <span>Favoritos</span>
            <strong>{favoritesCount}</strong>
          </div>

          <div>
            <span>Órdenes</span>
            <strong>{orders.length}</strong>
          </div>

        </div>

        <div>

          <Link href="/favorites">
            Ver favoritos
          </Link>

          <Link href="/user/orders">
            Ver mis órdenes
          </Link>

          {/* Próximamente:
                <UserOrders />
            */}

        </div>

      </div>

    </section>
  );
}