import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BrandLogo } from "@/components/BrandLogo"
import { services } from "@/lib/services"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | Landscaping, Irrigation & Lawn Care`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-ink">
        <Image
          src="/images/IMG_0220.jpg"
          alt="Lush residential lawn with active irrigation mist"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-kenburns opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
          <div className="reveal max-w-3xl">
            <BrandLogo size="lg" className="[&_span.brand-lawn]:drop-shadow-sm [&_span.brand-flow]:drop-shadow-sm" />
            <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Outdoor spaces that feel finished — and stay that way.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/88 sm:text-lg">
              Landscaping, irrigation, and lawn care with the same standard: clean lines, healthy growth, and water that actually reaches the roots.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                Get a free quote
              </Link>
              <Link
                href="/landscaping/"
                className="inline-flex h-12 items-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lawn">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Three crafts. One careful hand.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              Every property gets the right mix of structure, water, and turf — planned together so nothing fights the rest of the yard.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/${service.slug}/`}
                className="group block border-t border-line pt-7 transition-colors"
              >
                <p
                  className={`text-sm font-semibold ${
                    service.accent === "flow" ? "text-flow" : "text-lawn"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-lawn">
                  {service.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{service.summary}</p>
                <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={service.heroImage}
                    alt={service.heroAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <span
                  className={`mt-5 inline-flex text-sm font-semibold ${
                    service.accent === "flow" ? "text-flow" : "text-lawn"
                  }`}
                >
                  View {service.shortName.toLowerCase()} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-flow">Why Lawn Flow</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Minimal noise. Maximum care.
            </h2>
            <ul className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink-soft">
              <li className="border-l-2 border-lawn pl-4">
                Landscapes built around trees, hedges, and beds that look intentional from the street.
              </li>
              <li className="border-l-2 border-flow pl-4">
                Irrigation installed and repaired so coverage is even — not guesswork.
              </li>
              <li className="border-l-2 border-lawn pl-4">
                Lawn care that keeps edges sharp and turf thick without overcomplicating the schedule.
              </li>
            </ul>
          </div>
          <div className="relative aspect-[5/6] overflow-hidden rounded-[1.75rem]">
            <Image
              src="/images/IMG_8096.jpg"
              alt="Professionally landscaped palm bed with dark mulch"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flow-line" />
          <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let’s make your yard the calmest place on the block.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
            Serving {site.serviceArea}. Call{" "}
            <a href={site.phoneHref} className="font-medium text-flow">
              {site.phone}
            </a>{" "}
            or send a quick note — we typically reply the same business day.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-7 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
