import { NextRequest, NextResponse } from "next/server";
import { getAuthSecret, verifyAuthToken } from "@/lib/auth";

const SESSION_COOKIE = "mak_gambreng_session";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === "/login";
  const authSecret = getAuthSecret();
  const isAuthenticated = authSecret
    ? await verifyAuthToken(request.cookies.get(SESSION_COOKIE)?.value, authSecret)
    : false;

  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!isLoginPage && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|manifest.json|icons/|assets/|sw.js|workbox-.*).*)",
  ],
};