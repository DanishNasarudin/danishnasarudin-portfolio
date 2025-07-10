"use client";

import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";

interface SmartImageProps extends ImageProps {
  themeSrc?: { light: string; dark: string };
}

export default function SmartImage({ themeSrc, ...props }: SmartImageProps) {
  const { theme } = useTheme();
  return (
    <Image
      {...props}
      {...(themeSrc && {
        src: theme === "light" ? themeSrc.light : themeSrc.dark,
      })}
      data-loaded="false"
      onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
    />
  );
}
