import { NextResponse } from "next/server";

// api route
export async function GET(req: Request) {
    const name = ['지후', '지후1', '지후2'];

    return NextResponse.json({ name });
}