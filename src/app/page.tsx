import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BrandLogo } from "@/components/BrandLogo"
import { Reveal } from "@/components/Reveal"
import { services } from "@/lib/services"
import { buildPageMetadata } from "@/lib/seo"
import { localityLabel, site } from "@/lib/site"

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `${site.name} | Landscaping, Irrigation & Lawn Care in ${localityLabel}`,
    description: site.description,
    path: "/",
    image: site.ogImage,
    imageAlt: `Healthy irrigated lawn by ${site.name} in ${localityLabel}`,
  }),
  title: {
    absolute: `${site.name} | Landscaping, Irrigation & Lawn Care in ${localityLabel}`,
  },
}

export default function HomePage() {
  return (
    <>
      <section className="hero-stage relative min-h-[92vh] overflow-hidden bg-ink">
        <Image
          src="/images/IMG_0220.jpg"
          alt={`Lush residential lawn with active irrigation mist in ${localityLabel}`}
          fill
          priority
          sizes="100vw"
          className="object-cover hero-kenburns opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />
        <div className="grass-sway opacity-60" aria-hidden="true" />

        <div className="relative z-[3] mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
          <div className="reveal max-w-3xl">
            <BrandLogo size="lg" onDark priority />
            <div className="reveal-delay-1 mt-6 flow-line" aria-hidden="true" />
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Outdoor spaces that feel finished — and stay that way.
            </h1>
            <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white sm:text-lg">
              Landscaping, irrigation, and lawn care across {localityLabel} — clean lines, healthy growth, and water that actually reaches the roots.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="btn-solid-light inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold"
              >
                Get a free quote
              </Link>
              <Link
                href="/landscaping/"
                className="btn-ghost-light inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ambient-drift px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lawn-deep">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Three crafts. One careful hand.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              Every property gets the right mix of structure, water, and turf — planned together so nothing fights the rest of the yard.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 120}>
                <Link
                  href={`/${service.slug}/`}
                  className="service-link group block border-t border-line pt-7"
                >
                  <p
                    className={`text-sm font-semibold ${
                      service.accent === "flow" ? "text-flow-deep" : "text-lawn-deep"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-lawn-deep">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{service.summary}</p>
                  <div className="media-depth relative mt-6 aspect-[4/5] rounded-[1.4rem]">
                    <Image
                      src={service.heroImage}
                      alt={service.heroAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <span
                    className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${
                      service.accent === "flow" ? "text-flow-deep" : "text-lawn-deep"
                    }`}
                  >
                    View {service.shortName.toLowerCase()}
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-flow-deep">Why Lawn Flow</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Minimal noise. Maximum care.
            </h2>
            <ul className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink-soft">
              <li className="offer-item border-l-2 border-lawn-deep pl-4">
                Landscapes built around trees, hedges, and beds that look intentional from the street.
              </li>
              <li className="offer-item border-l-2 border-flow-deep pl-4">
                Irrigation installed and repaired so coverage is even — not guesswork.
              </li>
              <li className="offer-item border-l-2 border-lawn-deep pl-4">
                Lawn care that keeps edges sharp and turf thick without overcomplicating the schedule.
              </li>
            </ul>
          </Reveal>
          <Reveal variant="scale" delay={120}>
            <div className="media-depth relative aspect-[5/6] rounded-[1.75rem]">
              <Image
                src="/images/IMG_8096.jpg"
                alt={`Professionally landscaped palm bed with dark mulch in ${localityLabel}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ambient-drift px-5 py-20 sm:px-8" aria-labelledby="service-area-heading">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lawn-deep">Service area</p>
            <h2
              id="service-area-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Built for Broward yards.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              We serve homeowners throughout {localityLabel} — close enough for reliable scheduling, familiar with local turf, palms, and irrigation needs. We do not travel far outside the county.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-10 max-w-4xl text-[15px] leading-relaxed text-ink-soft">
              {site.serviceAreaCities.join(" · ")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-5 py-20 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center" variant="scale">
          <div className="mx-auto flow-line flow-line-center" aria-hidden="true" />
          <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let’s make your yard the calmest place on the block.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
            Serving {site.serviceArea}. Call{" "}
            <a href={site.phoneHref} className="font-medium text-flow-deep transition-colors hover:text-ink">
              {site.phone}
            </a>{" "}
            or send a quick note — we typically reply the same business day.
          </p>
          <Link
            href="/contact/"
            className="btn-primary mt-8 inline-flex h-12 items-center rounded-full px-7 text-sm font-semibold"
          >
            Contact us
          </Link>
        </Reveal>
      </section>
    </>
  )
}
