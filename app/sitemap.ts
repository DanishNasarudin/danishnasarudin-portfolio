import { contentData } from "@/lib/data";
import { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_BASE_URL!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicContent: MetadataRoute.Sitemap = contentData.map((item) => {
    return {
      url: `${base}/portfolio/${item.content}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      images: [...item.images.slice(0, 2)],
    };
  });

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...dynamicContent,
    {
      url: `${base}/robots.txt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${base}/manifest.webmanifest`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
