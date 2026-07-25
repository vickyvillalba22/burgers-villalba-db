import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";

/**
 * Actualiza el estado de una orden.
 * @param {string} orderId
 * @param {string} status
 * @returns {Promise<Object>}
 */
export async function updateOrderStatus(orderId, status) {
  await connectDB();

  if (!status) {
    throw new Error("El estado es obligatorio.");
  }

  const order = await Order.findById(orderId);

  if (!order) {
    throw new Error("Orden no encontrada.");
  }

  order.status = status;

  await order.save();

  return order;
}