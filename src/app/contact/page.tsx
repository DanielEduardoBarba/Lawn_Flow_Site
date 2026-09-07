import type { Metadata } from "next"
import { ContactForm } from "@/components/ContactForm"
import { fullAddress, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Lawn Flow for landscaping, irrigation, and lawn care quotes. Call, email, or send a message — we reply the same business day.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact Lawn Flow",
    description:
      "Request a visit for landscaping, irrigation, or lawn care. Serving Riverside and nearby neighborhoods.",
    url: `${site.url}/contact/`,
  },
}

export default function ContactPage() {
  return (
    <section className="surface-water px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-flow">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Tell us about your yard.
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-soft">
            Share a few details and we will follow up with next steps. Prefer a call? We are happy to talk through the project live.
          </p>

          <dl className="mt-10 space-y-6 text-[15px]">
            <div>
              <dt className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                Phone
              </dt>
              <dd className="mt-1.5">
                <a href={site.phoneHref} className="text-flow transition-colors hover:text-flow-deep">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                Email
              </dt>
              <dd className="mt-1.5">
                <a href={site.emailHref} className="text-flow transition-colors hover:text-flow-deep">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                Address
              </dt>
              <dd className="mt-1.5 text-ink-soft">
                <address className="not-italic leading-relaxed">{fullAddress}</address>
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
              <dd className="mt-1.5 text-ink-soft">{site.serviceArea}</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
