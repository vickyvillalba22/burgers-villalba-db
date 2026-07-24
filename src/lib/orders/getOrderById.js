import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function getOrderById(userId, orderId) {
  await connectDB();

  const order = await Order.findOne({
    _id: orderId,
    user: userId,
  });

  if (!order) {
    throw new Error("Orden no encontrada.");
  }

  return order;
}