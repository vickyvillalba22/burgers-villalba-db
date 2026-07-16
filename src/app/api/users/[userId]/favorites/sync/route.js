import { syncFavorites } from "@/lib/users";

export const dynamic = "force-dynamic";

/**
 * Sincroniza los favoritos de un usuario
 * PUT /api/users/[userId]/favorites/sync
 */
export async function PUT(request, { params }) {
  try {
    // 1. Obtener parametros y body de la request
    const { userId } = await params;
    const body = await request.json();
    const { favoriteIds } = body;

    // 2. Llamar a la funcion syncFavorites que ya tiene toda la logica
    const favorites = await syncFavorites({ userId, favorites: favoriteIds });

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
    console.error("Error syncing favorites:", error);

    // Distinguir entre errores de validacion (400) y otros errores (500)
    const isValidationError =
      error.message.includes("obligatorio") ||
      error.message.includes("invalido") ||
      error.message.includes("invalidos") ||
      error.message.includes("no existe");

    const statusCode = isValidationError ? 400 : 500;
    const message = isValidationError
      ? error.message
      : "Error al sincronizar favoritos";

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
