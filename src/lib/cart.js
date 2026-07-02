import { calculatePrice } from "./calculatePrice";

export function areCustomizationsEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function addCartItem(
  cart,
  product,
  customization
) {

  const finalPrice = calculatePrice(
    product,
    customization
  );

  const existingItem = cart.find(
    (item) =>
      item.productId === product._id &&
      areCustomizationsEqual(
        item.customizations,
        customization
      )
  );

  if (existingItem) {

    return cart.map((item) =>
      item.cartItemId === existingItem.cartItemId
        ? {
            ...item,
            quantity: item.quantity + 1,
            subtotal:
              (item.quantity + 1) *
              item.unitPrice,
          }
        : item
    );
  }

  return [
    ...cart,
    {
      cartItemId: crypto.randomUUID(),

      productId: product._id,

      name: product.name,

      image: product.image,

      unitPrice: finalPrice,

      quantity: 1,

      customizations: customization,

      subtotal: finalPrice,
    },
  ];
}

export function removeCartItem(
  cart,
  cartItemId
) {
  return cart.filter(
    (item) =>
      item.cartItemId !== cartItemId
  );
}

export function updateCartItemQuantity(
  cart,
  cartItemId,
  quantity
) {

  if (quantity < 1) {
    return removeCartItem(cart, cartItemId);
  }

  return cart.map((item) =>
    item.cartItemId === cartItemId
      ? {
          ...item,
          quantity,
          subtotal:
            quantity * item.unitPrice,
        }
      : item
  );
}

export function getCartTotal(cart) {
  return cart.reduce(
    (acc, item) => acc + item.subtotal,
    0
  );
}

export function getCartItemsCount(cart) {
  return cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
}