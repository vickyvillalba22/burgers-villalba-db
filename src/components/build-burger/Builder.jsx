"use client";

import { useEffect, useState } from "react";

import BuilderWizard from "./BuilderWizard";
import BuilderPreview from "./BuilderPreview";
import BuilderSummary from "./BuilderSummary";
import StepNavigation from "./StepNavigation";
import PriceSummary from "../customization/PriceSummary";

const TOTAL_STEPS = 5;

const BUILDER_PRODUCT_ID = "6a650bd3070da3b268aedde0"

const initialCustomization = {
  size: "",
  pattyType: "",
  extras: [],
  fries: "",
  drink: "",
};

export default function Builder() {
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState(null);
  const [customization, setCustomization] =
    useState(initialCustomization);

  useEffect(() => {
    const loadBuilderProduct = async () => {
      try {
        const response = await fetch(
        `/api/products/${BUILDER_PRODUCT_ID}`
      );

       if (!response.ok) {
        throw new Error("Producto no encontrado");
      }

        const data = await response.json();

        setProduct(data);

      } catch (error) {
        console.error(error);
      }
    };

    loadBuilderProduct();
  }, []);

  const canContinue = () => {
    switch (step) {
      case 1:
        return customization.size !== "";

      case 2:
        return customization.pattyType !== "";

      case 3:
        return true;

      case 4:
        return customization.fries !== "";

      case 5:
        return customization.drink !== "";

      default:
        return false;
    }
  };

  const nextStep = () => {
    if (!canContinue()) return;

    if (step < TOTAL_STEPS) {
      setStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  if (!product) {
    return (
      <main className="p-10">
        Cargando...
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl p-8">

      <h1 className="mb-2 text-4xl font-bold">
        Armá tu hamburguesa
      </h1>

      <p className="mb-8 text-zinc-500">
        Paso {step} de {TOTAL_STEPS}
      </p>

      <div className="grid grid-cols-3 gap-8">

        <div className="col-span-2">

          <BuilderWizard
            step={step}
            customization={customization}
            setCustomization={setCustomization}
          />

          {/*<div className="mt-8">
            <BuilderSummary
              customization={customization}
            />
          </div>*/}


          <div className="mt-8">
            <StepNavigation
              step={step}
              totalSteps={TOTAL_STEPS}
              nextStep={nextStep}
              previousStep={previousStep}
              canContinue={canContinue()}
            />
          </div>

        </div>

        <div>

          <BuilderPreview
            customization={customization}
          />

          <div className="mt-6">
            <PriceSummary
              product={product}
              customization={customization}
              showButton={step === TOTAL_STEPS}
            />
          </div>

        </div>

      </div>

    </main>
  );
}