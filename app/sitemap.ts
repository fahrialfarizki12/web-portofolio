import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fahrialfarizki.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://fahrialfarizki.vercel.app/project",
      lastModified: new Date(),
    },
    {
      url: "https://fahrialfarizki.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://fahrialfarizki.vercel.app/educations",
      lastModified: new Date(),
    },
    {
      url: "https://fahrialfarizki.vercel.app/achievement",
      lastModified: new Date(),
    },
  ];
}
