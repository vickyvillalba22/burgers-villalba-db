import { getOrdersByUser } from "@/lib/orders";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
    

  try {
    const { userId } = await params;

    console.log(userId);

    const orders = await getOrdersByUser(userId);

    return Response.json(
      {
        success: true,
        orders,
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
        status: 500,
      }
    );
  }
}