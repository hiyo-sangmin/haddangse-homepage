// src/app/api/contact/route.ts
export const runtime = 'nodejs';
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const { name, email, message, honey } = await req.json();
    if (honey) return NextResponse.json({ ok: true }); // 봇 차단
    if (!name || !email || !message) {
      return NextResponse.json({ error: "필수 항목이 비었습니다." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "이메일 형식이 올바르지 않습니다." }, { status: 400 });
    }

    // SMTP 설정 (환경변수 필요)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: process.env.SMTP_SECURE !== "false", // 기본 true(465)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO ?? "haddagnse@hanmail.net";
    const fromAddr = process.env.SMTP_FROM || process.env.SMTP_USER || to;

    await transporter.sendMail({
      from: `"HADDANGSE Contact" <${fromAddr}>`,
      to,
      replyTo: email,
      subject: `📩 Contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <pre style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; white-space: pre-wrap;">${message}</pre>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[contact] error", err);
    return NextResponse.json({ error: "메일 전송 중 오류가 발생했습니다." }, { status: 500 });
  }
}
