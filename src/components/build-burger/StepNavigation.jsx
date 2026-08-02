import { Icon } from "@iconify/react";

export default function StepNavigation({
  step,
  totalSteps,
  nextStep,
  previousStep,
  canContinue,
}) {
  return (
    <section className="flex items-center justify-between">

      <button
        onClick={previousStep}
        disabled={step === 1}
        className="inline-flex items-center gap-1.5 rounded border px-6 py-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Icon icon="hugeicons:arrow-left-01" className="w-5 h-5" />
        Anterior
      </button>

        <button
            onClick={nextStep}
            disabled={!canContinue}
            className={`inline-flex items-center gap-1.5 rounded bg-(--accent) px-6 py-2 text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                step === totalSteps ? "hidden" : ""
            }`}
        >
        Siguiente
        <Icon icon="hugeicons:arrow-right-01" className="w-5 h-5" />
        </button>

    </section>
  );
}