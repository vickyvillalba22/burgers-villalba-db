import { burgerCustomizationConfig } from "./customizationConfig";

export function calculatePrice(product, customization) {
  let total = product.price;

  // Tamaño
  const size = burgerCustomizationConfig.sizes.find(
    (item) => item.value === customization.size
  );

  if (size) {
    total += size.price;
  }

  // Medallón
  const patty = burgerCustomizationConfig.pattyTypes.find(
    (item) => item.value === customization.pattyType
  );

  if (patty) {
    total += patty.priceModifier || 0;
  }

  // Extras
  customization.extras.forEach((extraValue) => {
    const extra = burgerCustomizationConfig.extras.find(
      (item) => item.value === extraValue
    );

    if (extra) {
      total += extra.price;
    }
  });

  // Papas
  const fries = burgerCustomizationConfig.fries.find(
    (item) => item.value === customization.fries
  );

  if (fries) {
    total += fries.price;
  }

  // Bebida
  const drink = burgerCustomizationConfig.drinks.find(
    (item) => item.value === customization.drink
  );

  if (drink) {
    total += drink.price;
  }

  return total;
}