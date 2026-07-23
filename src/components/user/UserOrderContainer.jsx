"use client";

import { useEffect, useState } from "react";

import UserOrders from "./UserOrders";

export default function UserOrdersContainer({ user }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?._id) return;

    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`/api/users/${user._id}/orders`);

        if (!response.ok) {
          throw new Error("No se pudieron obtener las órdenes.");
        }

        const data = await response.json();

        setOrders(data.orders);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <UserOrders
      orders={orders}
      loading={loading}
      error={error}
    />
  );
}