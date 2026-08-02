'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { useAppContext } from "@/app/context/AppContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home", icon: "hugeicons:home-01" },
    { href: "/categories", label: "Categorias", icon: "hugeicons:filter" },
    /*{ href: "/build-burger", label: "Armá tu hamburguesa", icon: "hugeicons:burger-01" },*/
  ];

  const { toggleCart, cartItemsCount, favoritesCount, activeUser, logoutUser } = useAppContext();

  return (

    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>

      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 text-slate-900 sm:flex-row sm:items-center sm:justify-between">
        
        <Link className="text-[20px] fontDeco text-(--accent) flex items-center gap-2" href="/">
          {/* <Icon icon="hugeicons:burger-01" className="w-6 h-6 text-amber-500" /> */}
          Best Burgers
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950"
              href={link.href}
            >
              {/* <Icon icon={link.icon} className="w-5 h-5" /> */}
              {link.label}
            </Link>
          ))}

          {activeUser?.role === "admin" && (
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950"
            >
              {/* <Icon icon="hugeicons:dashboard-square-01" className="w-5 h-5" /> */}
              Dashboard
            </Link>
          )}

          <Link
            href="/favorites"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950"
          >
            {/* <Icon icon="hugeicons:favourite" className="w-5 h-5" /> */}
            Favoritos

            {favoritesCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs text-white">
                {favoritesCount}
              </span>
            )}
          </Link>

          {activeUser ? (
            <>
              <span className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-slate-900">
                {/* <Icon icon="hugeicons:user-01" className="w-5 h-5" /> */}
                Hola, {activeUser.name}
              </span>
              <Link
                href="/user"
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950 cursor-pointer"
              >
                {/* <Icon icon="hugeicons:user-01" className="w-5 h-5" /> */}
                Mi perfil
              </Link>
              <button
                onClick={logoutUser}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950 cursor-pointer"
              >
                {/* <Icon icon="hugeicons:logout-01" className="w-5 h-5" /> */}
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950"
              >
                {/* <Icon icon="hugeicons:login-01" className="w-5 h-5" /> */}
                Login
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 hover:text-slate-950"
              >
                {/* <Icon icon="hugeicons:user-add-01" className="w-5 h-5" /> */}
                Registrarse
              </Link>
            </>
          )}
        </div>

        <button onClick={toggleCart} className="flex items-center gap-2 text-sm hover:bg-slate-100 hover:text-slate-950 rounded-lg px-3 py-2 cursor-pointer">
          <Icon icon="hugeicons:shopping-cart-01" className="w-5 h-5" />
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
