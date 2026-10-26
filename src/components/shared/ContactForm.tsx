"use client";

import { FormEvent, useState } from "react";
import clsx from "clsx";

type Status = "idle" | "submitting" | "success" | "error";

const initial = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Partial<typeof initial>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  function validate() {
    const next: Partial<typeof initial> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Please describe your inquiry.";
    else if (values.message.trim().length < 10)
      next.message = "Please provide a little more detail (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    if (status === "submitting") return;

    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website_url: honeypot }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        configured?: boolean;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setServerMessage(
          data.message ||
            "We could not send your message right now. Please email sales@sandarabia.com or call us.",
        );
        return;
      }

      setStatus("success");
      setServerMessage(data.message || "Thank you. Your message has been received.");
      setValues(initial);
    } catch {
      setStatus("error");
      setServerMessage(
        "Network error. Please try again, or email sales@sandarabia.com directly.",
      );
    }
  }

  const field =
    "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/40";

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-5" aria-describedby="form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-white/55">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={clsx(field, errors.name && "border-red-400/60")}
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-300">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-white/55">
            Work email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={clsx(field, errors.email && "border-red-400/60")}
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-300">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-white/55">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={field}
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="companyName" className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-white/55">
            Organization
          </label>
          <input
            id="companyName"
            name="company"
            autoComplete="organization"
            className={field}
            value={values.company}
            onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-white/55">
          Area of interest
        </label>
        <select
          id="service"
          name="service"
          className={clsx(field, "appearance-none")}
          value={values.service}
          onChange={(e) => setValues((v) => ({ ...v, service: e.target.value }))}
        >
          <option value="">Select a service (optional)</option>
          <option value="Network Infrastructure">Network Infrastructure</option>
          <option value="Communications Solutions">Communications Solutions</option>
          <option value="AV & Digital Solutions">AV & Digital Solutions</option>
          <option value="Security & Access">Security & Access</option>
          <option value="Data Center & Infrastructure">Data Center & Infrastructure</option>
          <option value="Specialized Services">Specialized Services</option>
          <option value="Consultancy Services">Consultancy Services</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-white/55">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={clsx(field, "resize-y", errors.message && "border-red-400/60")}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot — leave empty; excluded from accessibility tree */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url">Website</label>
        <input
          id="website_url"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-[#041018] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
        <p className="text-xs text-white/40">
          Or email{" "}
          <a href="mailto:sales@sandarabia.com" className="text-cyan-300/80 hover:text-cyan-300">
            sales@sandarabia.com
          </a>
        </p>
      </div>

      <div
        id="form-status"
        role="status"
        aria-live="polite"
        className={clsx(
          "rounded-xl px-4 py-3 text-sm",
          status === "success" && "border border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
          status === "error" && "border border-red-400/30 bg-red-400/10 text-red-100",
          (status === "idle" || status === "submitting") && "sr-only",
        )}
      >
        {serverMessage}
      </div>
    </form>
  );
}
