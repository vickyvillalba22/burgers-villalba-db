import Order from "@/models/Order";
import { getNextSequence, createOrderSnapshot } from "./index";
import { connectDB } from "@/lib/mongodb";

/**
 * Crea y guarda una nueva orden en la base de datos
 * @param {Object} params - Parámetros de la orden
 * @param {Object} params.customer - Datos del cliente
 * @param {Array} params.cart - Array de items del carrito
 * @returns {Promise<Object>} Orden creada
 */
export async function createOrder({ customer, cart }) {
  // Conectar a la base de datos
  await connectDB();

  // VALIDACIONES BACKEND
  // 1. Validar que el carrito no esté vacío
  if (!cart || !Array.isArray(cart) || cart.length === 0) {
    throw new Error("El carrito está vacío");
  }

  // 2. Validar que existan datos del customer
  if (!customer || typeof customer !== "object") {
    throw new Error("Faltan datos del cliente");
  }

  // Validar campos obligatorios del customer (según el schema Order)
  const requiredCustomerFields = ["fullName", "email", "phone", "address", "city"];
  const missingCustomerFields = requiredCustomerFields.filter(field => !customer[field]);
  
  if (missingCustomerFields.length > 0) {
    throw new Error(`Faltan datos obligatorios del cliente: ${missingCustomerFields.join(", ")}`);
  }

  // 3. Obtener siguiente número secuencial de orden
  const orderNumber = await getNextSequence("order");

  // 4. Generar snapshot de productos
  const items = createOrderSnapshot(cart);

  // 5. Calcular total de la orden
  const total = items.reduce((acc, item) => acc + item.subtotal, 0);

  // 6. Validar que el total sea válido (número positivo)
  if (typeof total !== "number" || total <= 0 || isNaN(total)) {
    throw new Error("El total de la orden es inválido");
  }

  // 7. Crear instancia del modelo Order
  const newOrder = new Order({
    orderNumber,
    status: "Active", // Valor por defecto, se puede especificar también
    customer,
    items,
    total,
  });

  // 8. Guardar la orden en MongoDB
  const savedOrder = await newOrder.save();

  // 9. Devolver la orden creada
  return savedOrder;
}
