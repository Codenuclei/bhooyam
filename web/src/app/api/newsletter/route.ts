import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) return NextResponse.json({ ok: false }, { status: 400 });

    // TODO: save to database / mailing list provider
     
    console.log("Newsletter signup:", email);

    return NextResponse.json({ ok: true });
  } catch (err) {
     
    console.error("Newsletter API error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
