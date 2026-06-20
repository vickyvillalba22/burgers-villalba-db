import { calculatePrice } from "@/lib/calculatePrice";
import { burgerCustomizationConfig } from "@/lib/customizationConfig";
import { useAppContext } from "@/app/context/AppContext";

const PriceSummary = ({ product, customization }) => {

  //ESTO PASARLO A UN UTIL
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
    <section>
      <h3>Resumen</h3>

      <div>
        <span>Precio base</span>
        <span>${product.price}</span>
      </div>

      {size?.price > 0 && (
        <div>
          <span>{size.label}</span>
          <span>+${size.price}</span>
        </div>
      )}

      {patty?.priceModifier !== 0 && (
        <div>
          <span>Medallón {patty.label}</span>
          <span>
            {patty.priceModifier > 0 ? "+" : ""}
            ${patty.priceModifier}
          </span>
        </div>
      )}

      {extras.map(
        (extra) =>
          extra && (
            <div key={extra.value}>
              <span>{extra.label}</span>
              <span>+${extra.price}</span>
            </div>
          )
      )}

      {fries && (
        <div>
          <span>Papas {fries.label}</span>
          <span>+${fries.price}</span>
        </div>
      )}

      {drink && (
        <div>
          <span>{drink.label}</span>
          <span>+${drink.price}</span>
        </div>
      )}

      <hr />

      <div>
        <strong>Total</strong>
        <strong>${total}</strong>
      </div>

      <button

        disabled={product.stock === 0}

        className={`mt-8 w-fit rounded-full px-8 py-4 font-semibold text-white transition ${
          product.stock > 0
            ? "bg-(--accent) hover:scale-105"
            : "cursor-not-allowed bg-slate-400"
        }`}

        onClick={() => {
          console.log("CLICK");
          addToCart(product, customization);
        }}

      >

        {product.stock > 0 ? "Agregar al carrito" : "Sin stock"}
        
      </button>

    </section>
  );
};

export default PriceSummary;