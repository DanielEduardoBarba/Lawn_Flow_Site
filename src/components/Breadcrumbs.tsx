import Link from "next/link"

type Crumb = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-5 pt-6 sm:px-8">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 text-sm text-ink-soft">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-lawn-deep">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "font-medium text-ink" : undefined} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
