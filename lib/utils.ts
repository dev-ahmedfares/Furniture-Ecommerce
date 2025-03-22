import { isAxiosError } from "axios";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function axiosErrorHandler(error:unknown) {
  if (isAxiosError(error)) {
    const errorResponse = error.response?.data?.errors;

    let currError;

    if (
      errorResponse &&
      typeof errorResponse === "object" &&
      Object.keys(errorResponse).length > 0
    ) {
      // Extract the first error if it exists
      const firstKey = Object.keys(errorResponse)[0];
      currError = errorResponse[firstKey][0];
    } else {
      // Fall back to other possible error messages
      currError = error.response?.data?.message || error.message;
    }

    // Ensure currError is a string, or return a default message
    return typeof currError === "string" ? currError : "An unexpected error";
  } else {
    return "An unexpected error";
  }
}