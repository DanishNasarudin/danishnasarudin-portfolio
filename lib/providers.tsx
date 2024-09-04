"use client";
import React from "react";

type Props = {};

export function Providers({ children }: { children: React.ReactNode }) {
  // React.useEffect(() => {
  //   document.documentElement.classList.add("dark");
  // }, []);

  return <>{children}</>;
}
