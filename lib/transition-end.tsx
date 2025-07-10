"use client";
import { useEffect } from "react";
import { useIsMounted } from "usehooks-ts";

export default function TransitionEnd() {
  const isMounted = useIsMounted();

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    if (isMounted()) body?.classList.remove("page-transition");
  }, [isMounted()]);
  return <></>;
}
