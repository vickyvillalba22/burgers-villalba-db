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
        className="rounded border px-6 py-2 disabled:opacity-40"
      >
        Anterior
      </button>

        <button
            onClick={nextStep}
            disabled={!canContinue}
            className={`rounded bg-(--accent) px-6 py-2 text-white disabled:opacity-40 ${
                step === totalSteps ? "hidden" : ""
            }`}
        >
        Siguiente
        </button>

    </section>
  );
}