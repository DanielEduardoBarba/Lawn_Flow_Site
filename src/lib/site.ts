export const site = {
  name: "Lawn Flow",
  legalName: "Lawn Flow Landscaping",
  tagline: "Landscaping · Irrigation · Lawn Care",
  description:
    "Lawn Flow provides landscaping, irrigation, and lawn care across Broward County, FL. We design outdoor spaces, install and repair sprinkler systems, and keep lawns thick, edged, and healthy.",
  shortDescription:
    "Professional landscaping, irrigation installation & repair, and lawn care serving Broward County, FL.",
  url: "https://lawnflow.example.com",
  phone: "(954) 601-6440",
  phoneHref: "tel:+19546016440",
  phoneE164: "+1-954-601-6440",
  email: "lawnflowbroward23@gmail.com",
  emailHref: "mailto:lawnflowbroward23@gmail.com",
  /** Flip to true once the contact API key is wired up */
  contactFormEnabled: false,
  address: {
    region: "FL",
    country: "US",
  },
  county: "Broward County",
  areaLabel: "Broward Area",
  geo: {
    latitude: 26.1224,
    longitude: -80.1373,
  },
  hours: "Mon–Sat · 7:00 AM – 6:00 PM",
  openingHoursSpecification: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  serviceArea: "Broward County, FL",
  serviceAreaCities: [
    "Fort Lauderdale",
    "Hollywood",
    "Pembroke Pines",
    "Miramar",
    "Coral Springs",
    "Pompano Beach",
    "Davie",
    "Plantation",
    "Sunrise",
    "Deerfield Beach",
    "Weston",
    "Tamarac",
    "Margate",
    "Coconut Creek",
    "Oakland Park",
    "Lauderdale Lakes",
    "Lauderhill",
    "Parkland",
  ],
  serviceTypes: [
    "Landscaping",
    "Landscape design and installation",
    "Privacy hedges",
    "Tree and palm planting",
    "Mulch beds and edging",
    "Irrigation installation",
    "Sprinkler repair",
    "Irrigation zoning and tune-ups",
    "Lawn care",
    "Lawn mowing and edging",
    "Residential turf maintenance",
  ],
  keywords: [
    "landscaping Broward County",
    "lawn care Broward County FL",
    "irrigation repair Fort Lauderdale",
    "sprinkler installation Broward",
    "lawn mowing Hollywood FL",
    "landscaping Pembroke Pines",
    "privacy hedges Broward",
    "residential landscaping South Florida",
    "Lawn Flow",
  ],
  ogImage: "/images/IMG_0220.jpg",
  logo: "/logo.png",
  social: {
    instagram: "https://instagram.com/lawnflow",
    facebook: "https://facebook.com/lawnflow",
  },
} as const

/** Display location when no street address is published */
export const locationLabel = `${site.county}, ${site.address.region}`

/** Primary SEO locality — keep searches scoped to Broward */
export const localityLabel = "Broward County, FL"
