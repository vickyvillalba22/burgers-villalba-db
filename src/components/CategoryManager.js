"use client";

import { useCallback, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "@/app/actions/categories";

const initialForm = {
  name: "",
  description: "",
};

export default function CategoryManager({ initialCategories = [] }) {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState("");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isRefreshing, startRefreshTransition] = useTransition();

  const resetForm = useCallback(() => {
    setForm(initialForm);
    setEditingId("");
  }, []);

  const refreshCategories = useCallback(() => {
    startRefreshTransition(() => {
      router.refresh();
    });
  }, [router]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSaving(true);

    const formData = new FormData(event.currentTarget);
    const action = editingId
      ? updateCategory.bind(null, editingId)
      : createCategory;

    try {
      const result = await action(null, formData);
      setMessage(result.message);

      if (result.ok) {
        resetForm();
        refreshCategories();
      }
    } catch {
      setMessage("Ocurrio un error al guardar la categoria.");
    } finally {
      setIsSaving(false);
    }
  }

  function handleEdit(category) {
    setEditingId(category._id);
    setForm({
      name: category.name,
      description: category.description,
    });
    setMessage("Editando categoria.");
  }

  async function handleDelete(id) {
    const result = await deleteCategory(id);

    if (!result.ok) {
      setMessage(result.message || "No se pudo eliminar la categoria.");
      return;
    }

    if (editingId === id) {
      resetForm();
    }

    setMessage(result.message);
    refreshCategories();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
      <section className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <Icon icon="hugeicons:menu-square-01" className="w-6 h-6 text-amber-500" />
          {editingId ? "Editar categoria" : "Nueva categoria"}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Las categorias se pueden asociar a muchos productos.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            required
          />
          <textarea
            className="min-h-28 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none"
            name="description"
            placeholder="Descripcion"
            value={form.description}
            onChange={handleChange}
          />

          <div className="flex gap-3">
            <button
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white cursor-pointer hover:bg-slate-800 transition"
              disabled={isSaving}
              type="submit"
            >
              <Icon icon={editingId ? "hugeicons:floppy-disk" : "hugeicons:add-circle-half-dot"} className="w-4 h-4" />
              {isSaving ? "Guardando..." : editingId ? "Actualizar" : "Crear"}
            </button>
            <button
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 cursor-pointer hover:bg-slate-50 transition"
              type="button"
              onClick={resetForm}
            >
              <Icon icon="hugeicons:cancel-01" className="w-4 h-4" />
              Limpiar
            </button>
          </div>
        </form>

        {message ? <p className="mt-4 text-sm text-slate-700">{message}</p> : null}
      </section>

      <section className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
              <Icon icon="hugeicons:menu-square-01" className="w-6 h-6 text-amber-500" />
              Categorias
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Lista de rubros disponibles para los productos.
            </p>
          </div>
          <button
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 cursor-pointer hover:bg-slate-50 transition"
            disabled={isRefreshing}
            type="button"
            onClick={refreshCategories}
          >
            <Icon icon="hugeicons:refresh" className="w-4 h-4" />
            {isRefreshing ? "Recargando..." : "Recargar"}
          </button>
        </div>

        {initialCategories.length === 0 ? (
          <p className="mt-6 text-slate-600">Todavia no hay categorias cargadas.</p>
        ) : (
          <div className="mt-6 grid gap-4">
            {initialCategories.map((category) => (
              <article
                key={category._id}
                className="rounded-lg border border-slate-200 p-5"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {category.description || "Sin descripcion"}
                </p>
                <p className="mt-3 break-all text-xs text-slate-500">
                  ID: {category._id}
                </p>

                <div className="mt-4 flex gap-3">
                  <button
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900 cursor-pointer hover:bg-amber-200 transition"
                    type="button"
                    onClick={() => handleEdit(category)}
                  >
                    <Icon icon="hugeicons:pencil-edit-01" className="w-4 h-4" />
                    Editar
                  </button>
                  <button
                    className="inline-flex items-center gap-1.5 rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 cursor-pointer hover:bg-red-200 transition"
                    type="button"
                    onClick={() => handleDelete(category._id)}
                  >
                    <Icon icon="hugeicons:trash-01" className="w-4 h-4" />
                    Eliminar
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
