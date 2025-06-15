import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });

    try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) {
            console.error("Auth error in middleware:", error);
        }
    } catch (error) {
        console.error("Middleware error:", error);
    }

    return res;
}