"use client";

import { useAppContext } from "@/app/context/AppContext";
import UserProfile from "@/components/user/UserProfile";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function UserPage() {
  const { activeUser, favorites } = useAppContext();

  if (!activeUser) {
  return (
    <section className="container mx-auto flex min-h-[60vh] items-center justify-center px-6 py-16">
      <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
          <Icon
            icon="hugeicons:user-lock-01"
            className="h-10 w-10 text-orange-500"
          />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Mi perfil
        </h1>

        <p className="mt-3 text-slate-600">
          Debes iniciar sesión para acceder a tu perfil, ver tus órdenes y administrar tus favoritos.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            <Icon icon="hugeicons:login-01" className="h-5 w-5" />
            Iniciar sesión
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <Icon icon="hugeicons:home-01" className="h-5 w-5" />
            Volver al inicio
          </Link>
        </div>

      </div>
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