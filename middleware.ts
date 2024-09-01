import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect("https://sphorb.io");
}

export const config = {
  matcher: "/:path*",
};
