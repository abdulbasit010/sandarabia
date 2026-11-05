import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

function smtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_TO_EMAIL,
  );
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

  if (!smtpConfigured()) {
    console.info("[contact] Inquiry received (SMTP not fully configured):", {
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
  }

  const host = process.env.SMTP_HOST!;
  const port = Number(process.env.SMTP_PORT || "465");
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;
  const user = process.env.SMTP_USER!;
  const pass = process.env.SMTP_PASS!;
  const toEmail = process.env.CONTACT_TO_EMAIL!;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || user;

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Organization: ${company}` : null,
    service ? `Interest: ${service}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Sand Arabia Website" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Sand Arabia website inquiry from ${name}`,
      text: textBody,
    });

    return NextResponse.json({
      ok: true,
      configured: true,
      message: "Thank you. Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("[contact] SMTP delivery failed:", error);
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
