import { IconPlay } from '../components/icons'
import { showroomSplit } from '../content/home'

const purpleCtaClass =
  'inline-flex items-center justify-center bg-header-accent px-7 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#4c1d95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-header-accent/50 focus-visible:ring-offset-2'

export function ShowroomSplitSection() {
  const { workshop, interviews } = showroomSplit

  return (
    <section className="overflow-x-clip">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative isolate flex min-h-[26rem] items-end sm:min-h-[30rem] lg:min-h-[34rem]">
          <img
            src={workshop.image}
            alt="Kings of Diamonds workshop team"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12021c]/95 via-[#1a0a28]/70 to-[#1a0a28]/30" aria-hidden />
          <div className="relative z-10 w-full px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-16">
            <h2 className="max-w-md font-serif text-[1.75rem] font-medium leading-[1.15] text-white sm:text-4xl lg:text-[2.4rem]">
              {workshop.title}
            </h2>
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
              {workshop.description}
            </p>
            <div className="mt-8 sm:mt-9">
              <a href="#" className={purpleCtaClass}>
                {workshop.cta}
              </a>
            </div>
          </div>
        </div>

        <div className="relative isolate flex min-h-[26rem] items-end sm:min-h-[30rem] lg:min-h-[34rem]">
          <img
            src={interviews.image}
            alt="Couple sharing their Kings of Diamonds story"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12021c]/90 via-[#1a0a28]/55 to-[#1a0a28]/20" aria-hidden />
          <a
            href="#"
            className="group absolute inset-0 z-[1] flex items-center justify-center"
            aria-label="Play client interviews video"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/90 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20">
              <IconPlay className="ml-1 h-7 w-7 sm:h-8 sm:w-8" />
            </span>
          </a>
          <div className="relative z-10 w-full px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-16">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#c9b4e8]">
              {interviews.eyebrow}
            </p>
            <h2 className="mt-3 max-w-md font-serif text-[1.75rem] font-medium leading-[1.15] text-white sm:text-4xl lg:text-[2.4rem]">
              {interviews.title}
            </h2>
            <div className="mt-8 sm:mt-9">
              <a href="#" className={purpleCtaClass}>
                {interviews.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
