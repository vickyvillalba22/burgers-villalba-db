import { createUser } from "@/lib/users";

export const dynamic = "force-dynamic";

/**
 * Registra un nuevo usuario
 * POST /api/users/register
 */
export async function POST(request) {
  try {
    // 1. Recibir el body de la request
    const body = await request.json();
    const { name, email, password } = body;

    // 2. Llamar a la función createUser que ya tiene toda la lógica
    const user = await createUser({ name, email, password });

    // 3. Responder con éxito
    return Response.json(
      {
        success: true,
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    // 4. Manejar errores
    console.error("Error registering user:", error);

    // Distinguir entre errores de validación (400) y otros errores (500)
    const isValidationError =
      error.message.includes("obligatorio") ||
      error.message.includes("registrado");

    const statusCode = isValidationError ? 400 : 500;
    const message = isValidationError
      ? error.message
      : "Error al registrar el usuario";

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
