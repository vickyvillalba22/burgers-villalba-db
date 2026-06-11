"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900"
    >
      ← Volver
    </button>
  );
};

export default BackButton;