import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("auth_token")?.value;
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/auth")) {
        if (token) {
            return NextResponse.redirect(new URL("/marketplace", req.url));
        }
        return NextResponse.next();
    }

    if (pathname === "/") {
        return NextResponse.redirect(new URL("/marketplace", req.url));
    }

    if (!token) {
        if (pathname.startsWith("/marketplace/cart")) {
            return NextResponse.redirect(new URL("/auth/login", req.url));
        }
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/marketplace/:path*", "/auth/:path*", "/:path*"],
};
