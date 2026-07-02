"use client";

import { useState } from "react";
import Image from "next/image";

import { useAppContext } from "@/app/context/AppContext";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

function getProductImageSrc(image) {
  if (!image) return "";

  if (image.startsWith("/")) {
    return image;
  }

  return `/images/products/${image}`;
}

const CartItemCard = ({ item }) => {

  const {
    removeFromCart,
    updateQuantity
  } = useAppContext();

  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);

  const handleDecrease = () => {
    if (item.quantity <= 1) {
      setShowRemoveConfirm(true);
      return;
    }

    updateQuantity(item.cartItemId, item.quantity - 1);
  };

  const handleConfirmRemove = () => {
    removeFromCart(item.cartItemId);
    setShowRemoveConfirm(false);
  };

  const handleCancelRemove = () => {
    setShowRemoveConfirm(false);
  };

  return (
    <>
    <article className="rounded-xl border p-4">

      <div className="flex gap-4">

        <div className="relative h-24 w-24 shrink-0">

          {item.image ? (
            <Image
              fill
              alt={item.name}
              src={getProductImageSrc(item.image)}
              className="object-contain"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-slate-500">
              Sin imagen
            </div>
          )}

        </div>

        <div className="flex flex-1 flex-col gap-3">

          <div>

            <h3 className="font-bold">
              {item.name}
            </h3>

            <p className="text-sm text-slate-500">
              Precio unitario: ${item.unitPrice}
            </p>

          </div>

          <div className="text-sm">

            {Object.entries(item.customizations || {}).map(
              ([key, value]) => {

                if (!value) return null;

                if (Array.isArray(value)) {

                  if (value.length === 0) {
                    return null;
                  }

                  return (
                    <div key={key}>
                      <p className="font-medium capitalize">
                        {key}
                      </p>

                      <ul className="ml-4 list-disc">
                        {value.map((itemValue) => (
                          <li key={itemValue}>
                            {itemValue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                return (
                  <p key={key}>
                    <span className="font-medium capitalize">
                      {key}:
                    </span>{" "}
                    {value}
                  </p>
                );
              }
            )}

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <button
                type="button"
                onClick={handleDecrease}
                className="flex h-8 w-8 items-center justify-center rounded-full border"
                aria-label="Disminuir cantidad"
              >
                -
              </button>

              <span className="font-semibold">
                {item.quantity}
              </span>

              <button
                type="button"
                onClick={() =>
                  updateQuantity(
                    item.cartItemId,
                    item.quantity + 1
                  )
                }
                className="flex h-8 w-8 items-center justify-center rounded-full border"
                aria-label="Aumentar cantidad"
              >
                +
              </button>

            </div>

            <p className="font-bold">
              ${item.subtotal}
            </p>

          </div>

          <button
            type="button"
            onClick={() => setShowRemoveConfirm(true)}
            className="w-fit text-sm text-red-500"
          >
            Eliminar
          </button>

        </div>

      </div>

    </article>

    <ConfirmDialog
      open={showRemoveConfirm}
      title="Eliminar producto"
      message={`¿Estás seguro de que deseás eliminar "${item.name}" del carrito?`}
      buttons={[
        {
          label: "No, cancelar",
          onClick: handleCancelRemove,
          variant: "secondary",
        },
        {
          label: "Sí, eliminar",
          onClick: handleConfirmRemove,
          variant: "primary",
        },
      ]}
    />
    </>
  );
};

export default CartItemCard;