"use client";

import { usePathname } from "next/navigation";

export function useSpecialRoute(): boolean {
  const pathname = usePathname();
  return pathname === "/products";
}
