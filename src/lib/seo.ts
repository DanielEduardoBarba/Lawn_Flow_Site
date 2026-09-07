import type { Metadata } from "next"
import { localityLabel, site } from "@/lib/site"

type PageSeoInput = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  keywords?: readonly string[]
  type?: "website" | "article"
}

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${site.url}${normalized}`
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = site.ogImage,
  imageAlt = `${site.name} landscaping and lawn care in ${localityLabel}`,
  keywords = site.keywords,
  type = "website",
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    keywords: [...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1600,
          height: 1200,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "LandscapingBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: [absoluteUrl(site.logo), absoluteUrl(site.ogImage)],
    logo: absoluteUrl(site.logo),
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: site.county,
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      ...site.serviceAreaCities.map((city) => ({
        "@type": "City",
        name: city,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: site.county,
        },
      })),
    ],
    openingHoursSpecification: site.openingHoursSpecification.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      opens: entry.opens,
      closes: entry.closes,
    })),
    sameAs: [site.social.instagram, site.social.facebook],
    knowsAbout: [...site.serviceTypes],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${site.name} outdoor services`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landscaping",
            description:
              "Residential landscaping including trees, palms, privacy hedges, mulch beds, and finish details.",
            url: absoluteUrl("/landscaping/"),
            areaServed: localityLabel,
            provider: { "@id": `${site.url}/#business` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Irrigation",
            description:
              "Sprinkler system installation, PVC repair, zoning, and seasonal irrigation tune-ups.",
            url: absoluteUrl("/irrigation/"),
            areaServed: localityLabel,
            provider: { "@id": `${site.url}/#business` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lawn Care",
            description:
              "Professional lawn mowing, sidewalk edging, turf health support, and ongoing maintenance.",
            url: absoluteUrl("/lawncare/"),
            areaServed: localityLabel,
            provider: { "@id": `${site.url}/#business` },
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      areaServed: localityLabel,
      availableLanguage: ["English"],
    },
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.shortDescription,
    publisher: { "@id": `${site.url}/#business` },
    inLanguage: "en-US",
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function serviceJsonLd(input: {
  name: string
  description: string
  path: string
  image: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    image: absoluteUrl(input.image),
    provider: { "@id": `${site.url}/#business` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.county,
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    },
    serviceType: input.name,
  }
}
