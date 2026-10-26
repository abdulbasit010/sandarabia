import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  website_url?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot — silently succeed for bots
  if (body.website_url) {
    return NextResponse.json({ ok: true, message: "Thank you." });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();
  const phone = (body.phone || "").trim();
  const company = (body.company || "").trim();
  const service = (body.service || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, message: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, message: "Message length is invalid." },
      { status: 400 },
    );
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "sales@sandarabia.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@sandarabia.com";

  const payload = {
    name,
    email,
    phone,
    company,
    service,
    message,
    receivedAt: new Date().toISOString(),
  };

  try {
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(`Webhook responded ${res.status}`);
      }
      return NextResponse.json({
        ok: true,
        configured: true,
        message: "Thank you. Your message has been sent successfully.",
      });
    }

    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `Sand Arabia website inquiry from ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            phone ? `Phone: ${phone}` : null,
            company ? `Organization: ${company}` : null,
            service ? `Interest: ${service}` : null,
            "",
            message,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });
      if (!res.ok) {
        throw new Error(`Resend responded ${res.status}`);
      }
      return NextResponse.json({
        ok: true,
        configured: true,
        message: "Thank you. Your message has been sent successfully.",
      });
    }

    // No delivery channel configured — do not pretend success
    console.info("[contact] Inquiry received (no delivery channel configured):", {
      name,
      email,
      service,
    });

    return NextResponse.json(
      {
        ok: false,
        configured: false,
        message:
          "Online form delivery is not configured yet. Please email sales@sandarabia.com or call (966) 13-889-0128.",
      },
      { status: 503 },
    );
  } catch (error) {
    console.error("[contact] Delivery failed:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not deliver your message right now. Please email sales@sandarabia.com or call (966) 13-889-0128.",
      },
      { status: 502 },
    );
  }
}
