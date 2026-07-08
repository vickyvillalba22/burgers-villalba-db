import Counter from "@/models/Counter";
import { connectDB } from "@/lib/mongodb";

/**
 * Genera el siguiente número secuencial para un contador específico
 * @param {string} counterId - Identificador del contador (ej: "order")
 * @returns {Promise<number>} Siguiente número secuencial
 */
export async function getNextSequence(counterId) {
  // Conectar a la base de datos
  await connectDB();

  // Primero, verificar si el contador existe
  let counter = await Counter.findById(counterId);

  if (!counter) {
    // Si no existe, crear el contador con valor inicial 999 y luego incrementar
    counter = await Counter.create({
      _id: counterId,
      sequenceValue: 999,
    });
  }

  // Ahora incrementar de forma atómica (sin conflictos porque el documento ya existe)
  counter = await Counter.findOneAndUpdate(
    { _id: counterId },
    { $inc: { sequenceValue: 1 } },
    { new: true }
  );

  return counter.sequenceValue;
}
