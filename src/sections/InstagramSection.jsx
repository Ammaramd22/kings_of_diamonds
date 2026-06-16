import {
  IconDesignTools,
  IconDiamondSmall,
  IconInstagramReels,
  IconRingOutline,
  IconShieldGem,
  IconTruck,
} from '../components/icons'
import { Container } from '../components/lux/Container'
import { brandFeatures, instagramSection } from '../content/home'

const featureIcons = {
  truck: IconTruck,
  ring: IconRingOutline,
  shield: IconShieldGem,
  design: IconDesignTools,
}

export function InstagramSection() {
  return (
    <section id="instagram" className="overflow-x-clip bg-instagram-bg text-instagram-ink">
      <div className="py-12 sm:py-16 lg:py-20">
        <Container className="max-w-[1400px]">
          <header className="mx-auto max-w-2xl px-1 text-center">
            <h2 className="font-serif text-[clamp(1.75rem,6vw,3.25rem)] font-medium leading-tight">
              {instagramSection.title}
            </h2>

            <div className="mt-4 flex items-center justify-center gap-2 sm:mt-6 sm:gap-4">
              <span className="h-px w-10 bg-instagram-ink/30 sm:w-20" aria-hidden />
              <IconDiamondSmall className="h-5 w-5 shrink-0" strokeWidth={1.25} />
              <span className="h-px w-10 bg-instagram-ink/30 sm:w-20" aria-hidden />
            </div>

            <p className="mx-auto mt-4 max-w-xl px-2 font-sans text-[0.8125rem] leading-relaxed sm:mt-5 sm:px-0 sm:text-sm">
              {instagramSection.description}
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-4 lg:mt-14 lg:grid-cols-4 lg:gap-6">
            {instagramSection.posts.map((post) => (
              <li key={post.alt} className="min-w-0">
                <a
                  href={instagramSection.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square w-full overflow-hidden"
                  aria-label={`View on Instagram — ${post.alt}`}
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out-lux group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded bg-white/95 shadow-sm sm:right-2 sm:top-2 sm:h-7 sm:w-7">
                    <IconInstagramReels className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <div>
        <Container className="max-w-[1200px]">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {brandFeatures.map((feature, index) => {
              const Icon = featureIcons[feature.icon]
              const showDivider = index > 0
              const showSmDivider = index % 2 === 1

              return (
                <li
                  key={feature.id}
                  className="relative flex min-w-0 flex-col items-center justify-center px-4 py-8 text-center sm:px-5 sm:py-9 lg:py-10"
                >
                  {showDivider && (
                    <span
                      aria-hidden
                      className={`
                        absolute top-1/2 left-0 hidden h-14 w-px -translate-y-1/2 bg-instagram-ink/40
                        ${showSmDivider ? 'sm:block' : ''}
                        lg:block
                      `}
                    />
                  )}
                  <Icon className="h-7 w-auto sm:h-8 lg:h-9" strokeWidth={1.15} />
                  <p className="mt-3 max-w-[10rem] font-sans text-[0.58rem] font-medium uppercase leading-snug tracking-[0.12em] sm:mt-4 sm:max-w-none sm:text-[0.62rem] sm:tracking-[0.16em]">
                    {feature.lines[0]}
                    <br />
                    {feature.lines[1]}
                  </p>
                </li>
              )
            })}
          </ul>
        </Container>
      </div>
    </section>
  )
}
