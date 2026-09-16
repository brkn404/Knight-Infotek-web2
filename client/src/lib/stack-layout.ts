import { cn } from "@/lib/utils";

/** Responsive grid for product cards by count in a stack. */
export function getProductGridClass(productCount: number): string {
  return cn(
    "grid grid-cols-1 gap-6 w-full",
    productCount === 1 && "md:max-w-md md:mx-auto",
    productCount === 2 && "md:grid-cols-2 md:max-w-4xl md:mx-auto",
    productCount >= 3 && "md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto",
  );
}
