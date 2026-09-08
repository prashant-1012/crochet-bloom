"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { CartButton } from "@/components/cart/CartButton";
import { Wordmark } from "@/components/ui/Wordmark";

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

// Code-split: hidden until opened, only relevant below the lg breakpoint.
const MobileMenu = dynamic(() =>
  import("@/components/layout/MobileMenu").then((mod) => mod.MobileMenu)
);

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // The clicked link highlights immediately instead of waiting for the
  // destination route to finish rendering, which can take a noticeable
  // moment and made the nav feel stuck. usePathname only updates once
  // navigation commits, so we track intent separately and let the real
  // pathname reclaim authority as soon as it changes.
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const activePathname = pendingHref ?? pathname;

  useEffect(() => {
    setPendingHref(null);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-warm-gray-light/60 bg-cream/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10 xl:px-12">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative h-10 w-14 shrink-0 sm:h-12 sm:w-16">
              <Image
                src="/images/logo.png"
                alt={SITE_NAME}
                fill
                priority
                sizes="64px"
                className="object-contain"
              />
            </span>
            <span aria-hidden="true" className="hidden sm:inline-flex">
              <Wordmark size="sm" />
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = isNavLinkActive(activePathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setPendingHref(link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "font-semibold text-bloom-dark"
                      : "text-charcoal hover:text-yarn-dark"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-bloom/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-dot"
                      className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-bloom-dark"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <CartButton />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-warm-gray-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yarn lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
