"use client";

import { useEffect, useState } from "react";

import OrderDetail from "./OrderDetail";
import BackButton from "../ui/BackButton";

export default function OrderDetailContainer({ userId, orderId }) {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId || !orderId) return;

    const fetchOrder = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/users/${userId}/orders/${orderId}`
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
  }, [userId, orderId]);

  return (
    <>

        <BackButton />

        <OrderDetail
        order={order}
        loading={loading}
        error={error}
        />
        
    </>
    
  );
}