import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server";

export const middleware= async (req)=>{
    const token= await getToken({req});
    const isTokenOK= Boolean(token);
    const isAdminUser=token?.role=='admin';
    const isAdminSpecificRote= req.nextUrl.pathname.startsWith("/addstudent");

    if(isAdminSpecificRote && !isAdminUser){
        const callbackUrl= encodeURIComponent(req.nextUrl.pathname);
        return NextResponse.redirect(new URL(`http://localhost:3000/api/auth/signin?callbackUrl=${callbackUrl}`,req.url));
    }

    return NextResponse.next();
}