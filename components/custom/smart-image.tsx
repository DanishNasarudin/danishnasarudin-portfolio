"use client";

import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";

export default function SmartImage(
  props: ImageProps & { themeSrc?: { light: string; dark: string } }
) {
  const { theme } = useTheme();
  return (
    <Image
      {...props}
      {...(props.themeSrc && {
        src: theme === "light" ? props.themeSrc.light : props.themeSrc.dark,
      })}
      data-loaded="false"
      onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
    />
  );
}
