import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_API_KEY = '3cb7e65af3084231b9e5e0b98a4f5859';
const BASE_URL = 'https://mtolyn-us.com';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { urls } = body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // Validate URLs are from the same host
    const invalidUrls = urls.filter(
      (url: string) => !url.startsWith(BASE_URL)
    );

    if (invalidUrls.length > 0) {
      return NextResponse.json(
        { error: 'All URLs must belong to the same host' },
        { status: 400 }
      );
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
      return NextResponse.json(
        { error: 'Failed to submit to IndexNow', details: errorText },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Successfully submitted ${urls.length} URL(s) to IndexNow`,
      submittedUrls: urls,
    });
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

