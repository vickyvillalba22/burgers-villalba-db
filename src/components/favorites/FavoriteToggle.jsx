"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

import { useAppContext } from "@/app/context/AppContext";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

const FavoriteToggle = ({
  product,
  requireConfirmOnRemove = false,
  showText = false,
  className = "",
}) => {
  const {
    addFavorite,
    removeFavorite,
    isProductFavorite,
  } = useAppContext();

  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);

  const isFavorite = isProductFavorite(product._id);

  const handleRemove = () => {
    removeFavorite(product._id);
    setShowRemoveConfirm(false);
  };

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isFavorite) {
      if (requireConfirmOnRemove) {
        setShowRemoveConfirm(true);
        return;
      }

      removeFavorite(product._id);
      return;
    }

    addFavorite(product);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-pressed={isFavorite}
        aria-label={
          isFavorite
            ? "Quitar de favoritos"
            : "Agregar a favoritos"
        }
        className={`inline-flex items-center justify-center p-2 rounded-full bg-white/80 hover:bg-white shadow-sm hover:scale-110 transition-all cursor-pointer ${className}`}
      >
        <Icon
          icon="hugeicons:favourite"
          className={`w-6 h-6 transition-colors ${
            isFavorite
              ? "text-red-500 fill-red-500"
              : "text-slate-400 hover:text-slate-600 fill-transparent"
          }`}
        />
        {showText && (
          <span className="ml-1.5 text-sm font-medium text-slate-700">
            {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          </span>
        )}
      </button>

      <ConfirmDialog
        open={showRemoveConfirm}
        title="Eliminar de favoritos"
        message={`¿Estás seguro de que deseás eliminar "${product.name}" de favoritos?`}
        buttons={[
          {
            label: "No, cancelar",
            onClick: () => setShowRemoveConfirm(false),
            variant: "secondary",
          },
          {
            label: "Sí, eliminar",
            onClick: handleRemove,
            variant: "primary",
          },
        ]}
      />
    </>
  );
};

export default FavoriteToggle;
