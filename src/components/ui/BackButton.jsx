"use client";

import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="w-[90%]">
      <button
        onClick={() => router.back()}
        className="mb-8 inline-flex items-center gap-2 font-medium text-lg hover:bg-(--medium)/50 px-3 py-1 rounded-lg cursor-pointer"
      >
        <Icon icon="hugeicons:arrow-left-01" className="w-5 h-5" />
        Volver
      </button>
    </div>
  );
};

export default BackButton;