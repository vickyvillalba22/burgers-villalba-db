import { burgerCustomizationConfig } from "@/lib/customizationConfig";
import { Icon } from "@iconify/react";

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
      className={`w-full rounded-lg border p-4 text-left transition cursor-pointer flex items-center justify-between ${
        selected
          ? "border-(--accent) bg-orange-50"
          : "hover:border-zinc-400"
      }`}
      key={label}
    >
      <div>
        <p className="font-semibold">
          {label}
        </p>

        <p className="text-sm text-zinc-500">
          ${price}
        </p>
      </div>
      {selected && (
        <Icon icon="hugeicons:checkmark-circle-02" className="w-5 h-5 text-amber-500" />
      )}
    </button>
  );

  switch (step) {

    case 1:
      return (
        <section className="rounded-xl border p-6">

          <h2 className="mb-6 text-2xl font-bold flex items-center gap-2">
            <Icon icon="hugeicons:burger-01" className="w-6 h-6 text-amber-500" />
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

          <h2 className="mb-6 text-2xl font-bold flex items-center gap-2">
            <Icon icon="hugeicons:dish-01" className="w-6 h-6 text-amber-500" />
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

          <h2 className="mb-6 text-2xl font-bold flex items-center gap-2">
            <Icon icon="hugeicons:add-circle-half-dot" className="w-6 h-6 text-amber-500" />
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

          <h2 className="mb-6 text-2xl font-bold flex items-center gap-2">
            <Icon icon="hugeicons:french-fries" className="w-6 h-6 text-amber-500" />
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

          <h2 className="mb-6 text-2xl font-bold flex items-center gap-2">
            <Icon icon="hugeicons:cup-01" className="w-6 h-6 text-amber-500" />
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