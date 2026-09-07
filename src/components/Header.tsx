"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { BrandLogo } from "@/components/BrandLogo"
import { navLinks } from "@/lib/services"
import { site } from "@/lib/site"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header
      className={`header-shell sticky top-0 z-50 ${
        scrolled || open ? "is-scrolled" : "bg-white/50 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <BrandLogo priority size="sm" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.replace(/\/$/, ""))
            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={active}
                className={`nav-link rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? "text-ink" : "text-ink hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-medium text-ink transition-colors hover:text-flow-deep"
          >
            {site.phone}
          </a>
          <Link
            href="/contact/"
            className="btn-primary inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold"
          >
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-transform hover:scale-105 active:scale-95 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-mist"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            onClick={closeMenu}
            className="mt-2 rounded-2xl bg-mist px-4 py-3 text-base font-semibold text-flow-deep"
          >
            Call {site.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
