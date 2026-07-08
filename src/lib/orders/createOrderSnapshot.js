/**
 * Transforma el carrito en un snapshot de items listo para guardar en una orden
 * @param {Array} cart - Array de items del carrito
 * @returns {Array} Array de items formateados para el modelo Order
 */
export function createOrderSnapshot(cart) {
  return cart.map((cartItem) => ({
    productId: cartItem.productId,
    name: cartItem.name,
    image: cartItem.image,
    price: cartItem.unitPrice, // Mapear unitPrice del carrito a price del snapshot
    quantity: cartItem.quantity,
    customizations: cartItem.customizations,
    subtotal: cartItem.unitPrice * cartItem.quantity, // Calcular subtotal
  }));
}
