'use client';

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/ui/BackButton";
import { useAppContext } from "@/app/context/AppContext";
import { Icon } from "@iconify/react";

export default function RegisterPage() {
  const router = useRouter();
  const { loginUser } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isSubmitting = useRef(false);
  const abortControllerRef = useRef(null);

  // Cleanup al desmontar
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting.current) return;

    isSubmitting.current = true;
    setIsLoading(true);
    setError(null);

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: abortControllerRef.current.signal,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Error al registrar el usuario");
      }

      // Éxito: Iniciar sesión automáticamente y redirigir a home
      loginUser(data.user);
      router.push('/');
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Solicitud cancelada");
        return;
      }
      setError(err.message);
      console.error("Error registering user:", err);
    } finally {
      setIsLoading(false);
      isSubmitting.current = false;
    }
  };

  return (
    <main className="container mx-auto max-w-2xl px-4 py-8">

      <BackButton />

      <h1 className="text-3xl font-medium flex items-center gap-3 mt-6 mb-4">
        <Icon icon="hugeicons:user-add-01" className="w-8 h-8 text-amber-500" />
        Registrarse
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-xl border p-6"
      >
        {/* Nombre */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-medium"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />
        </div>

        {/* Contraseña */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block font-medium"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Tu contraseña"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />
        </div>

        {/* Mensaje de error */}
        {error && (
          <p className="text-sm text-red-600">
            {error}
          </p>
        )}

        {/* Botón de registro */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-full bg-(--accent) py-3 font-semibold text-white disabled:opacity-50"
        >
          {isLoading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </main>
  );
}
