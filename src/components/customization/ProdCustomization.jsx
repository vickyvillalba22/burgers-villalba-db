import React from 'react'

import OptionGroup from './OptionGroup';
import OptionSelector from './OptionSelector';

const ProdCustomization = ({product, customization, setCustomization}) => {

    const sizes = [
        {
            value: "simple",
            label: "Simple",
            price: 0
        },
        {
            value: "doble",
            label: "Doble",
            price: 1500
        },
        {
            value: "triple",
            label: "Triple",
            price: 3000
        },
    ];

  return (
    <section>

        <h2>Product customization</h2>

        <OptionGroup title="Tamaño">

        <OptionSelector
            type="radio"
            options={sizes}
            value={customization.size}
            onChange={(option) =>
            setCustomization((prev) => ({
                ...prev,
                size: option.value,
                sizePrice: option.price,
            }))
            }
        />

        </OptionGroup>

    </section>
  )
}

export default ProdCustomization