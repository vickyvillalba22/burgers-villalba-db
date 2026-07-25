import { getOrderByIdAdmin, updateOrderStatus } from "@/lib/orders";

export const dynamic = "force-dynamic";

/**
 * Obtiene una orden por ID
 * GET /api/orders/:orderId
 */
export async function GET(request, { params }) {
  try {
    const { orderId } = await params;

    const order = await getOrderByIdAdmin(orderId);

    return Response.json(
      {
        success: true,
        order,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error getting order:", error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 404 }
    );
  }
}

/**
 * Actualiza el estado de una orden.
 * PATCH /api/orders/:orderId
 */
export async function PATCH(request, { params }) {
  try {
    const { orderId } = await params;
    const { status } = await request.json();

    const order = await updateOrderStatus(
      orderId,
      status
    );

    return Response.json(
      {
        success: true,
        order,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating order:", error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 }
    );
  }
}