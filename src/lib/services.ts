export type GalleryItem = {
  src: string
  alt: string
  caption: string
}

export type ServiceTheme = "trees" | "water" | "grass"

export type Service = {
  slug: "landscaping" | "irrigation" | "lawncare"
  name: string
  shortName: string
  theme: ServiceTheme
  accent: "lawn" | "flow"
  headline: string
  summary: string
  seoTitle: string
  seoDescription: string
  heroImage: string
  heroAlt: string
  offerings: { title: string; body: string }[]
  gallery: GalleryItem[]
}

export const services: Service[] = [
  {
    slug: "landscaping",
    name: "Landscaping",
    shortName: "Landscaping",
    theme: "trees",
    accent: "lawn",
    headline: "Landscapes shaped around trees, structure, and calm.",
    summary:
      "From privacy hedges to palm beds and layered plantings, we build outdoor spaces that feel intentional, tidy, and alive.",
    seoTitle: "Landscaping Services | Trees, Beds & Privacy Hedges",
    seoDescription:
      "Professional landscaping by Lawn Flow — palm plantings, privacy hedges, mulch beds, and clean outdoor design for residential properties.",
    heroImage: "/images/IMG_8096.jpg",
    heroAlt: "Curved mulch bed with a palm tree and layered shrubs against a white wall",
    offerings: [
      {
        title: "Trees & palms",
        body: "Thoughtful placement, healthy planting, and tidy surrounds that let specimen trees and palms become the focus of the yard.",
      },
      {
        title: "Privacy hedges",
        body: "Sharp, uniform hedging for screening and structure — trimmed with clean edges that read polished from the street.",
      },
      {
        title: "Beds & plantings",
        body: "Fresh mulch, defined borders, and plant combinations that balance texture, color, and low-maintenance growth.",
      },
      {
        title: "Finish details",
        body: "Edging, lighting placement, and cleanup so the landscape looks complete the day we leave — and stays easy to care for.",
      },
    ],
    gallery: [
      {
        src: "/images/IMG_8096.jpg",
        alt: "Modern planting bed with palm, yucca, and dark mulch",
        caption: "Layered beds with palms and clean stone edging",
      },
      {
        src: "/images/IMG_8672.jpg",
        alt: "Tall manicured privacy hedge beside a grass strip",
        caption: "Precision hedge work for privacy and form",
      },
      {
        src: "/images/IMG_9571.jpg",
        alt: "Front yard with flowering shrub, lawn, and mature trees",
        caption: "Trees and flowering structure framing the home",
      },
    ],
  },
  {
    slug: "irrigation",
    name: "Irrigation",
    shortName: "Irrigation",
    theme: "water",
    accent: "flow",
    headline: "Water that reaches every root — quietly and efficiently.",
    summary:
      "We install, repair, and tune irrigation so lawns and plantings get the right coverage without waste, dry spots, or soggy edges.",
    seoTitle: "Irrigation Installation & Repair | Smart Watering",
    seoDescription:
      "Lawn Flow irrigation services — sprinkler installs, PVC repairs, zoning, and system tune-ups that keep landscapes evenly watered.",
    heroImage: "/images/IMG_0220.jpg",
    heroAlt: "Healthy green front lawn being watered by a residential sprinkler system",
    offerings: [
      {
        title: "System installation",
        body: "New sprinkler layouts designed around plant zones, sun exposure, and water pressure for even, reliable coverage.",
      },
      {
        title: "Repairs & replacements",
        body: "Broken heads, leaking fittings, damaged PVC, and swing-pipe fixes handled cleanly so the system looks and works right again.",
      },
      {
        title: "Zoning & efficiency",
        body: "Separate lawn and bed zones, head adjustments, and schedules that protect plant health while using water wisely.",
      },
      {
        title: "Seasonal tune-ups",
        body: "Walk-throughs to catch clogged nozzles, misaligned sprays, and dry corners before they become brown patches.",
      },
    ],
    gallery: [
      {
        src: "/images/IMG_0220.jpg",
        alt: "Sprinkler mist watering a rectangular front lawn",
        caption: "Even coverage across a finished front lawn",
      },
      {
        src: "/images/IMG_0086.jpg",
        alt: "Pop-up sprinkler head connected with flexible swing pipe",
        caption: "Pop-up head installs with flexible swing pipe",
      },
      {
        src: "/images/IMG_9942.jpg",
        alt: "Excavated sprinkler assembly in dark soil",
        caption: "Careful underground repairs at the source",
      },
      {
        src: "/images/IMG_0024.jpg",
        alt: "PVC irrigation pipe joints in a shallow trench",
        caption: "Clean PVC joints for lasting water lines",
      },
    ],
  },
  {
    slug: "lawncare",
    name: "Lawn Care",
    shortName: "Lawn Care",
    theme: "grass",
    accent: "lawn",
    headline: "Lawns that look thick, even, and freshly edged.",
    summary:
      "Routine mowing, crisp edges, and healthy turf care so your grass stays dense, green, and welcoming week after week.",
    seoTitle: "Lawn Care & Maintenance | Mowing, Edging & Turf Health",
    seoDescription:
      "Lawn Flow lawn care — professional mowing, sidewalk edging, turf health, and tidy finishes for residential properties.",
    heroImage: "/images/IMG_8698.jpg",
    heroAlt: "Neat residential front lawn with sidewalk and landscaped beds",
    offerings: [
      {
        title: "Mowing & trimming",
        body: "Consistent cut heights and clean pass patterns that keep turf dense without scalp marks or ragged edges.",
      },
      {
        title: "Edging & detailing",
        body: "Sharp lines along sidewalks, driveways, and beds so the lawn reads intentional from the curb.",
      },
      {
        title: "Turf health",
        body: "Practical guidance and care for thin spots, seasonal stress, and recovering color after heat or heavy rain.",
      },
      {
        title: "Ongoing maintenance",
        body: "Reliable schedules that keep grass looking freshly finished — without you managing the calendar.",
      },
    ],
    gallery: [
      {
        src: "/images/IMG_8698.jpg",
        alt: "Front lawn with mailbox and palm plantings near the house",
        caption: "Open lawn with tidy bed transitions",
      },
      {
        src: "/images/IMG_9270.jpg",
        alt: "Grass strips between hedge, sidewalk, and street",
        caption: "Crisp grass ribbons along walkways",
      },
      {
        src: "/images/IMG_0220.jpg",
        alt: "Lush rectangular lawn in front of a ranch-style home",
        caption: "Thick, even turf ready for weekly care",
      },
    ],
  },
]

export function getService(slug: Service["slug"]) {
  const service = services.find((item) => item.slug === slug)
  if (!service) {
    throw new Error(`Unknown service: ${slug}`)
  }
  return service
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/landscaping/", label: "Landscaping" },
  { href: "/irrigation/", label: "Irrigation" },
  { href: "/lawncare/", label: "Lawn Care" },
  { href: "/contact/", label: "Contact" },
] as const
