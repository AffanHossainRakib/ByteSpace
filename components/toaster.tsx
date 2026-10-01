"use client";

import { useEffect } from "react";
import { Toaster as Sonner, toast } from "sonner";

export function Toaster() {
  return (
    <Sonner
      position="bottom-center"
      offset={24}
      toastOptions={{
        classNames: {
          toast: "!rounded-2xl !border-gray-200 !font-sans !shadow-float",
          title: "!type-label-m !text-gray-950",
          description: "!type-body-s !text-gray-700",
          success: "[&_[data-icon]]:!text-blue-800",
          error: "[&_[data-icon]]:!text-destructive",
        },
      }}
    />
  );
}

export function useResultToast(state: { status: string; message?: string }) {
  useEffect(() => {
    if (state.status === "success" && state.message)
      toast.success(state.message);
  }, [state]);
}
