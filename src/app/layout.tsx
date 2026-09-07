import type { Metadata } from "next"
import { Figtree, Syne } from "next/font/google"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { JsonLd } from "@/components/JsonLd"
import { site } from "@/lib/site"
import "./globals.css"

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
})

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Landscaping, Irrigation & Lawn Care`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "landscaping",
    "irrigation",
    "lawn care",
    "sprinkler repair",
    "privacy hedges",
    "lawn maintenance",
    "Lawn Flow",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Landscaping, Irrigation & Lawn Care`,
    description: site.description,
    images: [
      {
        url: "/logo.png",
        width: 1254,
        height: 1254,
        alt: "Lawn Flow logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Landscaping, Irrigation & Lawn Care`,
    description: site.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
