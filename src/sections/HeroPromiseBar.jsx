import {
  IconEngravingPen,
  IconRingDiamond,
  IconShieldCheck,
  IconSparkleStar,
} from '../components/icons'
import { Container } from '../components/lux/Container'
import { heroPromise } from '../content/home'

const promiseIcons = {
  shieldCheck: IconShieldCheck,
  ringDiamond: IconRingDiamond,
  engravingPen: IconEngravingPen,
  sparkleStar: IconSparkleStar,
}

export function HeroPromiseBar() {
  return (
    <section
      aria-label="Our promise"
      className="bg-[#4a3669] text-[#cdbfe2]"
    >
      <Container className="max-w-[1400px]">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {heroPromise.map((item, index) => {
            const Icon = promiseIcons[item.icon]
            const showLgDivider = index > 0
            const showSmDivider = index === 1 || index === 3

            return (
              <li
                key={item.id}
                className="relative flex flex-col items-center justify-start px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8 lg:py-14"
              >
                {(showLgDivider || showSmDivider) && (
                  <span
                    aria-hidden
                    className={`
                      pointer-events-none absolute left-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-[#cdbfe2]/35
                      ${showSmDivider ? 'sm:block' : ''}
                      ${showLgDivider ? 'lg:block' : 'lg:hidden'}
                    `}
                  />
                )}

                <Icon className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11" strokeWidth={1.1} />

                <h3 className="mt-5 font-sans text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.22em] text-[#e6d9f4] sm:mt-6 sm:text-[0.78rem] sm:tracking-[0.28em] lg:text-[0.82rem]">
                  {item.title[0]}
                  <br />
                  {item.title[1]}
                </h3>

                <p className="mt-3 whitespace-pre-line font-sans text-[0.78rem] font-light leading-relaxed text-[#cdbfe2]/95 sm:mt-4 sm:text-[0.85rem] lg:text-[0.9rem]">
                  {item.description}
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
