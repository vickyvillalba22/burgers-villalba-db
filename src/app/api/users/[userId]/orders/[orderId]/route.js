import { getOrderById } from "@/lib/orders";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  try {
    const { userId, orderId } = await params;

    const order = await getOrderById(userId, orderId);

    return Response.json(
      {
        success: true,
        order,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 404,
      }
    );
  }
}