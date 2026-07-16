import mongoose from "mongoose";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

/**
 * Sincroniza los favoritos de un usuario combinando favoritos existentes y recibidos
 * @param {Object} params - Parametros de favoritos
 * @param {string} params.userId - Id del usuario
 * @param {Array} params.favorites - Listado de ids de productos favoritos
 * @returns {Promise<Array>} Listado actualizado de favoritos
 */
export async function syncFavorites({ userId, favorites }) {
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

  // 2. Validar que exista el listado de favoritos
  if (!favorites || !Array.isArray(favorites)) {
    throw new Error("Los favoritos son obligatorios");
  }

  const hasInvalidFavorite = favorites.some(
    (productId) =>
      !productId ||
      typeof productId !== "string" ||
      productId.trim() === "" ||
      !mongoose.Types.ObjectId.isValid(productId)
  );

  if (hasInvalidFavorite) {
    throw new Error("Los favoritos contienen productos invalidos");
  }

  // 3. Buscar el usuario
  const user = await User.findById(normalizedUserId);
  if (!user) {
    throw new Error("El usuario no existe");
  }

  // 4. Combinar favoritos existentes con favoritos recibidos sin duplicados
  const favoriteIds = [
    ...user.favorites.map((favoriteId) => favoriteId.toString()),
    ...favorites.map((favoriteId) => favoriteId.trim()),
  ];

  user.favorites = [...new Set(favoriteIds)];

  // 5. Guardar el usuario en MongoDB
  await user.save();

  // 6. Devolver favoritos actualizados
  await user.populate("favorites");
  return user.favorites;
}
