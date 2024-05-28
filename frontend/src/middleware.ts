import { NextRequest, NextResponse } from "next/server";
import { adminMenuItemsList, salesTeamMenuItemsList } from "./constants";

export function middleware(request: NextRequest) {
  const userData = request.cookies.get("userData")?.value;
  // console.log(userData, "userDataddddd\n\n\n\n\n\n\n\n");
  if (userData && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (!userData && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (userData) {
    const usersData = JSON.parse(userData);
    const role = usersData.role;
    // console.log(role, "<<<<<<");
    if (role === "admin") {
      let list = adminMenuItemsList;
      if (userData && !list.includes(request.nextUrl.pathname)) {
        return new NextResponse("Not Found", { status: 404 });
      }
    } else if (role === "SalesTeam") {
      let list = salesTeamMenuItemsList;
      if (userData && !list.includes(request.nextUrl.pathname)) {
        return new NextResponse("Not Found", { status: 404 });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/dynamic|_next/image|favicon.ico|.*\\.png|.*\\.svg|$|blogs|career|contact-us|courses|event|media|webinar|global-partner|about|for-government|for-organization|for-placement|for-universities|for-partnership).*)",
  ],
};
