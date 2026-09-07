export type GalleryItem = {
  src: string
  alt: string
  caption: string
}

export type ServiceTheme = "trees" | "water" | "grass"

export type ServiceFaq = {
  question: string
  answer: string
}

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
  keywords: string[]
  body: string
  heroImage: string
  heroAlt: string
  offerings: { title: string; body: string }[]
  gallery: GalleryItem[]
  faqs: ServiceFaq[]
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
    seoTitle: "Landscaping Company in Broward County, FL | Trees, Hedges & Beds",
    seoDescription:
      "Hire Lawn Flow for residential landscaping in Broward County, FL — palm plantings, privacy hedges, mulch beds, and clean outdoor design that looks finished from the curb.",
    keywords: [
      "landscaping Broward County FL",
      "landscape company Fort Lauderdale",
      "privacy hedges installation",
      "palm tree planting",
      "mulch beds landscaping",
      "residential landscaping Florida",
    ],
    body: "Lawn Flow landscaping services across Broward County focus on structure first: trees and palms placed with intention, privacy hedges cut clean, and beds finished with defined edges and fresh mulch. Whether you need a front-yard refresh or a full planting plan, we build outdoor spaces that stay tidy through South Florida heat and rainy seasons.",
    heroImage: "/images/IMG_8096.jpg",
    heroAlt:
      "Curved residential landscaping bed in Broward County FL with palm tree, shrubs, and dark mulch against a white wall",
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
        alt: "Modern landscaping planting bed with palm, yucca, and dark mulch in Broward County Florida",
        caption: "Layered beds with palms and clean stone edging",
      },
      {
        src: "/images/IMG_8672.jpg",
        alt: "Tall manicured privacy hedge beside a grass strip for residential screening",
        caption: "Precision hedge work for privacy and form",
      },
      {
        src: "/images/IMG_9571.jpg",
        alt: "Front yard landscaping with flowering shrub, lawn, and mature trees",
        caption: "Trees and flowering structure framing the home",
      },
    ],
    faqs: [
      {
        question: "What landscaping services do you offer in Broward County, FL?",
        answer:
          "We handle residential landscaping including tree and palm planting, privacy hedges, mulch beds, edging, and finish cleanup so the yard looks complete from day one.",
      },
      {
        question: "Do you design new plant beds or only install what I choose?",
        answer:
          "Both. We can install a plant list you already love, or recommend combinations that fit sun exposure, watering, and the look of your home.",
      },
      {
        question: "How long does a typical landscaping project take?",
        answer:
          "Small bed refreshes can finish in a day. Larger planting and hedge projects usually take a few visits depending on plant availability and site prep.",
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
    seoTitle: "Irrigation Installation & Sprinkler Repair in Broward County, FL",
    seoDescription:
      "Lawn Flow installs and repairs irrigation systems across Broward County, FL — new sprinklers, PVC fixes, zoning, and tune-ups that stop dry spots and wasted water.",
    keywords: [
      "irrigation Broward County FL",
      "sprinkler repair near me",
      "sprinkler installation Florida",
      "irrigation system tune-up",
      "PVC irrigation repair",
      "lawn sprinkler company",
    ],
    body: "Reliable irrigation is the difference between a landscape that thrives and one that fights dry corners all summer. Lawn Flow installs new sprinkler systems, repairs broken heads and leaking PVC, and tunes zones so Broward County lawns and beds get even coverage without overwatering.",
    heroImage: "/images/IMG_0220.jpg",
    heroAlt:
      "Healthy green front lawn in Broward County Florida being watered by a residential sprinkler irrigation system",
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
        alt: "Residential sprinkler mist watering a rectangular front lawn evenly",
        caption: "Even coverage across a finished front lawn",
      },
      {
        src: "/images/IMG_0086.jpg",
        alt: "Pop-up sprinkler head connected with flexible swing pipe during irrigation repair",
        caption: "Pop-up head installs with flexible swing pipe",
      },
      {
        src: "/images/IMG_9942.jpg",
        alt: "Excavated sprinkler assembly in soil for underground irrigation repair",
        caption: "Careful underground repairs at the source",
      },
      {
        src: "/images/IMG_0024.jpg",
        alt: "PVC irrigation pipe joints in a shallow trench ready for lasting water lines",
        caption: "Clean PVC joints for lasting water lines",
      },
    ],
    faqs: [
      {
        question: "Can you repair an existing sprinkler system?",
        answer:
          "Yes. We diagnose broken heads, leaking fittings, damaged PVC, and coverage gaps, then repair the system so watering is even again.",
      },
      {
        question: "Do you install new irrigation systems for lawns and plant beds?",
        answer:
          "We design and install residential irrigation with separate zones for turf and beds so each area gets the right amount of water.",
      },
      {
        question: "How often should irrigation systems be tuned up in Florida?",
        answer:
          "A seasonal check is ideal — especially before peak heat — to catch clogged nozzles, tilted heads, and dry corners early.",
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
    seoTitle: "Lawn Care & Mowing Service in Broward County, FL",
    seoDescription:
      "Professional lawn care in Broward County, FL from Lawn Flow — weekly mowing, sidewalk edging, turf health support, and tidy finishes that stay curb-ready.",
    keywords: [
      "lawn care Broward County FL",
      "lawn mowing service Fort Lauderdale",
      "lawn edging near me",
      "residential lawn maintenance Florida",
      "weekly lawn service",
      "turf care Broward County",
    ],
    body: "Consistent lawn care keeps Broward County yards looking intentional instead of overgrown between visits. Lawn Flow provides professional mowing, sharp edging along sidewalks and driveways, and practical turf guidance so grass stays thick through South Florida’s growing season.",
    heroImage: "/images/IMG_8698.jpg",
    heroAlt:
      "Neat residential front lawn in Broward County FL with sidewalk edging and landscaped beds",
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
        alt: "Well-maintained front lawn with mailbox and palm plantings after professional lawn care",
        caption: "Open lawn with tidy bed transitions",
      },
      {
        src: "/images/IMG_9270.jpg",
        alt: "Crisp grass strips between privacy hedge, sidewalk, and street after edging",
        caption: "Crisp grass ribbons along walkways",
      },
      {
        src: "/images/IMG_0220.jpg",
        alt: "Lush rectangular lawn in front of a ranch-style home ready for weekly lawn service",
        caption: "Thick, even turf ready for weekly care",
      },
    ],
    faqs: [
      {
        question: "How often should I schedule lawn mowing in Broward County?",
        answer:
          "Most residential lawns do best on a weekly or biweekly schedule during peak growth, then adjust as seasons slow down.",
      },
      {
        question: "Do you edge sidewalks and driveways with every visit?",
        answer:
          "Yes. Clean edging is part of a finished lawn — we detail sidewalks, driveways, and bed lines so the property looks sharp from the street.",
      },
      {
        question: "Can lawn care be combined with landscaping or irrigation?",
        answer:
          "Absolutely. Many clients pair maintenance with landscape upgrades or irrigation tune-ups so the whole yard stays healthy and cohesive.",
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
