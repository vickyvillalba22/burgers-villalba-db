"use client";

import { useAppContext } from "@/app/context/AppContext";
import UserOrderContainer from "@/components/user/UserOrderContainer";

export default function UserOrdersPage() {
  const { activeUser } = useAppContext();

  if (!activeUser) {
    return (
      <section className="container mx-auto py-10">
        <h1 className="text-2xl font-bold">
          Debes iniciar sesión para ver tus órdenes.
        </h1>
      </section>
    );
  }

  return <UserOrderContainer user={activeUser} />;
}