import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

/**
 * Crea y guarda un nuevo usuario en la base de datos
 * @param {Object} params - Parámetros del usuario
 * @param {string} params.name - Nombre del usuario
 * @param {string} params.email - Email del usuario
 * @param {string} params.password - Contraseña del usuario
 * @returns {Promise<Object>} Usuario creado
 */
export async function createUser({ name, email, password }) {
  // Conectar a la base de datos
  await connectDB();

  // VALIDACIONES BACKEND
  // 1. Validar que existan los campos obligatorios
  if (!name || typeof name !== "string" || name.trim() === "") {
    throw new Error("El nombre es obligatorio");
  }

  if (!email || typeof email !== "string" || email.trim() === "") {
    throw new Error("El email es obligatorio");
  }

  if (!password || typeof password !== "string" || password === "") {
    throw new Error("La contraseña es obligatoria");
  }

  // 2. Verificar que no exista otro usuario con el mismo email
  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw new Error("El email ya está registrado");
  }

  // 3. Crear instancia del modelo User
  const newUser = new User({
    name: name.trim(),
    email: email.toLowerCase(),
    password,
    favorites: [], // Inicializar como array vacío
  });

  // 4. Guardar el usuario en MongoDB
  const savedUser = await newUser.save();

  // 5. Devolver el usuario creado
  return savedUser;
}
