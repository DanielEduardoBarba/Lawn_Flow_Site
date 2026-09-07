import type { Metadata } from "next"
import {
  Offerings,
  PhotoGallery,
  ServiceCTA,
  ServiceHero,
} from "@/components/ServiceSections"
import { getService } from "@/lib/services"
import { site } from "@/lib/site"

const service = getService("irrigation")

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: {
    canonical: "/irrigation/",
  },
  openGraph: {
    title: service.seoTitle,
    description: service.seoDescription,
    url: `${site.url}/irrigation/`,
    images: [{ url: service.heroImage, alt: service.heroAlt }],
  },
}

export default function IrrigationPage() {
  return (
    <>
      <ServiceHero service={service} />
      <Offerings service={service} />
      <PhotoGallery items={service.gallery} accent={service.accent} />
      <ServiceCTA accent={service.accent} />
    </>
  )
}
