export default function OrderItemCard({ item }) {
  return (
    <article className="border rounded-lg p-4">

      <h3 className="font-semibold">
        {item.name}
      </h3>

      <p>
        Cantidad: {item.quantity}
      </p>

      <p>
        Precio: ${item.price}
      </p>

      <p>
        Subtotal: ${item.subtotal}
      </p>

      {Object.keys(item.customizations || {}).length > 0 && (
        <>
          <h4 className="mt-3 font-medium">
            Customizaciones
          </h4>

          <pre className="text-sm">
            {JSON.stringify(item.customizations, null, 2)}
          </pre>
        </>
      )}

    </article>
  );
}