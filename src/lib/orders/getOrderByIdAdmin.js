import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";

/**
 * Obtiene una orden por su ID para el panel de administración.
 * @param {string} orderId
 * @returns {Promise<Object>}
 */
export async function getOrderByIdAdmin(orderId) {
  await connectDB();

  const order = await Order.findById(orderId);

  if (!order) {
    throw new Error("Orden no encontrada");
  }

  return order;
}