export function calculateProductPrice(
  product,
  customization
) {
  if (!product) return 0;

  let total = product.price;

  total += customization.sizePrice || 0;

  return total;
}