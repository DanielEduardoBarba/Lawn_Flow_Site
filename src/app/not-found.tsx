import Link from "next/link"

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-lawn">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
          This path is overgrown.
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
          The page you are looking for is not here. Head home or jump to a service.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white"
          >
            Back home
          </Link>
          <Link
            href="/contact/"
            className="inline-flex h-12 items-center rounded-full border border-line px-6 text-sm font-semibold text-ink"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
