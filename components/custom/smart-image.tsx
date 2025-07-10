"use client";

import Image, { ImageProps } from "next/image";

export default function SmartImage(props: ImageProps) {
  return (
    <Image
      {...props}
      data-loaded="false"
      onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
    />
  );
}
