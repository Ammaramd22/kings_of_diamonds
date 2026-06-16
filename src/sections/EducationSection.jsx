import { IconChevronRight } from '../components/icons'
import { CarouselRail } from '../components/lux/CarouselRail'
import { Container } from '../components/lux/Container'
import { education } from '../content/home'

export function EducationSection() {
  return (
    <section id="education" className="overflow-x-clip bg-[#f1ecf8] py-14 sm:py-16 lg:py-20">
      <Container>
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-xl font-semibold uppercase tracking-[0.12em] text-header-ink sm:text-[1.35rem] sm:tracking-[0.14em]">
            {education.title}
          </h2>
          <p className="mx-auto mt-3 px-2 font-sans text-[0.8125rem] leading-relaxed text-stone sm:px-0 sm:text-sm">
            {education.description}
          </p>
        </header>

        <CarouselRail className="mt-10 sm:mt-12 lg:mt-14 lg:grid-cols-3">
          {education.guides.map((guide) => (
            <a
              key={guide.title}
              href="#"
              className="
                block w-[min(78vw,17.5rem)] shrink-0 snap-start
                sm:w-[min(42vw,18rem)]
                lg:w-auto lg:min-w-0 lg:shrink
              "
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe4f8]">
                <img
                  src={guide.image}
                  alt={guide.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p className="mt-3.5 flex items-center gap-2 font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-header-ink sm:text-[0.68rem]">
                {guide.title}
                <IconChevronRight className="h-3.5 w-3.5" />
              </p>
            </a>
          ))}
        </CarouselRail>
      </Container>
    </section>
  )
}
