import { burgerCustomizationConfig } from "@/lib/customizationConfig";

export default function BuilderWizard({
  step,
  customization,
  setCustomization,
}) {

  const selectOption = (field, value) => {
    setCustomization((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleExtra = (value) => {
    const exists = customization.extras.includes(value);

    if (exists) {
      setCustomization((prev) => ({
        ...prev,
        extras: prev.extras.filter(
          (item) => item !== value
        ),
      }));

      return;
    }

    setCustomization((prev) => ({
      ...prev,
      extras: [...prev.extras, value],
    }));
  };

  const renderCard = ({
    label,
    price,
    selected,
    onClick,
  }) => (
    <button
      onClick={onClick}
      className={`w-full rounded-lg border p-4 text-left transition cursor-pointer ${
        selected
          ? "border-(--accent) bg-orange-50"
          : "hover:border-zinc-400"
      }`}
      key={label}
    >
      <p className="font-semibold">
        {label}
      </p>

      <p className="text-sm text-zinc-500">
        ${price}
      </p>
    </button>
  );

  switch (step) {

    case 1:
      return (
        <section className="rounded-xl border p-6">

          <h2 className="mb-6 text-2xl font-bold">
            Elegí el tamaño
          </h2>

          <div className="space-y-4">

            {burgerCustomizationConfig.sizes.map((size) =>
              renderCard({
                label: size.label,
                price: size.price,
                selected:
                  customization.size === size.value,
                onClick: () =>
                  selectOption("size", size.value),
              })
            )}

          </div>

        </section>
      );

    case 2:
      return (
        <section className="rounded-xl border p-6">

          <h2 className="mb-6 text-2xl font-bold">
            Elegí el medallón
          </h2>

          <div className="space-y-4">

            {burgerCustomizationConfig.pattyTypes.map((patty) =>
              renderCard({
                label: patty.label,
                price: patty.priceModifier,
                selected:
                  customization.pattyType === patty.value,
                onClick: () =>
                  selectOption("pattyType", patty.value),
              })
            )}

          </div>

        </section>
      );

    case 3:
      return (
        <section className="rounded-xl border p-6">

          <h2 className="mb-6 text-2xl font-bold">
            Elegí los extras
          </h2>

          <div className="space-y-4">

            {burgerCustomizationConfig.extras.map((extra) =>
              renderCard({
                label: extra.label,
                price: extra.price,
                selected:
                  customization.extras.includes(extra.value),
                onClick: () =>
                  toggleExtra(extra.value),
              })
            )}

          </div>

        </section>
      );

    case 4:
      return (
        <section className="rounded-xl border p-6">

          <h2 className="mb-6 text-2xl font-bold">
            Elegí las papas
          </h2>

          <div className="space-y-4">

            {burgerCustomizationConfig.fries.map((fries) =>
              renderCard({
                label: fries.label,
                price: fries.price,
                selected:
                  customization.fries === fries.value,
                onClick: () =>
                  selectOption("fries", fries.value),
              })
            )}

          </div>

        </section>
      );

    case 5:
      return (
        <section className="rounded-xl border p-6">

          <h2 className="mb-6 text-2xl font-bold">
            Elegí la bebida
          </h2>

          <div className="space-y-4">

            {burgerCustomizationConfig.drinks.map((drink) =>
              renderCard({
                label: drink.label,
                price: drink.price,
                selected:
                  customization.drink === drink.value,
                onClick: () =>
                  selectOption("drink", drink.value),
              })
            )}

          </div>

        </section>
      );

    default:
      return null;
  }
}