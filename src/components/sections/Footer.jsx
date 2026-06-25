import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:justify-between">

        <div>
          <p className="text-3xl fontDeco">
            Best Burgers
          </p>

          <p className="mt-2 max-w-sm text-sm text-slate-600">
            Armá tu hamburguesa ideal eligiendo pan, queso, toppings y extras.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold uppercase">
            Navegación
          </h3>

          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/">Inicio</Link>
            </li>

            <li>
              <Link href="/categories">Categorías</Link>
            </li>

            <li>
              <Link href="/favorites">Favoritos</Link>
            </li>

            <li>
              <Link href="/cart">Carrito</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold uppercase">
            Contacto
          </h3>

          <ul className="space-y-2 text-sm text-slate-600">
            <li>Buenos Aires, Argentina</li>
            <li>info@burgerfactory.com</li>
            <li>+54 11 1234-5678</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-black/10 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Burger Factory. Todos los derechos reservados.
      </div>
    </footer>
  );
}