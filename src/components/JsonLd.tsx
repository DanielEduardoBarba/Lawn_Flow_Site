import {
  breadcrumbJsonLd,
  faqJsonLd,
  localBusinessJsonLd,
  serviceJsonLd,
  websiteJsonLd,
} from "@/lib/seo"

type JsonLdProps = {
  data?: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  const payload = data ?? [localBusinessJsonLd(), websiteJsonLd()]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}

export function ServiceJsonLd({
  name,
  description,
  path,
  image,
  faqs,
}: {
  name: string
  description: string
  path: string
  image: string
  faqs: { question: string; answer: string }[]
}) {
  return (
    <JsonLd
      data={[
        serviceJsonLd({ name, description, path, image }),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name, path },
        ]),
        faqJsonLd(faqs),
      ]}
    />
  )
}

export function ContactJsonLd() {
  return (
    <JsonLd
      data={[
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]),
      ]}
    />
  )
}
