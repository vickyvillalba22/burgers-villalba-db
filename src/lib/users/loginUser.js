import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

/**
 * Inicia sesión de un usuario
 * @param {Object} params - Parámetros del login
 * @param {string} params.email - Email del usuario
 * @param {string} params.password - Contraseña del usuario
 * @returns {Promise<Object>} Usuario autenticado (sin password)
 */
export async function loginUser({ email, password }) {
  // Conectar a la base de datos
  await connectDB();

  // VALIDACIONES BACKEND
  // 1. Validar que existan los campos obligatorios
  if (!email || typeof email !== "string" || email.trim() === "") {
    throw new Error("El email es obligatorio");
  }

  if (!password || typeof password !== "string" || password === "") {
    throw new Error("La contraseña es obligatoria");
  }

  // 2. Buscar el usuario por email (incluyendo password para comparar)
  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) {
    throw new Error("Credenciales inválidas");
  }

  // 3. Comparar la contraseña
  if (user.password !== password) {
    throw new Error("Credenciales inválidas");
  }

  // 4. Convertir a objeto plain y eliminar password
  const userWithoutPassword = user.toObject();
  delete userWithoutPassword.password;

  // 5. Devolver el usuario sin password
  return userWithoutPassword;
}
