export default function BuilderPreview({
  customization,
}) {
  return (
    <aside className="rounded-xl border p-6">

      <h2 className="mb-4 text-2xl font-bold">
        Vista previa
      </h2>

      <pre>
        {JSON.stringify(customization, null, 2)}
      </pre>

    </aside>
  );
}