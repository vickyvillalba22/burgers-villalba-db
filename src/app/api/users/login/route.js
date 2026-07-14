import { loginUser } from "@/lib/users";

export const dynamic = "force-dynamic";

/**
 * Inicia sesión de un usuario
 * POST /api/users/login
 */
export async function POST(request) {
  try {
    // 1. Recibir el body de la request
    const body = await request.json();
    const { email, password } = body;

    // 2. Llamar a la función loginUser que ya tiene toda la lógica
    const user = await loginUser({ email, password });

    // 3. Responder con éxito (200)
    return Response.json(
      {
        success: true,
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    // 4. Manejar errores
    console.error("Error logging in user:", error);

    // Distinguir entre tipos de errores para códigos HTTP correctos
    let statusCode;
    let message;

    if (error.message.includes("obligatorio")) {
      statusCode = 400; // Datos faltantes
      message = error.message;
    } else if (error.message.includes("inválidas")) {
      statusCode = 401; // Credenciales inválidas
      message = error.message;
    } else {
      statusCode = 500; // Error interno
      message = "Error al iniciar sesión";
    }

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
