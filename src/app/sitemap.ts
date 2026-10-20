import type { MetadataRoute } from "next";
import { nav, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...nav.map((n) => n.href), "/elevation", "/give"].map((p) => ({
    url: `${siteUrl}${p === "/" ? "" : p}`,
    changeFrequency: "weekly",
  }));
}
