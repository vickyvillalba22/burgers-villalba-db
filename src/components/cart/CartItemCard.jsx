"use client";

import { useAppContext } from "@/app/context/AppContext";

const CartItemCard = ({ item }) => {

  const { removeFromCart, updateQuantity } = useAppContext();

  return (

    <article className="mb-4 rounded-xl border p-4">

        <h3 className="font-bold">
        {item.name}
        </h3>

        {/*cantidad*/}
        <div className="flex items-center gap-3">

        <button
            onClick={() =>
            updateQuantity(
                item.cartItemId,
                item.quantity - 1
            )
            }
            className="flex h-8 w-8 items-center justify-center rounded-full border"
        >
            -
        </button>

        <span className="font-semibold">
            {item.quantity}
        </span>

        <button
            onClick={() =>
            updateQuantity(
                item.cartItemId,
                item.quantity + 1
            )
            }
            className="flex h-8 w-8 items-center justify-center rounded-full border"
        >
            +
        </button>

        </div>

        <p>
            Subtotal: ${item.subtotal}
        </p>

        {/*extras*/}
        {item.customizations.extras.length > 0 && (
            <ul>
                {item.customizations.extras.map((extra) => (
                <li key={extra}>
                    + {extra}
                </li>
                ))}
            </ul>
        )}

       {/*ing eliminados*/}
       {item.customizations.removedIngredients.length > 0 && (
        <ul>
            {item.customizations.removedIngredients.map((ingredient) => (
            <li key={ingredient}>
                - {ingredient}
            </li>
            ))}
        </ul>
        )}

        <button
            onClick={() =>
            removeFromCart(item.cartItemId)
            }
        >
            Eliminar
        </button>

    </article>
  );
};

export default CartItemCard;