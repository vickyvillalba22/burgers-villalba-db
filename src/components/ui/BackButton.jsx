"use client";

import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="w-[80%]">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 font-medium text-lg hover:bg-orange-200 px-3 py-1 rounded-lg cursor-pointer"
      >
        <Icon icon="hugeicons:arrow-left-01" className="w-5 h-5" />
        Volver
      </button>
    </div>
  );
};

export default BackButton;