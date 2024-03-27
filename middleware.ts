import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  response.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  response.headers.append(
    "Access-Control-Allow-Origin",
    "https://maghfoor-com.pages.dev"
  );
  response.headers.append(
    "Access-Control-Allow-Origin",
    "https://maghfoor.com"
  );
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "*");

  // Set a new response header `x-hello-from-middleware2`
  return response;
}

export const config = {
  matcher: "/:path*",
};
