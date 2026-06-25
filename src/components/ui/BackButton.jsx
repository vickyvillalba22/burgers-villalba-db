"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="w-[90%]">
      <button
        onClick={() => router.back()}
        className="mb-8 inline-flex items-center gap-2 font-medium text-lg hover:bg-(--medium)/50 px-3 py-1 rounded-lg cursor-pointer"
      >
        ← Volver
      </button>
    </div>
  );
};

export default BackButton;