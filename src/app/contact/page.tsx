import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ContactForm } from "@/components/ContactForm"
import { ContactJsonLd } from "@/components/JsonLd"
import { Reveal } from "@/components/Reveal"
import { buildPageMetadata } from "@/lib/seo"
import { localityLabel, locationLabel, site } from "@/lib/site"

export const metadata: Metadata = buildPageMetadata({
  title: `Contact | Free Quote in ${localityLabel}`,
  description: `Contact Lawn Flow for landscaping, irrigation, and lawn care quotes in ${localityLabel}. Call, email, or send a message — we reply the same business day.`,
  path: "/contact/",
  keywords: [
    "contact Lawn Flow",
    "landscaping quote Broward County",
    "lawn care estimate Broward Area",
    "irrigation repair quote Broward",
  ],
})

export default function ContactPage() {
  return (
    <>
      <ContactJsonLd />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="ambient-drift surface-water px-5 pb-16 pt-4 sm:px-8 sm:pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-flow-deep">Contact</p>
            <div className="mt-3 flow-line" aria-hidden="true" />
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Tell us about your yard.
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-soft">
              {site.contactFormEnabled
                ? `Share a few details and we will follow up with next steps for properties in ${localityLabel}. Prefer a call? We are happy to talk through the project live.`
                : `Call or email us for a quote on landscaping, irrigation, or lawn care in ${localityLabel}. We typically reply the same business day.`}
            </p>

            <dl className="mt-10 space-y-6 text-[15px]">
              <div>
                <dt className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                  Phone
                </dt>
                <dd className="mt-1.5">
                  <a href={site.phoneHref} className="font-medium text-flow-deep transition-colors hover:text-ink">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                  Email
                </dt>
                <dd className="mt-1.5">
                  <a href={site.emailHref} className="font-medium text-flow-deep transition-colors hover:text-ink">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                  Location
                </dt>
                <dd className="mt-1.5 text-ink-soft">
                  <address className="not-italic leading-relaxed">{locationLabel}</address>
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                  Hours
                </dt>
                <dd className="mt-1.5 text-ink-soft">{site.hours}</dd>
              </div>
              <div>
                <dt className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                  Service area
                </dt>
                <dd className="mt-1.5 text-ink-soft">
                  {site.areaLabel} — including {site.serviceAreaCities.slice(0, 6).join(", ")}, and nearby cities in Broward County.
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal variant="scale" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
