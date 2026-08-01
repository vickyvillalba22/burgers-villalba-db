import Image from "next/image";

import buildBurgerLayers from "@/lib/customization/buildBurgerLayers";
import {previewLayers, friesImages, drinkImages} from "@/lib/customization/previewLayers";

export default function BuilderPreview({ customization }) {
  const layers = buildBurgerLayers(customization);

return (
  <aside className="rounded-xl border p-6">
    <h2 className="mb-6 text-2xl font-bold">
      Vista previa
    </h2>

    <div className="grid grid-cols-[1fr_140px] grid-rows-2 gap-4">

      {/* Hamburguesa */}
      <div className="row-span-2 flex h-[420px] items-center justify-center">

        <div className="flex w-[280px] flex-col items-center justify-end">
          {layers.map((layer) => {
            const image = previewLayers[layer.type];

            if (!image) return null;

            return (
              <Image
                key={layer.id}
                src={image}
                alt={layer.type}
                width={240}
                height={120}
                draggable={false}
                className="-mb-8 select-none object-contain w-[70%] h-auto"
              />
            );
          })}
        </div>

      </div>

      {/* Papas */}
      <div className="flex items-center justify-center rounded-lg border bg-gray-50">
        {customization.fries && (
          <Image
            src={friesImages[customization.fries]}
            alt="Papas"
            width={90}
            height={90}
            draggable={false}
            className="select-none object-contain"
          />
        )}
      </div>

      {/* Bebida */}
      <div className="flex items-center justify-center rounded-lg border bg-gray-50">
        {customization.drink && (
          <Image
            src={drinkImages[customization.drink]}
            alt="Bebida"
            width={70}
            height={120}
            draggable={false}
            className="select-none object-contain"
          />
        )}
      </div>

    </div>
  </aside>
);
}