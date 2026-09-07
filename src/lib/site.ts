export const site = {
  name: "Lawn Flow",
  legalName: "Lawn Flow Landscaping",
  tagline: "Landscaping · Irrigation · Lawn Care",
  description:
    "Lawn Flow designs, installs, and maintains landscapes, irrigation systems, and healthy lawns with clean craftsmanship and lasting results.",
  url: "https://lawnflow.example.com",
  phone: "(555) 014-2780",
  phoneHref: "tel:+15550142780",
  email: "hello@lawnflow.example.com",
  emailHref: "mailto:hello@lawnflow.example.com",
  address: {
    street: "1240 Greenery Lane",
    city: "Riverside",
    region: "FL",
    postal: "32001",
    country: "US",
  },
  hours: "Mon–Sat · 7:00 AM – 6:00 PM",
  serviceArea: "Riverside & surrounding neighborhoods",
  social: {
    instagram: "https://instagram.com/lawnflow",
    facebook: "https://facebook.com/lawnflow",
  },
} as const

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}`
