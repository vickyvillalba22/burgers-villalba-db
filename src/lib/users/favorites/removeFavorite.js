import mongoose from "mongoose";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

/**
 * Elimina un producto de los favoritos de un usuario
 * @param {Object} params - Parametros de favoritos
 * @param {string} params.userId - Id del usuario
 * @param {string} params.productId - Id del producto
 * @returns {Promise<Array>} Listado actualizado de favoritos
 */
export async function removeFavorite({ userId, productId }) {
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

  // 2. Validar que exista el producto
  if (!productId || typeof productId !== "string" || productId.trim() === "") {
    throw new Error("El producto es obligatorio");
  }

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new Error("El producto es invalido");
  }

  const normalizedProductId = productId.trim();

  // 3. Buscar el usuario
  const user = await User.findById(normalizedUserId);
  if (!user) {
    throw new Error("El usuario no existe");
  }

  // 4. Eliminar el favorito
  user.favorites = user.favorites.filter(
    (favoriteId) => favoriteId.toString() !== normalizedProductId
  );

  // 5. Guardar el usuario en MongoDB
  await user.save();

  // 6. Devolver favoritos actualizados
  await user.populate("favorites");
  return user.favorites;
}
