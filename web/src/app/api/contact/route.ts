import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Basic server-side validation (could be extended)
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Hook into email provider, database, or CRM. For now, just log.
     
    console.log("Contact form received:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
     
    console.error("Contact API error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
