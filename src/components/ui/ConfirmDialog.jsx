"use client";

const BUTTON_STYLES = {
  secondary:
    "rounded-lg border px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50",
  primary:
    "rounded-lg bg-(--accent) px-4 py-2 text-sm font-medium text-white transition hover:opacity-90",
};

const ConfirmDialog = ({
  open,
  title = "Confirmar acción",
  message = "¿Estás seguro de que deseás continuar?",
  buttons,
  confirmLabel = "Sí",
  cancelLabel = "No",
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  const resolvedButtons = buttons ?? [
    {
      label: cancelLabel,
      onClick: onCancel,
      variant: "secondary",
    },
    {
      label: confirmLabel,
      onClick: onConfirm,
      variant: "primary",
    },
  ];

  const handleBackdropClick = () => {
    const cancelButton = resolvedButtons.find(
      (button) => button.variant === "secondary"
    );

    if (cancelButton?.onClick) {
      cancelButton.onClick();
      return;
    }

    onCancel?.();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-message"
        className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2
          id="confirm-dialog-title"
          className="text-lg font-bold text-slate-900"
        >
          {title}
        </h2>

        <p
          id="confirm-dialog-message"
          className="mt-3 text-sm text-slate-600"
        >
          {message}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          {resolvedButtons.map((button, index) => (
            <button
              key={`${button.label}-${index}`}
              type="button"
              onClick={button.onClick}
              className={
                BUTTON_STYLES[button.variant ?? "secondary"]
              }
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
