// src/app/contact/page.tsx
"use client";

import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"fail">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget as HTMLFormElement;
    const data = {
      name:   (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email:  (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message:(form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      // 간단한 스팸 방지(사람은 채우지 않음)
      honey:  (form.elements.namedItem("company") as HTMLInputElement).value.trim(),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("ok");
      form.reset();
    } else {
      setStatus("fail");
      const j = await res.json().catch(() => ({}));
      setError(j?.error ?? "메시지 전송에 실패했습니다.");
    }
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Contact</h1>

      <form onSubmit={onSubmit} className="space-y-6">
        <label className="block">
          <span className="block text-sm text-gray-700 mb-2">Name*</span>
          <input
            type="text" name="name" required
            className="w-full rounded border border-gray-300 p-3 outline-none focus:border-gray-500"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="block text-sm text-gray-700 mb-2">Your email*</span>
          <input
            type="email" name="email" required
            className="w-full rounded border border-gray-300 p-3 outline-none focus:border-gray-500"
            placeholder="name@example.com"
          />
        </label>

        <label className="block">
          <span className="block text-sm text-gray-700 mb-2">Message*</span>
          <textarea
            name="message" required rows={6}
            className="w-full rounded border border-gray-300 p-3 outline-none focus:border-gray-500"
            placeholder="Write your message…"
          />
        </label>

        {/* honeypot (보이지 않음) */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded bg-gray-600 px-6 py-3 text-white font-semibold disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send"}
        </button>

        {status === "ok" && (
          <p className="text-green-700">메시지를 보냈습니다. 감사합니다!</p>
        )}
        {status === "fail" && (
          <p className="text-red-600">{error}</p>
        )}
      </form>
    </article>
  );
}
