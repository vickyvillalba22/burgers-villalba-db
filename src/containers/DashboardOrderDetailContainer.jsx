"use client";

import { useEffect, useState } from "react";

import OrderDetail from "@/components/orders/OrderDetail";
import BackButton from "@/components/ui/BackButton";

export default function DashboardOrderDetailContainer({ orderId }) {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!orderId) return;

    const fetchOrder = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/orders/${orderId}`
        );

        if (!response.ok) {
          throw new Error("No se pudo obtener la orden.");
        }

        const data = await response.json();

        setOrder(data.order);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  const handleStatusChange = (updatedOrder) => {
    setOrder(updatedOrder);
};

  return (
    <>
      <BackButton />

      <OrderDetail
        order={order}
        loading={loading}
        error={error}
        onStatusChange={handleStatusChange}
        isAdmin
      />
    </>
  );
}