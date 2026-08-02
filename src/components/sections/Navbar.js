'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { useAppContext } from "@/app/context/AppContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"}`}>

      <nav className="mx-auto max-w-6xl px-6 py-4 text-slate-900">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            {/* Hamburger Toggle */}
            <button 
              className="flex items-center justify-center p-2 rounded-xl bg-white shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon 
                icon={isMenuOpen ? "hugeicons:cancel-01" : "hugeicons:menu-01"} 
                className="w-6 h-6" 
              />
            </button>

            <div className="hidden sm:block">
               <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                Hi, {activeUser?.name || "Guest"}! 👋
              </p>
              <h1 className="text-xl font-bold leading-none mt-1">
                Crispy. Juicy. Always Delicious.
              </h1>
            </div>
          </div>

          <Link className="sm:hidden text-lg fontDeco text-(--accent)" href="/">
            Best Burgers
          </Link>

          <div className="flex items-center gap-2">
            <button onClick={toggleCart} className="p-2 rounded-xl bg-white shadow-sm border border-slate-100 relative">
              <Icon icon="hugeicons:shopping-cart-01" className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold border-2 border-white">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Title & Welcome (Visible only on desktop) */}
        <div className="hidden lg:flex flex-col mt-4">
           <p className="text-sm text-slate-500 font-medium">
            Hi, {activeUser?.name || "Guest"}! 👋
          </p>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold leading-tight mt-1">
              Crispy. Juicy.<br />Always Delicious.
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 self-end mb-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium hover:bg-slate-100 hover:text-slate-950 transition-colors"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}

              {activeUser?.role === "admin" && (
                <Link
                  href="/dashboard"
                  className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium hover:bg-slate-100 hover:text-slate-950 transition-colors"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-slate-100 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
            {links.map((link) => (
              <Link
                key={link.href}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium hover:bg-slate-100 transition-colors"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon icon={link.icon} className="w-5 h-5 text-amber-500" />
                {link.label}
              </Link>
            ))}

            {activeUser?.role === "admin" && (
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium hover:bg-slate-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon icon="hugeicons:dashboard-square-01" className="w-5 h-5 text-amber-500" />
                Dashboard
              </Link>
            )}

            <Link
              href="/favorites"
              className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <Icon icon="hugeicons:favourite" className="w-5 h-5 text-amber-500" />
                Favoritos
              </div>
              {favoritesCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs text-white">
                  {favoritesCount}
                </span>
              )}
            </Link>

            <div className="h-px bg-slate-100 my-2" />

            {activeUser ? (
              <>
                <div className="px-4 py-2 text-sm text-slate-500 font-medium">
                  Hola, {activeUser.name}
                </div>
                <Link
                  href="/user"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium hover:bg-slate-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon icon="hugeicons:user-01" className="w-5 h-5 text-amber-500" />
                  Mi perfil
                </Link>
                <button
                  onClick={() => {
                    logoutUser();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium hover:bg-slate-100 hover:text-red-600 transition-colors w-full text-left"
                >
                  <Icon icon="hugeicons:logout-01" className="w-5 h-5 text-red-500" />
                  Cerrar sesión
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2 p-2">
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold bg-slate-100 hover:bg-slate-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Registro
                </Link>
              </div>
            )}
          </div>
        )}

      </nav>

    </header>
  );
}
