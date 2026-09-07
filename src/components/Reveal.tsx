"use client"

import {
  CSSProperties,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
} from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  as?: "div" | "section" | "article" | "li" | "figure" | "header"
  delay?: number
  variant?: "up" | "left" | "scale"
}

export function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const Tag = as as ElementType

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      node.classList.add("is-visible")
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible")
          observer.unobserve(node)
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const variantClass =
    variant === "left"
      ? "scroll-reveal-left"
      : variant === "scale"
        ? "scroll-reveal-scale"
        : ""

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${variantClass} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
