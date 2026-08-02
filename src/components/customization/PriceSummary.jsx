import { calculatePrice } from "@/lib/calculatePrice";
import { burgerCustomizationConfig } from "@/lib/customizationConfig";
import { useAppContext } from "@/app/context/AppContext";
import { Icon } from "@iconify/react";

const PriceSummary = ({ product, customization, showButton=true }) => {
  const size = burgerCustomizationConfig.sizes.find(
    (item) => item.value === customization.size
  );

  const patty = burgerCustomizationConfig.pattyTypes.find(
    (item) => item.value === customization.pattyType
  );

  const fries = burgerCustomizationConfig.fries.find(
    (item) => item.value === customization.fries
  );

  const drink = burgerCustomizationConfig.drinks.find(
    (item) => item.value === customization.drink
  );

  const extras = customization.extras.map((extraValue) =>
    burgerCustomizationConfig.extras.find(
      (item) => item.value === extraValue
    )
  );

  const total = calculatePrice(product, customization);

  const { addToCart } = useAppContext();

  return (
    <section className="sticky top-6 h-fit rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

      <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
        <Icon icon="hugeicons:receipt-01" className="w-5 h-5 text-amber-500" />
        Resumen del pedido
      </h3>

      <div className="space-y-3 text-sm">

        <div className="flex justify-between">
          <span className="text-zinc-600">
            Precio base
          </span>

          <span className="font-medium">
            ${product.price}
          </span>
        </div>

        {size && size.price > 0 && (
          <div className="flex justify-between">
            <span className="text-zinc-600">
              {size.label}
            </span>

            <span className="font-medium">
              +${size.price}
            </span>
          </div>
        )}

        {patty && patty.priceModifier !== 0 && (
          <div className="flex justify-between">
            <span className="text-zinc-600">
              Medallón {patty.label}
            </span>

            <span className="font-medium">
              {patty.priceModifier > 0 ? "+" : ""}
              ${patty.priceModifier}
            </span>
          </div>
        )}

        {extras.map(
          (extra) =>
            extra && (
              <div
                key={extra.value}
                className="flex justify-between"
              >
                <span className="text-zinc-600">
                  {extra.label}
                </span>

                <span className="font-medium">
                  +${extra.price}
                </span>
              </div>
            )
        )}

        {fries && (
          <div className="flex justify-between">
            <span className="text-zinc-600">
              Papas {fries.label}
            </span>

            <span className="font-medium">
              +${fries.price}
            </span>
          </div>
        )}

        {drink && (
          <div className="flex justify-between">
            <span className="text-zinc-600">
              {drink.label}
            </span>

            <span className="font-medium">
              +${drink.price}
            </span>
          </div>
        )}

      </div>

      <div className="my-6 border-t border-zinc-200" />

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold flex items-center gap-1.5">
          <Icon icon="hugeicons:money-01" className="w-5 h-5 text-amber-500" />
          Total
        </span>

        <span className="text-2xl font-bold text-(--accent)">
          ${total}
        </span>
      </div>

    {showButton && (
      <button
        disabled={product.stock === 0}
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold text-white transition cursor-pointer ${
          product.stock > 0
            ? "bg-(--accent) hover:scale-[1.02]"
            : "cursor-not-allowed bg-slate-400"
        }`}
        onClick={() => {
          addToCart(product, customization);
        }}
      >
        <Icon icon="hugeicons:shopping-cart-01" className="w-5 h-5" />
        {product.stock > 0
          ? "Agregar al carrito"
          : "Sin stock"}
      </button>
    )}

    </section>
  );
};

export default PriceSummary;