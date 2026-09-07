import type { Metadata } from "next"
import {
  Offerings,
  PhotoGallery,
  ServiceCTA,
  ServiceHero,
} from "@/components/ServiceSections"
import { getService } from "@/lib/services"
import { site } from "@/lib/site"

const service = getService("landscaping")

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: {
    canonical: "/landscaping/",
  },
  openGraph: {
    title: service.seoTitle,
    description: service.seoDescription,
    url: `${site.url}/landscaping/`,
    images: [{ url: service.heroImage, alt: service.heroAlt }],
  },
}

export default function LandscapingPage() {
  return (
    <>
      <ServiceHero service={service} />
      <Offerings service={service} />
      <PhotoGallery items={service.gallery} accent={service.accent} />
      <ServiceCTA accent={service.accent} />
    </>
  )
}
