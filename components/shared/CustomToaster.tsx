"use client"

import { useTheme } from "next-themes";
import { Toaster } from "../ui/sonner";


function CustomToaster() {
  const { theme } = useTheme();
  return (
    <Toaster
      closeButton
      toastOptions={{
        classNames: {
          toast: `${theme === "dark" ? "!text-light-100 !bg-dark-100 !border-dark-400" : "!text-light-400 !bg-light-100  "}`,
          closeButton: `${theme === "dark" ? "!text-light-900 !bg-dark-100 !border-dark-400" : "!text-dark-100 !bg-light-100 "}`,
        },
      }}
    />
  );
}

export default CustomToaster;