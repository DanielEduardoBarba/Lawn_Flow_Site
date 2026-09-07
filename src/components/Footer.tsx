import Link from "next/link"
import { BrandLogo } from "@/components/BrandLogo"
import { services } from "@/lib/services"
import { fullAddress, site } from "@/lib/site"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-line bg-mist">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-5">
          <BrandLogo size="md" />
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
            {site.shortDescription}
          </p>
          <div className="flow-line" aria-hidden="true" />
          <p className="text-sm text-ink-soft">{site.tagline}</p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}/`}
                  className="text-[15px] text-ink-soft transition-colors hover:text-lawn-deep"
                >
                  {service.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact/"
                className="text-[15px] text-ink-soft transition-colors hover:text-flow-deep"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-[15px] text-ink-soft">
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-flow-deep">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="transition-colors hover:text-flow-deep">
                {site.email}
              </a>
            </li>
            <li>
              <address className="not-italic leading-relaxed">{fullAddress}</address>
            </li>
            <li>{site.hours}</li>
            <li>{site.serviceArea}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Crafted for clean landscapes and reliable water flow.</p>
        </div>
      </div>
    </footer>
  )
}
