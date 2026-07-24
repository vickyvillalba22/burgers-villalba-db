export default function OrderCustomer({ customer }) {
  return (
    <section>

      <h2 className="text-xl font-semibold mb-4">
        Datos del comprador
      </h2>

      <div className="space-y-2">

        <p>
          <strong>Nombre:</strong> {customer.fullName}
        </p>

        <p>
          <strong>Email:</strong> {customer.email}
        </p>

        <p>
          <strong>Teléfono:</strong> {customer.phone}
        </p>

        <p>
          <strong>Dirección:</strong> {customer.address}
        </p>

        <p>
          <strong>Ciudad:</strong> {customer.city}
        </p>

        <p>
          <strong>Código Postal:</strong> {customer.zipCode}
        </p>

        {customer.notes && (
          <p>
            <strong>Observaciones:</strong> {customer.notes}
          </p>
        )}

      </div>

    </section>
  );
}