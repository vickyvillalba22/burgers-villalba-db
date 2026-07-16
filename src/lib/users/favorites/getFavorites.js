import mongoose from "mongoose";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

/**
 * Obtiene los favoritos de un usuario
 * @param {Object} params - Parametros de favoritos
 * @param {string} params.userId - Id del usuario
 * @returns {Promise<Array>} Listado de favoritos del usuario
 */
export async function getFavorites({ userId }) {
  // Conectar a la base de datos
  await connectDB();

  // VALIDACIONES BACKEND
  // 1. Validar que exista el usuario
  if (!userId || typeof userId !== "string" || userId.trim() === "") {
    throw new Error("El usuario es obligatorio");
  }

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("El usuario es invalido");
  }

  const normalizedUserId = userId.trim();

  // 2. Buscar el usuario y poblar favoritos
  const user = await User.findById(normalizedUserId).populate("favorites");
  if (!user) {
    throw new Error("El usuario no existe");
  }

  // 3. Devolver favoritos
  return user.favorites;
}
