"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAppContext } from "@/app/context/AppContext";

export default function DashboardLayout({ children }) {
  const { activeUser } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!activeUser) {
      router.replace("/login");
    }
  }, [activeUser, router]);

  if (!activeUser) {
    return null;
  }

  if (activeUser.role !== "admin") {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
        <div className="max-w-md rounded-lg bg-white p-8 text-center shadow">
            <h1 className="text-2xl font-semibold text-slate-900">
            Acceso denegado
            </h1>

            <p className="mt-4 text-slate-600">
            No tenés permisos para acceder al panel de administración.
            </p>
        </div>
        </main>
    );
    }

  return children;
}