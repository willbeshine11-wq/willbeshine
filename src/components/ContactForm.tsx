"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";

type Errors = Partial<Record<"name" | "hospital" | "phone" | "email" | "message" | "agree", string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};

    if (!String(form.get("name") ?? "").trim()) {
      nextErrors.name = "이름을 입력해 주세요.";
    }
    if (!String(form.get("hospital") ?? "").trim()) {
      nextErrors.hospital = "병원명 또는 기관명을 입력해 주세요.";
    }
    if (!String(form.get("phone") ?? "").trim()) {
      nextErrors.phone = "연락 가능한 전화번호를 입력해 주세요.";
    }
    const email = String(form.get("email") ?? "").trim();
    if (!email) {
      nextErrors.email = "이메일을 입력해 주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "올바른 이메일 형식으로 입력해 주세요.";
    }
    if (!String(form.get("message") ?? "").trim()) {
      nextErrors.message = "문의 내용을 입력해 주세요.";
    }
    if (!form.get("agree")) {
      nextErrors.agree = "개인정보 수집 및 이용에 동의해 주세요.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setSubmitted(true);
    requestAnimationFrame(() => successRef.current?.focus());
  }

  if (submitted) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-xl border border-line bg-mist p-10 text-center"
      >
        <CheckCircle2 className="mx-auto size-10 text-blue-600" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-semibold text-graphite-950">
          문의가 접수되었습니다
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">
          영업일 기준 1일 이내에 담당자가 입력해주신 연락처로
          안내드리겠습니다. 감사합니다.
        </p>
      </div>
    );
  }

  const errorEntries = Object.entries(errors).filter(([, v]) => v);

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      {errorEntries.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-4"
        >
          <p className="text-sm font-semibold text-red-700">
            입력을 다시 확인해 주세요
          </p>
          <ul className="mt-2 space-y-1 text-sm text-red-700">
            {errorEntries.map(([field, message]) => (
              <li key={field}>
                <a href={`#field-${field}`} className="underline underline-offset-2">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="field-name"
          name="name"
          label="이름"
          required
          error={errors.name}
        />
        <Field
          id="field-hospital"
          name="hospital"
          label="병원명 / 기관명"
          required
          error={errors.hospital}
        />
        <Field
          id="field-phone"
          name="phone"
          label="연락처"
          type="tel"
          required
          error={errors.phone}
          placeholder="010-0000-0000"
        />
        <Field
          id="field-email"
          name="email"
          label="이메일"
          type="email"
          required
          error={errors.email}
        />
      </div>

      <div>
        <label htmlFor="field-service" className="block text-sm font-medium text-graphite-900">
          문의 서비스
        </label>
        <select
          id="field-service"
          name="service"
          className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink-700 focus:border-graphite-800 focus:outline-none"
        >
          <option value="">선택해 주세요 (선택)</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="field-message" className="block text-sm font-medium text-graphite-900">
          문의 내용 <span className="text-blue-600">*</span>
        </label>
        <textarea
          id="field-message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "field-message-error" : undefined}
          className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink-700 focus:border-graphite-800 focus:outline-none"
        />
        {errors.message && (
          <p id="field-message-error" className="mt-2 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="field-agree"
          name="agree"
          type="checkbox"
          aria-invalid={Boolean(errors.agree)}
          aria-describedby={errors.agree ? "field-agree-error" : undefined}
          className="mt-1 size-4 rounded border-line text-graphite-900 focus:outline-none"
        />
        <label htmlFor="field-agree" className="text-sm text-ink-600">
          개인정보 수집 및 이용에 동의합니다.{" "}
          <span className="text-blue-600">*</span>
        </label>
      </div>
      {errors.agree && (
        <p id="field-agree-error" className="text-sm text-red-700">
          {errors.agree}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
      >
        문의 보내기
      </button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  error,
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-graphite-900">
        {label} {required && <span className="text-blue-600">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink-700 focus:border-graphite-800 focus:outline-none"
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
