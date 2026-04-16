"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#despre", label: "Despre" },
    { href: "#fundraising", label: "Susține" },
    { href: "#parteneri", label: "Parteneri" },
    { href: "#roadmap", label: "Roadmap" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-semibold tracking-tight lg:text-2xl">
              Chess Ascend
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="#fundraising"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Susține Proiectul
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-6 bg-foreground transition-all ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-foreground transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-foreground transition-all ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-border bg-background pb-6 lg:hidden">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#fundraising"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-primary-foreground"
              >
                Susține Proiectul
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
