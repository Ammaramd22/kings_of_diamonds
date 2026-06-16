import { useLayoutEffect, useRef, useState } from 'react'
import { IconChevronRight, IconDiamondSmall } from '../components/icons'
import { Container } from '../components/lux/Container'
import { clientReviews } from '../content/home'

const slideThemes = [
  { bg: '#ebe4f8', border: '#d8cce8', footer: '#e6dcf4' },
  { bg: '#e6dcf4', border: '#c9b4e8', footer: '#ddd4ec' },
]

function StarRow() {
  return (
    <div className="flex gap-px" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-3 w-3 text-header-accent"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 19.9l1.1-6.5L2.6 8.8l6.5-.9L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review, theme, isActive }) {
  return (
    <article
      className={`
        review-card flex h-full w-[min(78vw,14.25rem)] shrink-0 flex-col overflow-hidden border
        shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-[opacity,transform] duration-300 ease-out-lux
        sm:w-[15rem]
        ${isActive ? 'scale-100 opacity-100' : 'scale-[0.97] opacity-55'}
      `}
      style={{
        backgroundColor: theme.bg,
        borderColor: theme.border,
      }}
    >
      <div className="flex flex-1 flex-col px-4 py-4">
        <div className="flex items-center justify-between gap-2">
          <StarRow />
          <span className="font-sans text-[0.55rem] font-medium uppercase tracking-[0.08em] text-stone">
            {review.source}
          </span>
        </div>

        <p className="mt-3 line-clamp-5 font-sans text-[0.8125rem] leading-relaxed text-header-ink/90">
          {review.text}
        </p>
      </div>

      <div className="px-4 py-3" style={{ backgroundColor: theme.footer }}>
        <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-header-ink">
          {review.name}
        </p>
        {review.location && (
          <p className="mt-0.5 font-sans text-[0.58rem] text-stone">{review.location}</p>
        )}
      </div>
    </article>
  )
}

export function ClientReviewsSection() {
  const trackRef = useRef(null)
  const { reviews } = clientReviews
  const total = reviews.length
  const loopSlides = [...reviews, ...reviews, ...reviews]

  const [position, setPosition] = useState(total)
  const [animate, setAnimate] = useState(true)
  const [stepPx, setStepPx] = useState(0)

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      const card = track.querySelector('.review-card')
      if (!card) return
      const gap = Number.parseFloat(getComputedStyle(track).gap) || 12
      setStepPx(card.offsetWidth + gap)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  useLayoutEffect(() => {
    if (position >= 2 * total) {
      setAnimate(false)
      setPosition((p) => p - total)
    } else if (position < total) {
      setAnimate(false)
      setPosition((p) => p + total)
    }
  }, [position, total])

  const go = (direction) => {
    setAnimate(true)
    setPosition((current) => current + direction)
  }

  const translateX = stepPx
    ? `translateX(calc(50% - ${stepPx / 2}px - ${position * stepPx}px))`
    : 'translateX(0)'

  return (
    <section className="overflow-x-clip bg-[#1a0a28] py-14 sm:py-16 lg:py-20">
      <Container className="max-w-[1200px]">
        <header className="mx-auto max-w-2xl px-2 text-center sm:px-0">
          <IconDiamondSmall className="mx-auto h-5 w-5 text-[#c9b4e8]" strokeWidth={1.25} />
          <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#c9b4e8]">
            {clientReviews.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-2xl font-medium text-white sm:text-3xl lg:text-[2.5rem] lg:leading-tight">
            {clientReviews.title}
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-[#d8cce8] sm:text-base">
            {clientReviews.description}
          </p>
        </header>

        <div className="mt-10 flex items-center gap-2 sm:mt-12 sm:gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              text-white/45 transition-colors hover:text-white
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
            "
          >
            <IconChevronRight className="h-6 w-6 rotate-180" strokeWidth={1.25} />
          </button>

          <div className="min-w-0 flex-1 overflow-hidden py-1">
            <div
              ref={trackRef}
              className="flex gap-3 ease-out-lux will-change-transform"
              style={{
                transform: translateX,
                transition: animate
                  ? 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)'
                  : 'none',
              }}
            >
              {loopSlides.map((review, index) => (
                <ReviewCard
                  key={`${review.name}-${index}`}
                  review={review}
                  isActive={index === position}
                  theme={slideThemes[index % 2]}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              text-white/45 transition-colors hover:text-white
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
            "
          >
            <IconChevronRight className="h-6 w-6" strokeWidth={1.25} />
          </button>
        </div>
      </Container>
    </section>
  )
}
