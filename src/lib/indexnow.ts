/**
 * Utility functions for IndexNow API integration
 */

const INDEXNOW_API_KEY = '3cb7e65af3084231b9e5e0b98a4f5859';
const BASE_URL = 'https://mtolyn-us.com';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

/**
 * Submit URLs to IndexNow for instant indexing
 * @param urls - Array of full URLs to submit
 * @returns Promise with submission result
 */
export async function submitToIndexNow(urls: string[]): Promise<{
  success: boolean;
  message?: string;
  error?: string;
}> {
  try {
    if (!urls || urls.length === 0) {
      return {
        success: false,
        error: 'URLs array cannot be empty',
      };
    }

    // Validate URLs are from the same host
    const invalidUrls = urls.filter((url) => !url.startsWith(BASE_URL));
    if (invalidUrls.length > 0) {
      return {
        success: false,
        error: 'All URLs must belong to the same host',
      };
    }

    // Prepare IndexNow request
    const indexNowPayload = {
      host: new URL(BASE_URL).hostname,
      key: INDEXNOW_API_KEY,
      keyLocation: `${BASE_URL}/${INDEXNOW_API_KEY}.txt`,
      urlList: urls,
    };

    // Submit to IndexNow
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(indexNowPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('IndexNow API error:', errorText);
      return {
        success: false,
        error: `IndexNow API returned status ${response.status}: ${errorText}`,
      };
    }

    return {
      success: true,
      message: `Successfully submitted ${urls.length} URL(s) to IndexNow`,
    };
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Submit a single URL to IndexNow
 * @param url - Full URL to submit
 * @returns Promise with submission result
 */
export async function submitUrlToIndexNow(url: string): Promise<{
  success: boolean;
  message?: string;
  error?: string;
}> {
  return submitToIndexNow([url]);
}

/**
 * Submit all URLs from the sitemap to IndexNow
 * @returns Promise with submission result
 */
export async function submitSitemapToIndexNow(): Promise<{
  success: boolean;
  message?: string;
  error?: string;
}> {
  const sitemapUrls = [
    BASE_URL,
    `${BASE_URL}/privacy-policy`,
    `${BASE_URL}/disclaimer`,
    `${BASE_URL}/terms`,
    `${BASE_URL}/order-tracking`,
    `${BASE_URL}/refund-policy`,
    `${BASE_URL}/contact-us`,
  ];

  return submitToIndexNow(sitemapUrls);
}

