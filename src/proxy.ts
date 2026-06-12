import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto");

  if (proto === "http") {
    url.protocol = "https:";
    return NextResponse.redirect(url, { status: 301 });
  }

  if (host?.startsWith("www.")) {
    url.host = "elites.ro";
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
