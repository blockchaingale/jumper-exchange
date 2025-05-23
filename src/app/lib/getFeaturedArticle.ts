import { ArticleStrapiApi } from '@/utils/strapi/StrapiApi';

export async function getFeaturedArticle() {
  const urlParams = new ArticleStrapiApi().sort('desc').filterByFeatured();
  const apiBaseUrl = urlParams.getApiBaseUrl();
  const apiUrl = urlParams.getApiUrl();
  const accessToken = urlParams.getApiAccessToken();
  try {
    const res = await fetch(decodeURIComponent(apiUrl), {
      cache: 'force-cache',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json(); // Extract data from the response

    return { data, url: apiBaseUrl }; // Return a plain object
  } catch (e) {
    console.error(`Error fetching featured article from ${apiUrl}:`, e);

    throw new Error((e as Error).message);
  }
}
