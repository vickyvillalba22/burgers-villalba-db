import { burgerCustomizationConfig } from "@/lib/customizationConfig";

export default function BuilderSummary({
  customization,
}) {

  const size =
    burgerCustomizationConfig.sizes.find(
      item => item.value === customization.size
    );

  const patty =
    burgerCustomizationConfig.pattyTypes.find(
      item => item.value === customization.pattyType
    );

  const fries =
    burgerCustomizationConfig.fries.find(
      item => item.value === customization.fries
    );

  const drink =
    burgerCustomizationConfig.drinks.find(
      item => item.value === customization.drink
    );

  const extras =
    customization.extras.map(extraValue =>
      burgerCustomizationConfig.extras.find(
        item => item.value === extraValue
      )
    );

  return (

    <section className="rounded-xl border p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Resumen
      </h2>

      <div className="space-y-3">

        <p>
          <strong>Tamaño:</strong>{" "}
          {size?.label || "-"}
        </p>

        <p>
          <strong>Medallón:</strong>{" "}
          {patty?.label || "-"}
        </p>

        <p>
          <strong>Extras:</strong>{" "}
          {
            extras.length
              ? extras.map(e => e.label).join(", ")
              : "-"
          }
        </p>

        <p>
          <strong>Papas:</strong>{" "}
          {fries?.label || "-"}
        </p>

        <p>
          <strong>Bebida:</strong>{" "}
          {drink?.label || "-"}
        </p>

      </div>

    </section>

  );
}