import React from 'react'

import OptionGroup from './OptionGroup';
import OptionSelector from './OptionSelector';

import { burgerCustomizationConfig } from "@/lib/customizationConfig";

const ProdCustomization = ({product, customization, setCustomization}) => {

    const removableIngredients = (product.ingredients || [])
        .filter(
            (ingredient) =>
            !ingredient.toLowerCase().includes("pan") &&
            !ingredient.toLowerCase().includes("medallón")
        )
        .map((ingredient) => ({
            value: ingredient,
            label: ingredient,
        }));

    console.log(product.ingredients);
    

  return (
    <section className='flex flex-col gap-6'>

        <h3 className='text-[28px]'>Product customization</h3>

        {/*TAMAÑO*/}
        <OptionGroup title="Tamaño">
            <OptionSelector
                type="radio"
                options={burgerCustomizationConfig.sizes}
                value={customization.size}
                onChange={(option) =>
                setCustomization((prev) => ({
                    ...prev,
                    size: option.value
                }))
                }
            />
        </OptionGroup>

        {/*TIPO DE MEDALLÓN*/}
        <OptionGroup title="Tipo de Medallón">
            <OptionSelector
                type="radio"
                options={burgerCustomizationConfig.pattyTypes}
                value={customization.pattyType}
                onChange={(option) =>
                setCustomization((prev) => ({
                    ...prev,
                    pattyType: option.value,
                }))
                }
            />
        </OptionGroup>

        {/*SACAR INGREDIENTES*/}
        <OptionGroup title="Quitar Ingredientes">
            <OptionSelector
                type="checkbox"
                options={removableIngredients}
                value={customization.removedIngredients}
                onChange={(option) =>
                setCustomization((prev) => ({
                    ...prev,
                    removedIngredients: prev.removedIngredients.includes(option.value)
                    ? prev.removedIngredients.filter(
                        (item) => item !== option.value
                        )
                    : [...prev.removedIngredients, option.value],
                }))
                }
            />
        </OptionGroup>

        {/*EXTRAS*/}
        <OptionGroup title="Extras">
            <OptionSelector
                type="checkbox"
                options={burgerCustomizationConfig.extras}
                value={customization.extras}
                onChange={(option) =>
                setCustomization((prev) => ({
                    ...prev,
                    extras: prev.extras.includes(option.value)
                    ? prev.extras.filter((item) => item !== option.value)
                    : [...prev.extras, option.value],
                }))
                }
            />
        </OptionGroup>

        {/*PAPAS*/}
        <OptionGroup title="Papas">
            <OptionSelector
                type="radio"
                options={burgerCustomizationConfig.fries}
                value={customization.fries}
                onChange={(option) =>
                    setCustomization((prev) => ({
                        ...prev,
                        fries:
                        prev.fries === option.value
                            ? null
                            : option.value,
                    }))
                }
            />
        </OptionGroup>

        {/*BEBIDA*/}
        <OptionGroup title="Bebida">
            <OptionSelector
                type="radio"
                options={burgerCustomizationConfig.drinks}
                value={customization.drink}
                onChange={(option) =>
                    setCustomization((prev) => ({
                        ...prev,
                        drink:
                        prev.drink === option.value
                            ? null
                            : option.value,
                    }))
                }
            />
        </OptionGroup>

    </section>
  )
}

export default ProdCustomization