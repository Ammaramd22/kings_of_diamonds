import { Container } from '../components/lux/Container'
import kingsLogo from '../assets/KingsLogo.png'
import { images } from '../content/home'

const headlineClass =
  "text-balance break-words font-['Playfair_Display',Georgia,serif] text-[clamp(1.375rem,6.5vw+0.35rem,4rem)] font-medium uppercase leading-[1.1] tracking-[0.03em] sm:tracking-[0.05em] lg:tracking-[0.06em]"

export function HeroSection() {
  return (
    <section
      className="
        relative isolate w-full min-w-0 overflow-hidden
        min-h-[min(72dvh,34rem)] min-h-[min(72svh,34rem)]
        sm:min-h-[calc(100svh-6.5rem)] sm:min-h-[calc(100dvh-6.5rem)]
        lg:min-h-[calc(100svh-10.5rem)] lg:min-h-[calc(100dvh-10.5rem)]
        2xl:h-[min(100dvh,56rem)] 2xl:min-h-0
      "
    >
      <img
        src={images.hero}
        alt="Diamond jewellery — hero"
        className="
          absolute inset-0 h-full w-full object-cover
          object-[50%_28%]
          sm:object-[center_65%]
          lg:object-[40%_55%]
          xl:object-[32%_52%]
          2xl:object-[28%_50%]
        "
        loading="eager"
        fetchPriority="high"
      />

      {/* Mobile: strong bottom scrim for legibility */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-t from-[#12021c] via-[#1a0a28]/75 to-[#1a0a28]/25
          sm:bg-gradient-to-r sm:from-[#12021c]/92 sm:via-[#1a0a28]/60 sm:to-[#1a0a28]/10
          lg:via-[#1a0a28]/50 lg:to-transparent
          xl:from-[#12021c]/88 xl:via-[#1a0a28]/45
        "
        aria-hidden
      />
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-t from-black/70 via-black/25 to-transparent
          sm:from-black/45 sm:via-transparent sm:to-black/15
          lg:from-black/35
        "
        aria-hidden
      />

      <Container
        className="
          relative z-10 flex w-full max-w-[1700px] min-w-0 flex-col
          justify-end
          pb-[max(1rem,env(safe-area-inset-bottom))]
          pt-14
          sm:min-h-[calc(100svh-6.5rem)] sm:justify-start sm:pb-8 sm:pt-[clamp(1.5rem,7vh,5rem)]
          md:pt-[clamp(1.75rem,6.5vh,4.5rem)] md:pb-10
          lg:min-h-[calc(100svh-10.5rem)] lg:pt-[clamp(2rem,6vh,4rem)] lg:pb-12
          xl:pt-[clamp(2.25rem,5.5vh,3.5rem)] xl:pb-14
        "
      >
        <div className="w-full min-w-0 max-w-[28rem] sm:max-w-[34rem] md:max-w-[38rem] lg:max-w-[min(52%,40rem)] xl:max-w-[min(48%,44rem)] 2xl:max-w-[min(46%,48rem)]">
          <div className="mb-5 sm:mb-6 lg:mb-7 xl:mb-8">
            <img
              src={kingsLogo}
              alt="Kings of Diamonds"
              className="
                h-6 w-auto max-w-[9rem] object-contain object-left brightness-0 invert
                min-[375px]:h-7 min-[375px]:max-w-[10rem]
                sm:h-9 sm:max-w-[13rem]
                lg:h-10 lg:max-w-[14rem]
                xl:h-11 xl:max-w-[15rem]
              "
              width={200}
              height={40}
              decoding="async"
            />
            <p className="mt-1.5 text-[0.55rem] font-medium uppercase tracking-[0.14em] text-white/75 min-[375px]:text-[0.58rem] sm:mt-2 sm:text-[0.65rem] sm:tracking-[0.32em] xl:text-[0.7rem]">
              — Fine diamond jewellery —
            </p>
          </div>

          <h1 className={`${headlineClass} text-white`}>Timeless beauty.</h1>
          <p className={`mt-1 ${headlineClass} text-[#c9b4e8] sm:mt-1.5`}>Forever yours.</p>

          <p className="mt-3 max-w-none font-sans text-[0.8125rem] leading-relaxed text-white/90 sm:mt-5 sm:max-w-[26rem] sm:text-sm md:max-w-[28rem] lg:mt-6 lg:text-base xl:max-w-[32rem] xl:text-[1.0625rem] xl:leading-relaxed">
            Exquisite diamond jewellery crafted to celebrate life&apos;s most precious moments.
          </p>

          <div className="mt-4 sm:mt-6 lg:mt-7">
            <a
              href="#"
              className="
                inline-flex w-full max-w-full items-center justify-center gap-2 border border-white/90
                px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white
                transition-colors duration-300
                hover:bg-white/10
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a0a28]
                sm:w-auto sm:justify-start sm:px-7 sm:py-3 sm:text-[0.7rem] sm:tracking-[0.22em]
                lg:px-8 lg:py-3.5 lg:text-[0.75rem]
                xl:px-9 xl:py-4
              "
            >
              Shop the collection
              <span aria-hidden className="text-base font-light leading-none">
                →
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
