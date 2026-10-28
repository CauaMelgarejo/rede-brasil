import type { MetadataRoute } from "next";
import { operatorPlans } from "@/lib/operatorPlans";

const SITE_URL = "https://planosdesauderedebrasil.com.br";

const staticRoutes = [
  "/",
  "/planos/bradesco-saude",
] as const;

const operatorRoutes = operatorPlans.map(({ slug }) => `/planos/${slug}`);
const allRoutes = [...staticRoutes, ...operatorRoutes];

export default function sitemap(): MetadataRoute.Sitemap {
  return Array.from(new Set(allRoutes)).map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: new Date(),
  }));
}
