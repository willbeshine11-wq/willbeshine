"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function FloatingContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const telHref = `tel:${contactInfo.phone.replace(/-/g, "")}`;

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <a
        href={contactInfo.kakaoChannelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#FEE500] px-5 py-3 text-sm font-semibold text-[#191919] shadow-lg shadow-graphite-950/15 transition-transform hover:scale-105"
      >
        <MessageCircle className="size-4.5" aria-hidden="true" />
        카카오톡 상담하기
      </a>
      <a
        href={telHref}
        className="flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-graphite-950/15 transition-transform hover:scale-105 hover:bg-blue-400"
      >
        <Phone className="size-4.5" aria-hidden="true" />
        전화 예약하기
      </a>
    </div>
  );
}
