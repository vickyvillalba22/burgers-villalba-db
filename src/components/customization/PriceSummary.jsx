import { calculateProductPrice } from "@/lib/calculatePrice";

const PriceSummary = ({ product, customization }) => {

  const totalPrice = calculateProductPrice(
    product,
    customization
  );

  return (
    <section>

      <p>
        Precio base: ${product.price}
      </p>

      <p>
        Extra tamaño: +${customization.sizePrice}
      </p>

      <h3>
        Total: ${totalPrice}
      </h3>

    </section>
  );
};

export default PriceSummary;