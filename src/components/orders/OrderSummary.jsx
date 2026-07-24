export default function OrderSummary({ total }) {
  return (
    <section>

      <h2 className="text-xl font-semibold mb-4">
        Resumen
      </h2>

      <p className="text-2xl font-bold">
        Total: ${total}
      </p>

    </section>
  );
}