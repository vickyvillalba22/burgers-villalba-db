'use client'

import Link from "next/link";

import { useAppContext } from "@/app/context/AppContext";

export default function Navbar() {

  const links = [
    { href: "/", label: "Home" },
    { href: "/categories", label: "Categorias" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const { toggleCart, cartItemsCount, favoritesCount, activeUser, logoutUser } = useAppContext();

  return (

    <header>

      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 text-slate-900 sm:flex-row sm:items-center sm:justify-between">
        
        <Link className="text-[20px] fontDeco text-(--accent)" href="/">
          Best Burgers
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/favorites"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950"
          >
            Favoritos

            {favoritesCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs text-white">
                {favoritesCount}
              </span>
            )}
          </Link>

          {activeUser ? (
            <>
              <span className="rounded-lg px-3 py-2 text-sm text-slate-900">
                Hola, {activeUser.name}
              </span>
              <button
                onClick={logoutUser}
                className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950 cursor-pointer"
              >
                Cerrar sesión
              </button>
              <Link
                href="/user"
                className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950 cursor-pointer"
              >
                Mi perfil
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>

        <button onClick={toggleCart} className="flex items-center gap-2 text-sm hover:bg-slate-100 hover:text-slate-950 rounded-lg px-3 py-2 cursor-pointer">

          Carrito

          {cartItemsCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {cartItemsCount}
            </span>
          )}

      </button>

      </nav>

    </header>
  );
}
