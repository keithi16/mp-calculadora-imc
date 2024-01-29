import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number, digits = 2) {
  return num.toLocaleString("pt-br", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}
