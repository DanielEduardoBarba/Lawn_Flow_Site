import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { FaqSection } from "@/components/FaqSection"
import { ServiceJsonLd } from "@/components/JsonLd"
import {
  Offerings,
  PhotoGallery,
  ServiceCTA,
  ServiceHero,
} from "@/components/ServiceSections"
import { getService } from "@/lib/services"
import { buildPageMetadata } from "@/lib/seo"

const service = getService("irrigation")

export const metadata: Metadata = buildPageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: "/irrigation/",
  image: service.heroImage,
  imageAlt: service.heroAlt,
  keywords: service.keywords,
})

export default function IrrigationPage() {
  return (
    <>
      <ServiceJsonLd
        name={service.name}
        description={service.seoDescription}
        path="/irrigation/"
        image={service.heroImage}
        faqs={service.faqs}
      />
      <ServiceHero service={service} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Irrigation" },
        ]}
      />
      <Offerings service={service} />
      <PhotoGallery items={service.gallery} accent={service.accent} />
      <FaqSection
        items={service.faqs}
        accent={service.accent}
        heading={`${service.name} questions`}
        intro={`Straight answers about ${service.name.toLowerCase()} for homes across Broward County.`}
      />
      <ServiceCTA accent={service.accent} />
    </>
  )
}
