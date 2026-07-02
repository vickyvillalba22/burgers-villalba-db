"use client";

import { useState } from "react";

import { useAppContext } from "@/app/context/AppContext";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

const FavoriteToggle = ({
  product,
  requireConfirmOnRemove = false,
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
        className={`text-sm font-medium transition hover:opacity-80 ${
          isFavorite
            ? "text-amber-500"
            : "text-slate-600"
        } ${className}`}
      >
        {isFavorite
          ? "Quitar de favoritos"
          : "Agregar a favoritos"}
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
