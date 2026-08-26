"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Button from "./Button";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-page flex h-18 items-center justify-between py-4">
        <Link href="/" aria-label="하이스타트 홈으로 이동">
          <Logo showTagline />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="주 메뉴"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-graphite-950"
                    : "text-ink-500 hover:text-graphite-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">
            상담 신청
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-graphite-900 md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="모바일 메뉴"
          className="border-t border-line bg-white px-6 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-3 text-base font-medium ${
                      active
                        ? "bg-graphite-950 text-white"
                        : "text-ink-700 hover:bg-mist"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button href="/contact" variant="primary" className="mt-4 w-full">
            상담 신청
          </Button>
        </nav>
      )}
    </header>
  );
}
