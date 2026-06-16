// import {
//   IconAdviceBubble,
//   IconDiamondChoice,
//   IconWorkshopBench,
// } from '../components/icons'
// import { Container } from '../components/lux/Container'
// import { appointmentJourney } from '../content/home'

// const journeyIcons = {
//   workshop: IconWorkshopBench,
//   advice: IconAdviceBubble,
//   diamond: IconDiamondChoice,
// }

// export function AppointmentJourneySection() {
//   return (
//     <section className="overflow-x-clip bg-[#f1ecf8] py-14 sm:py-16 lg:py-20">
//       <Container className="max-w-[1400px]">
//         <ul className="grid grid-cols-1 sm:grid-cols-3">
//           {appointmentJourney.items.map((item, index) => {
//             const Icon = journeyIcons[item.icon]
//             const showDivider = index > 0

//             return (
//               <li
//                 key={item.id}
//                 className="relative flex flex-col items-center px-6 py-8 text-center sm:px-8 sm:py-10 lg:px-10"
//               >
//                 {showDivider && (
//                   <span
//                     aria-hidden
//                     className="pointer-events-none absolute left-0 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-charcoal/15 sm:block"
//                   />
//                 )}
//                 <Icon className="h-10 w-10 text-header-accent sm:h-11 sm:w-11" strokeWidth={1.1} />
//                 <h3 className="mt-6 max-w-xs font-sans text-[0.95rem] font-semibold leading-snug text-charcoal sm:text-base">
//                   {item.title}
//                 </h3>
//                 <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-stone">
//                   {item.description}
//                 </p>
//               </li>
//             )
//           })}
//         </ul>

//         <div className="mt-6 flex justify-center sm:mt-8 lg:mt-10">
//           <a
//             href="#"
//             className="
//               inline-flex w-full max-w-md items-center justify-center bg-header-accent
//               px-8 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white
//               transition-colors duration-300 hover:bg-[#4c1d95]
//               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-header-accent/50 focus-visible:ring-offset-2
//             "
//           >
//             {appointmentJourney.cta}
//           </a>
//         </div>
//       </Container>
//     </section>
//   )
// }


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