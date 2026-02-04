import { NextResponse } from "next/server";

export function middleware(request) {

    const currentCookie = request.cookies.get("nextjs-token")?.value;
    console.log(currentCookie);


    const dummyUserData = {
        // role: "admin",
        role: "user",
        email: "test1@gmail.com",
    };

    const isServicesPage = request.nextUrl.pathname.startsWith("/services");
    const isAdmin = dummyUserData.role === "admin";

    if (isServicesPage && !isAdmin) {
        return NextResponse.redirect(new URL("/login", request.url));
        // return NextResponse.rewrite(new URL("/login", request.url));
    }

    return NextResponse.next();
}

// ✅ REQUIRED: matcher
export const config = {
    matcher: ["/services/:path*"],
};
