"use client";

import { useEffect, useState } from "react";

import DashboardOrders from "@/components/orders/DashboardOrders";

export default function DashboardOrdersContainer() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await fetch("/api/orders");
        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        setOrders(data.orders);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  if (loading) {
    return <p>Cargando órdenes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <DashboardOrders orders={orders} />;
}