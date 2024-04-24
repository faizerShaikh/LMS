import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userData = request.cookies.get("userData")?.value;
  if (userData && request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/admin", request.url));
  }

  if (!userData && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|img2|img|_next/image|.*\\.png|.*\\.svg|$|blogs|career|contact-us|courses|event|media|webinar|global-partner|about|certificate|)(?!.*/:name\b).*)",
  ],
};
