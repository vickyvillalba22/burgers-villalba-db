import { createOrder, getOrders } from "@/lib/orders";

export const dynamic = "force-dynamic";

/**
 * Crea una nueva orden
 * POST /api/orders
 */
export async function POST(request) {
  try {
    // 1. Recibir el body de la request
    const body = await request.json();
    const { customer, cart, userId } = body;

    // 2. Llamar a la función createOrder que ya tiene toda la lógica
    const order = await createOrder({ customer, cart, userId });

    // 3. Responder con éxito
    return Response.json(
      {
        success: true,
        order,
      },
      { status: 201 }
    );
  } catch (error) {
    // 4. Manejar errores
    console.error("Error creating order:", error);
    
    // Distinguir entre errores de validación (400) y otros errores (500)
    const isValidationError = 
      error.message.includes("vacío") || 
      error.message.includes("Faltan datos") || 
      error.message.includes("inválido");
    
    const statusCode = isValidationError ? 400 : 500;
    const message = isValidationError ? error.message : "Error al crear la orden";

    return Response.json(
      {
        success: false,
        message,
        error: error.message,
      },
      { status: statusCode }
    );
  }
}

/**
 * Obtiene todas las órdenes
 * GET /api/orders
 */
export async function GET() {
  try {
    const orders = await getOrders();

    return Response.json(
      {
        success: true,
        orders,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error getting orders:", error);

    return Response.json(
      {
        success: false,
        message: "Error al obtener las órdenes",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
