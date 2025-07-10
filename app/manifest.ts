import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Danish Nasarudin",
    short_name: "Danish Nasarudin",
    description: "A Portfolio by Danish Nasarudin. Full-Stack Web Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
