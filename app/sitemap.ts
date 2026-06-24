import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://classicbiryaninh.com';
  
  const routes = ['', '/about', '/menu', '/catering', '/gallery', '/reviews', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })
  );

  return routes;
}
