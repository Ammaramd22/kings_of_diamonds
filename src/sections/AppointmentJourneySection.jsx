import {
  IconAdviceBubble,
  IconDiamondChoice,
  IconWorkshopBench,
} from '../components/icons'
import { Container } from '../components/lux/Container'
import { appointmentJourney } from '../content/home'
import ringImg1 from '../assets/ringImg1.jpg'

const journeyIcons = {
  workshop: IconWorkshopBench,
  advice: IconAdviceBubble,
  diamond: IconDiamondChoice,
}

export function AppointmentJourneySection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container className="max-w-[1400px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Side */}
          <div>
            <h2 className="font-serif text-4xl leading-tight text-charcoal lg:text-5xl">
              Your Journey, Our Guidance
            </h2>

            <div className="mt-12 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-8">
              {appointmentJourney.items.map((item, index) => {
                const Icon = journeyIcons[item.icon]

                return (
                  <div
                    key={item.id}
                    className="relative flex flex-1 flex-col items-center text-center"
                  >
                    <Icon
                      className="h-12 w-12 text-[#8b7355]"
                      strokeWidth={1.1}
                    />

                    <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-[180px] text-sm leading-relaxed text-stone">
                      {item.description}
                    </p>

                    {index < appointmentJourney.items.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-[calc(100%+10px)] top-4 hidden text-4xl font-light text-stone/40 sm:block"
                      >
                        ›
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] overflow-hidden bg-[#f8f5f1]">
              <img
                // src="/images/ring.jpg"
                src={ringImg1}
                alt="Diamond engagement ring"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}