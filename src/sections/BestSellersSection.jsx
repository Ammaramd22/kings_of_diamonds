import { CarouselRail } from '../components/lux/CarouselRail'
import { ScrollReveal } from '../components/lux/ScrollReveal'
import { Container } from '../components/lux/Container'
import { bestSellers, images } from '../content/home'

const products = [
  { title: 'Emma', image: images.bestSellerEmma },
  { title: 'Bella', image: images.bestSellerBella },
  { title: 'Francesca', image: images.bestSellerFrancesca },
  { title: 'Imani', image: images.bestSellerImani },
]

export function BestSellersSection() {
  return (
    <section className="overflow-x-clip bg-[#f1ecf8] py-14 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal variant="zoom" once={false}>
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="font-sans text-xl font-semibold uppercase tracking-[0.12em] text-header-ink sm:text-[1.35rem] sm:tracking-[0.14em]">
              {bestSellers.title}
            </h2>
            <p className="mx-auto mt-3 max-w-[min(100%,52rem)] px-2 font-sans text-[0.8125rem] font-normal leading-relaxed text-stone sm:px-0 sm:text-sm">
              {bestSellers.description}
            </p>
          </header>
        </ScrollReveal>

        <CarouselRail className="mt-10 sm:mt-12 lg:mt-14 lg:grid-cols-4">
          {products.map((item, index) => (
            <ScrollReveal
              key={item.title}
              variant="rise"
              once={false}
              delay={index * 110}
              className="shrink-0 lg:shrink"
            >
              <a
                href="#"
                className="
                  group block w-[min(78vw,16.5rem)] snap-start
                  sm:w-[min(42vw,17rem)]
                  lg:w-auto lg:min-w-0
                "
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe4f8]">
                  <img
                    src={item.image}
                    alt={`${item.title} engagement ring`}
                    className="
                      absolute inset-0 h-full w-full
                      object-cover object-center
                      transition-transform duration-700 ease-out-lux
                      group-hover:scale-[1.03]
                    "
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="mt-3.5 text-left font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-header-ink sm:text-[0.68rem]">
                  {item.title}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </CarouselRail>
      </Container>
    </section>
  )
}
