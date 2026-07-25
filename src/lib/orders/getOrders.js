import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";

/**
 * Obtiene todas las órdenes del sistema.
 * @returns {Promise<Array>}
 */
export async function getOrders() {
  await connectDB();

  const orders = await Order.find()
    .sort({ createdAt: -1 })
    .lean();

  return orders;
}