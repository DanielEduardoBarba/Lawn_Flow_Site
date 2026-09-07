"use client"

import { FormEvent, useState } from "react"
import { site } from "@/lib/site"

const interests = ["Landscaping", "Irrigation", "Lawn Care", "General question"] as const

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get("name") || "").trim()
    const email = String(form.get("email") || "").trim()
    const phone = String(form.get("phone") || "").trim()
    const interest = String(form.get("interest") || "").trim()
    const message = String(form.get("message") || "").trim()

    const subject = encodeURIComponent(`Lawn Flow inquiry — ${interest || "General"}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\n\n${message}`,
    )

    const mailto = `mailto:${site.email}?subject=${subject}&body=${body}`
    window.location.assign(mailto)
    setStatus("sent")
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.75rem] border border-line bg-white p-8 sm:p-10">
        <p className="font-display text-2xl font-semibold text-ink">Thanks — your message is ready.</p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          Your email app should open with the details filled in. If it does not, write us directly at{" "}
          <a className="font-medium text-flow underline-offset-4 hover:underline" href={site.emailHref}>
            {site.email}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.75rem] border border-line bg-white p-8 sm:p-10"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-ink">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="h-12 w-full rounded-2xl border border-line bg-mist/40 px-4 text-[15px] outline-none transition focus:border-flow focus:bg-white"
            placeholder="Alex Rivera"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-ink">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="h-12 w-full rounded-2xl border border-line bg-mist/40 px-4 text-[15px] outline-none transition focus:border-flow focus:bg-white"
            placeholder="you@email.com"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-ink">Phone</span>
          <input
            name="phone"
            autoComplete="tel"
            className="h-12 w-full rounded-2xl border border-line bg-mist/40 px-4 text-[15px] outline-none transition focus:border-flow focus:bg-white"
            placeholder="(555) 000-0000"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-ink">Interest</span>
          <select
            name="interest"
            className="h-12 w-full rounded-2xl border border-line bg-mist/40 px-4 text-[15px] outline-none transition focus:border-flow focus:bg-white"
            defaultValue="Landscaping"
          >
            {interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-sm font-medium text-ink">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full resize-y rounded-2xl border border-line bg-mist/40 px-4 py-3 text-[15px] outline-none transition focus:border-flow focus:bg-white"
          placeholder="Tell us about your yard, timeline, and what you want improved."
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Send message
      </button>
    </form>
  )
}
