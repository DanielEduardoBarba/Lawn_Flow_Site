import { Reveal } from "@/components/Reveal"

export type FaqItem = {
  question: string
  answer: string
}

export function FaqSection({
  items,
  accent = "lawn",
  heading = "Common questions",
  intro,
}: {
  items: FaqItem[]
  accent?: "lawn" | "flow"
  heading?: string
  intro?: string
}) {
  const accentClass = accent === "flow" ? "text-flow-deep" : "text-lawn-deep"

  return (
    <section className="border-t border-line bg-mist px-5 py-20 sm:px-8" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${accentClass}`}>FAQ</p>
          <h2 id="faq-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {heading}
          </h2>
          {intro ? <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{intro}</p> : null}
        </Reveal>

        <div className="mt-10 space-y-3">
          {items.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <details className="group border-b border-line pb-3">
                <summary className="cursor-pointer list-none py-3 font-display text-lg font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span
                      className={`mt-1 shrink-0 text-sm transition-transform duration-300 group-open:rotate-45 ${accentClass}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="pb-4 text-[15px] leading-relaxed text-ink-soft">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
