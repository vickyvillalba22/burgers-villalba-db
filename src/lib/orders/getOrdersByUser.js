import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";

/**
 * Obtiene todas las órdenes de un usuario
 * @param {string} userId
 * @returns {Promise<Array>}
 */
export async function getOrdersByUser(userId) {
  await connectDB();

  if (!userId) {
    throw new Error("El ID del usuario es obligatorio");
  }

  const orders = await Order.find({
    user: userId,
  }).sort({
    createdAt: -1,
  });

  return orders;
}