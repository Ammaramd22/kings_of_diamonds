import { useState } from 'react'
import { IconChevronDown, IconDiamondSmall } from '../components/icons'
import { Container } from '../components/lux/Container'
import { faqSection, faqs } from '../content/home'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="relative overflow-x-clip bg-[#ebe6f2] py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#e4ddf0] via-[#ebe6f2] to-[#ddd4ec]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#c9b4e8]/45 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-[#b8a0d8]/40 blur-3xl"
        aria-hidden
      />

      <Container className="relative z-10 max-w-[900px]">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-header-ink/80">
            {faqSection.eyebrow}
          </p>
          <IconDiamondSmall className="mx-auto mt-4 h-5 w-5 text-header-accent" strokeWidth={1.25} />
          <h2 className="mt-4 font-serif text-3xl font-medium text-header-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {faqSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-stone sm:text-[0.95rem]">
            {faqSection.description}
          </p>
        </header>

        <ul className="mt-12 divide-y divide-[#c9b4e8]/70 border-y border-[#c9b4e8]/70 sm:mt-14">
          {faqs.map((item, i) => {
            const open = openIndex === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`

            return (
              <li key={item.q}>
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center gap-3 py-5 text-left sm:gap-4 sm:py-6"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={panelId}
                >
                  <IconChevronDown
                    className={`h-4 w-4 shrink-0 text-header-accent transition-transform duration-300 ${
                      open ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.75}
                  />
                  <span className="min-w-0 flex-1 pr-2 font-sans text-sm leading-snug text-header-ink sm:pr-0 sm:text-[0.9375rem]">
                    {item.q}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out-lux ${
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pl-7 font-sans text-sm leading-relaxed text-stone sm:pb-6 sm:pl-8 sm:text-[0.9375rem]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
