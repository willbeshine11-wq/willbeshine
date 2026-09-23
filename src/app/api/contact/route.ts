import { contactInfo } from "@/lib/data";

type ContactPayload = {
  name?: string;
  hospital?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  // Bots fill every field, including the hidden one.
  if (body.website) {
    return Response.json({ ok: true });
  }

  const field = (v?: string) => String(v ?? "").trim().slice(0, 2000);
  const name = field(body.name);
  const hospital = field(body.hospital);
  const phone = field(body.phone);
  const email = field(body.email);
  const service = field(body.service);
  const message = field(body.message);

  if (!name || !hospital || !phone || !EMAIL_RE.test(email) || !message) {
    return Response.json({ error: "필수 항목을 확인해 주세요." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return Response.json(
      { error: "문의 접수 설정이 완료되지 않았습니다. 전화로 문의해 주세요." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "하이스타트 문의 <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? contactInfo.email],
      reply_to: email,
      subject: `[홈페이지 문의] ${hospital} · ${name}`,
      text: [
        `이름: ${name}`,
        `병원명/기관명: ${hospital}`,
        `연락처: ${phone}`,
        `이메일: ${email}`,
        `문의 서비스: ${service || "선택 안 함"}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json(
      { error: "문의 전송에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
