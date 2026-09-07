import Image from "next/image"
import Link from "next/link"
import type { GalleryItem, Service } from "@/lib/services"

const themeSurface: Record<Service["theme"], string> = {
  trees: "surface-trees",
  water: "surface-water",
  grass: "surface-grass",
}

const accentText: Record<Service["accent"], string> = {
  lawn: "text-lawn-deep",
  flow: "text-flow-deep",
}

export function ServiceHero({ service }: { service: Service }) {
  const waterClass = service.theme === "water" ? "water-sheen" : ""

  return (
    <section className={`relative ${themeSurface[service.theme]}`}>
      <div className="relative min-h-[78vh] overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover hero-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/20" />
        <div className={`absolute inset-0 ${waterClass}`} />

        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.18em] text-white">
            {service.shortName}
          </p>
          <h1 className="reveal reveal-delay-1 mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.headline}
          </h1>
          <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white sm:text-lg">
            {service.summary}
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/"
              className="inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Request a visit
            </Link>
            <a
              href="#work"
              className="btn-ghost-light inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold transition-transform hover:scale-[1.02]"
            >
              See the work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Offerings({ service }: { service: Service }) {
  return (
    <section className={`px-5 py-20 sm:px-8 ${themeSurface[service.theme]}`}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${accentText[service.accent]}`}>
            What we offer
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Clear scope. Clean results.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
            Every visit is planned around your property — not a one-size checklist — so the finish looks intentional and lasts.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {service.offerings.map((item, index) => (
            <article key={item.title} className="border-t border-line pt-6">
              <p className="font-display text-sm font-semibold text-ink-soft">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PhotoGallery({
  items,
  accent,
}: {
  items: GalleryItem[]
  accent: Service["accent"]
}) {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${accentText[accent]}`}>
            Recent work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Real jobs. Real yards.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <figure
              key={item.src + index}
              className={`group overflow-hidden rounded-[1.5rem] ${
                index === 0 && items.length > 2 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 && items.length > 2 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-3 text-[15px] text-ink-soft">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceCTA({ accent }: { accent: Service["accent"] }) {
  const glow =
    accent === "flow"
      ? "from-flow/15 via-white to-white"
      : "from-lawn/15 via-white to-white"

  return (
    <section className={`border-t border-line bg-gradient-to-b ${glow} px-5 py-20 sm:px-8`}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Ready when your yard is.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft">
          Tell us what you need — a fresh landscape, irrigation that actually covers, or lawn care that stays consistent — and we will follow up promptly.
        </p>
        <Link
          href="/contact/"
          className={`mt-8 inline-flex h-12 items-center rounded-full px-7 text-sm font-semibold transition-transform hover:scale-[1.02] ${
            accent === "flow" ? "btn-flow" : "btn-lawn"
          }`}
        >
          Contact Lawn Flow
        </Link>
      </div>
    </section>
  )
}
