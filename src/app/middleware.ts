import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host");
  
  // Redirect http://elites.ro → https://elites.ro
  if (url.protocol === "http") {
    url.protocol = "https";
    return NextResponse.redirect(url);
  }
  
  // Redirect www.elites.ro → elites.ro (remove www prefix)
  if (host?.startsWith("www.")) {
    url.host = "elites.ro";
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
