"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

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
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex gap-6">

        <div className="relative h-28 w-28 shrink-0 rounded-2xl bg-slate-50 p-3">

          {item.image ? (
            <Image
              fill
              alt={item.name}
              src={getProductImageSrc(item.image)}
              className="object-contain p-2"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-center text-xs text-slate-500">
              Sin imagen
            </div>
          )}

        </div>

        <div className="flex flex-1 flex-col">

          <div className="flex items-start justify-between gap-4">

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {item.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Precio unitario{" "}
                <span className="font-semibold text-slate-700">
                  ${item.unitPrice}
                </span>
              </p>
            </div>

          </div>

          {Object.keys(item.customizations || {}).length > 0 && (
            <div className="mt-5 rounded-2xl bg-slate-50 p-4">

              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
                Customizaciones
              </h4>

              <div className="space-y-2 text-sm">

                {Object.entries(item.customizations || {}).map(
                  ([key, value]) => {

                    if (!value) return null;

                    if (Array.isArray(value)) {

                      if (value.length === 0) {
                        return null;
                      }

                      return (
                        <div
                          key={key}
                          className="flex items-start justify-between gap-4 border-b border-slate-200 pb-2 last:border-0 last:pb-0"
                        >
                          <span className="font-medium capitalize text-slate-700">
                            {key}
                          </span>

                          <span className="text-right text-slate-500">
                            {value.join(", ")}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={key}
                        className="flex items-start justify-between gap-4 border-b border-slate-200 pb-2 last:border-0 last:pb-0"
                      >
                        <span className="font-medium capitalize text-slate-700">
                          {key}
                        </span>

                        <span className="text-right text-slate-500">
                          {value}
                        </span>
                      </div>
                    );
                  }
                )}

              </div>

            </div>
          )}

          <div className="mt-6 flex items-end justify-between border-t border-slate-200 pt-5">

            <div className="flex items-center gap-3">

              <button
                type="button"
                onClick={handleDecrease}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 hover:bg-amber-100 hover:text-amber-600"
                aria-label="Disminuir cantidad"
              >
                <Icon icon="hugeicons:remove-01" className="h-5 w-5" />
              </button>

              <span className="min-w-8 text-center text-lg font-bold text-slate-900">
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
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 hover:bg-amber-100 hover:text-amber-600"
                aria-label="Aumentar cantidad"
              >
                <Icon icon="hugeicons:add-01" className="h-5 w-5" />
              </button>

            </div>

            <div className="text-right">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Subtotal
              </p>

              <p className="text-2xl font-bold text-amber-600">
                ${item.subtotal}
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={() => setShowRemoveConfirm(true)}
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-all duration-300 hover:bg-red-100 cursor-pointer"
          >
            <Icon icon="hugeicons:trash-01" className="h-4 w-4" />
            <span>Eliminar</span>
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