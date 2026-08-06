"use client";

import { useParams } from "next/navigation";

import { useAppContext } from "@/app/context/AppContext";
import OrderDetailContainer from "@/components/orders/OrderDetailContainer";

export default function OrderDetailPage() {
  const { activeUser } = useAppContext();
  const { id } = useParams();

  if (!activeUser) {
    return (
      <section className="container mx-auto py-10">
        <h1 className="text-2xl font-bold">
          Debes iniciar sesión para ver esta orden.
        </h1>
      </section>
    );
  }

  return (
    <div className="flex justify-center">
        <OrderDetailContainer
        userId={activeUser._id}
        orderId={id}
        />
    </div>
    
  );
}