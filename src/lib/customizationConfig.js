export const burgerCustomizationConfig = {
  sizes: [
    { value: "simple", label: "Simple", price: 0 },
    { value: "doble", label: "Doble", price: 1500 },
    { value: "triple", label: "Triple", price: 3000 },
  ],

    pattyTypes: [
    { value: "carne", label: "Carne", priceModifier: 0 },
    { value: "pollo", label: "Pollo", priceModifier: -500 },
    { value: "vegano", label: "Vegano", priceModifier: -300 },
    ],

  extras: [
    { value: "bacon", label: "Bacon", price: 800 },
    { value: "egg", label: "Huevo", price: 500 },
    { value: "extra-cheese", label: "Queso Extra", price: 700 },
    { value: "onion", label: "Cebolla Caramelizada", price: 600 },
  ],

  fries: [
    { value: "small", label: "Chicas", price: 1000 },
    { value: "medium", label: "Medianas", price: 1500 },
    { value: "large", label: "Grandes", price: 2000 },
  ],

  drinks: [
    { value: "coca", label: "Coca Cola", price: 1200 },
    { value: "sprite", label: "Sprite", price: 1200 },
    { value: "water", label: "Agua", price: 800 },
  ],
};