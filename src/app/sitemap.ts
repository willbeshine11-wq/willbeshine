import type { MetadataRoute } from "next";

const BASE_URL = "https://highstart.kr";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.9 },
  { path: "/services/branding", priority: 0.8 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/ebook", priority: 0.7 },
  { path: "/contact", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
