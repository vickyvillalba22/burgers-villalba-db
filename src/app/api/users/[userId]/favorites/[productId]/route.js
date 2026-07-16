import { removeFavorite } from "@/lib/users";

export const dynamic = "force-dynamic";

/**
 * Elimina un producto de favoritos
 * DELETE /api/users/[userId]/favorites/[productId]
 */
export async function DELETE(request, { params }) {
  try {
    // 1. Obtener parametros de la request
    const { userId, productId } = await params;

    // 2. Llamar a la funcion removeFavorite que ya tiene toda la logica
    const favorites = await removeFavorite({ userId, productId });

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
    console.error("Error removing favorite:", error);

    // Distinguir entre errores de validacion (400) y otros errores (500)
    const isValidationError =
      error.message.includes("obligatorio") ||
      error.message.includes("invalido") ||
      error.message.includes("no existe");

    const statusCode = isValidationError ? 400 : 500;
    const message = isValidationError
      ? error.message
      : "Error al eliminar favorito";

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
