"use client";

import { useContext } from "react";
import { useAppContext } from "@/app/context/AppContext";
import UserProfile from "@/components/user/UserProfile";

export default function UserPage() {
  const { activeUser, favorites } = useAppContext();

  if (!activeUser) {
    return (
      <section className="container mx-auto py-10">
        <h1>Mi perfil</h1>
        <p>Debes iniciar sesión para acceder a esta página.</p>
      </section>
    );
  }

  return (
    <UserProfile
        user={activeUser}
        favoritesCount={favorites.length}
    />
  );
}