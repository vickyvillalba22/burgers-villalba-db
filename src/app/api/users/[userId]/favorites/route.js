import { getFavorites, addFavorite } from "@/lib/users";

export const dynamic = "force-dynamic";

/**
 * Obtiene los favoritos de un usuario
 * GET /api/users/[userId]/favorites
 */
export async function GET(request, { params }) {
  try {
    // 1. Obtener parametros de la request
    const { userId } = await params;

    // 2. Llamar a la funcion getFavorites que ya tiene toda la logica
    const favorites = await getFavorites({ userId });

    // 3. Responder con exito
    return Response.json(
      {
        success: true,
        favorites,
      },
      { status: 200 }
    );
  } catch (error) {
    // 4. Manejar errores
    console.error("Error getting favorites:", error);

    // Distinguir entre errores de validacion (400) y otros errores (500)
    const isValidationError =
      error.message.includes("obligatorio") ||
      error.message.includes("invalido") ||
      error.message.includes("no existe");

    const statusCode = isValidationError ? 400 : 500;
    const message = isValidationError
      ? error.message
      : "Error al obtener favoritos";

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
 * Agrega un producto a favoritos
 * POST /api/users/[userId]/favorites
 */
export async function POST(request, { params }) {
  try {
    // 1. Obtener parametros y body de la request
    const { userId } = await params;
    const body = await request.json();
    const { productId } = body;

    // 2. Llamar a la funcion addFavorite que ya tiene toda la logica
    const favorites = await addFavorite({ userId, productId });

    // 3. Responder con exito
    return Response.json(
      {
        success: true,
        favorites,
      },
      { status: 201 }
    );
  } catch (error) {
    // 4. Manejar errores
    console.error("Error adding favorite:", error);

    // Distinguir entre errores de validacion (400) y otros errores (500)
    const isValidationError =
      error.message.includes("obligatorio") ||
      error.message.includes("invalido") ||
      error.message.includes("no existe");

    const statusCode = isValidationError ? 400 : 500;
    const message = isValidationError
      ? error.message
      : "Error al agregar favorito";

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
