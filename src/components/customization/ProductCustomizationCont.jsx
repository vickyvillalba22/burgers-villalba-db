"use client";

import { useState } from "react";
import ProdCustomization from '@/components/customization/ProdCustomization'
import PriceSummary from "./PriceSummary";

export default function ProductCustomizationContainer({ product }) {

  const [customization, setCustomization] = useState({

    size: "simple",
    sizePrice: 0,
    
    pattyType: "carne",
    removedIngredients: [],
    extras: [],
    fries: null,
    drink: null,
  });

  console.log(customization);
  

  return (

    <section>
      <ProdCustomization
        product={product}
        customization={customization}
        setCustomization={setCustomization}
      />
      <PriceSummary
        product={product}
        customization={customization}
      />
    </section>

  );
}