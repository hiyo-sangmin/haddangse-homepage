// src/app/api/contact/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactBody = {
  name: string;
  email: string;
  message: string;
  honey?: string; // honeypot
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO, SMTP_FROM } = process.env;

  try {
    const body = (await req.json()) as Partial<ContactBody>;
    const { name, email, message, honey } = body;

    // 스팸 방지
    if (honey) return NextResponse.json({ ok: true });

    // 검증
    if (!name || !email || !message) {
      return NextResponse.json({ error: "필수 항목이 비었습니다." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "이메일 형식이 올바르지 않습니다." }, { status: 400 });
    }
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json({ error: "SMTP 환경변수가 설정되지 않았습니다." }, { status: 500 });
    }

    const port = Number(SMTP_PORT);
    const secure = SMTP_SECURE !== "false"; // 기본 true(465)

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      // logger: true, debug: true, // 필요 시 주석 해제
    });

    const to = CONTACT_TO ?? "haddagnse@hanmail.net";
    const fromAddr = SMTP_FROM || SMTP_USER || to;

    await transporter.sendMail({
      from: `"HADDANGSE Contact" <${fromAddr}>`,
      to,
      replyTo: email,
      subject: `📩 Contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,monospace;">${message}</pre>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    // any 대신 unknown 사용 → 안전하게 처리
    const e = err as Error & { code?: string; response?: unknown };
    console.error("[contact] error", e?.message ?? e, e?.code);
    return NextResponse.json({ error: "메일 전송 중 오류가 발생했습니다." }, { status: 500 });
  }
}
