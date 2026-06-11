import ErrorMsg from "@/components/ui/ErrorMsg";

export default function NotFound() {
  return (
    <ErrorMsg
      title="Página no encontrada"
      description="La página que intentás visitar no existe."
      buttonText="Volver al inicio"
      buttonHref="/"
      image="/images/errors/not-found.svg"
    />
  );
}