import { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_BASE_URL!;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${base}/portfolio/flat-gantt`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${base}/portfolio/warranty-entry`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/portfolio/pc-builder`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
