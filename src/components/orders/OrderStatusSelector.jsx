"use client";

import { useState } from "react";

const STATUS_OPTIONS = [
  {
    value: "Active",
    label: "Activa",
  },
  {
    value: "Closed",
    label: "Cerrada",
  },
  {
    value: "Shipped",
    label: "Enviada",
  },
  {
    value: "Canceled",
    label: "Cancelada",
  },
];

export default function OrderStatusSelector({
  order,
  onStatusChange,
}) {
  const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);

  async function handleChange(event) {
    const newStatus = event.target.value;

    setStatus(newStatus);
    setLoading(true);

    try {
      const response = await fetch(
        `/api/orders/${order._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      onStatusChange?.(data.order);
    } catch (error) {
      console.error(error);
      alert(error.message);
      setStatus(order.status);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col">
      <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
        Estado
      </label>

        <select
        value={status}
        disabled={loading}
        onChange={handleChange}
        className="mt-1 text-lg font-semibold text-slate-900"
        >
        {STATUS_OPTIONS.map((option) => (
            <option
            key={option.value}
            value={option.value}
            >
            {option.label}
            </option>
        ))}
        </select>
    </div>
  );
}