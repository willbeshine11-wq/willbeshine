"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, services } from "@/lib/data";
import Button from "./Button";
import Icon from "./Icon";
import Logo from "./Logo";

const serviceLinks = services.map((service) => ({
  slug: service.slug,
  icon: service.icon,
  title: service.title,
  href: service.slug === "branding" ? "/services/branding" : `/services#${service.slug}`,
}));

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setMobileServicesOpen(false);
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

            if (link.href === "/services") {
              return (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      active
                        ? "text-graphite-950"
                        : "text-ink-500 hover:text-graphite-900"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className="size-3.5 transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180"
                      aria-hidden="true"
                    />
                  </Link>

                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="w-72 rounded-xl border border-line bg-white p-2 shadow-lg shadow-graphite-950/10">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink-600 transition-colors hover:bg-mist hover:text-graphite-950"
                        >
                          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-graphite-950/5">
                            <Icon
                              name={service.icon}
                              className="size-4 text-graphite-800"
                              aria-hidden="true"
                            />
                          </span>
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

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

              if (link.href === "/services") {
                return (
                  <li key={link.href}>
                    <div className="flex items-center rounded-md hover:bg-mist">
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex-1 rounded-md px-3 py-3 text-base font-medium ${
                          active ? "bg-graphite-950 text-white" : "text-ink-700"
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={
                          mobileServicesOpen
                            ? "서비스 하위 메뉴 닫기"
                            : "서비스 하위 메뉴 열기"
                        }
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-submenu"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="inline-flex size-11 shrink-0 items-center justify-center text-ink-500"
                      >
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {mobileServicesOpen && (
                      <ul
                        id="mobile-services-submenu"
                        className="mt-1 space-y-1 border-l border-line pl-4"
                      >
                        {serviceLinks.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={service.href}
                              className="block rounded-md px-3 py-2.5 text-sm text-ink-600 hover:bg-mist hover:text-graphite-950"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

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
