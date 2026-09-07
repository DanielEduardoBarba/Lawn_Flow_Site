import Image from "next/image"
import Link from "next/link"

type BrandLogoProps = {
  className?: string
  priority?: boolean
  size?: "sm" | "md" | "lg"
  onDark?: boolean
}

const sizes = {
  sm: { box: "h-11 w-11", text: "text-lg" },
  md: { box: "h-14 w-14", text: "text-xl" },
  lg: { box: "h-20 w-20", text: "text-3xl" },
}

export function BrandLogo({
  className = "",
  priority = false,
  size = "md",
  onDark = false,
}: BrandLogoProps) {
  const s = sizes[size]

  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Lawn Flow home">
      <span className={`relative overflow-hidden rounded-full ${s.box} ring-1 ring-line shadow-sm`}>
        <Image
          src="/logo.png"
          alt="Lawn Flow logo"
          fill
          sizes="80px"
          priority={priority}
          className="object-cover scale-[1.08] transition-transform duration-500 group-hover:scale-[1.14]"
        />
      </span>
      <span className={`font-display font-bold italic tracking-tight leading-none ${s.text}`}>
        <span className={onDark ? "text-lawn-light" : "brand-lawn"}>LAWN</span>
        <span className={onDark ? "text-flow-light" : "brand-flow"}>FLOW</span>
      </span>
    </Link>
  )
}
