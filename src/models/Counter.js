import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  sequenceValue: {
    type: Number,
    required: true,
    default: 0,
  },
});

// Check if model exists to avoid recompiling in Next.js
const Counter = mongoose.models.Counter || mongoose.model("Counter", counterSchema);

export default Counter;

/* 
EXPLICACIÓN DE FUNCIONAMIENTO FUTURO:
Este modelo Counter se usará para generar números secuenciales únicos para las órdenes (y otras entidades en el futuro).

Funcionamiento de getNextOrderNumber() (a implementar después):
1. Buscará un documento en la colección counters con _id: "order"
2. Si no existe, lo creará con sequenceValue inicial (ej: 999 para que la primera orden sea 1000)
3. Incrementará el sequenceValue en 1 de forma atómica usando findOneAndUpdate() con la opción new: true
4. Devolverá el nuevo valor de sequenceValue para usarlo como orderNumber en la orden
*/
