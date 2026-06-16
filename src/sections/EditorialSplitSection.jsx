// import { IconPlay } from '../components/icons'
// import { Container } from '../components/lux/Container'
// import { clientStories, images } from '../content/home'

// export function EditorialSplitSection() {
//   return (
//     <section className="overflow-x-clip bg-[#1a0a28] py-12 sm:py-14 lg:py-20">
//       <Container className="max-w-[1700px] lg:pl-16 lg:pr-8 xl:pl-24 xl:pr-12 2xl:pl-32">
//         <div className="grid grid-cols-1 items-center gap-8 lg:min-h-[46rem] lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 xl:min-h-[50rem] xl:gap-12">
//           <div className="flex items-center justify-center py-6 sm:py-8 lg:justify-end lg:py-10 lg:pr-4 xl:pr-8">
//             <a
//               href="#"
//               className="group relative block aspect-square w-full max-w-[min(100%,22rem)] overflow-hidden sm:max-w-[28rem] md:max-w-[32rem] lg:max-w-[36rem] xl:max-w-[40rem]"
//               aria-label="Play client stories video"
//             >
//               <img
//                 src={images.videoImg}
//                 alt="Client wearing Kings of Diamonds jewellery"
//                 className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out-lux group-hover:scale-[1.02]"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <span className="absolute inset-0 flex items-center justify-center bg-[#1a0a28]/10 transition-colors group-hover:bg-[#1a0a28]/20">
//                 <IconPlay className="ml-1 h-16 w-16 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20" />
//               </span>
//             </a>
//           </div>

//           <div className="flex flex-col justify-center px-2 pb-12 sm:px-4 sm:pb-14 lg:py-12 lg:pl-8 xl:pl-14 2xl:pl-20">
//             <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#c9b4e8]">
//               {clientStories.eyebrow}
//             </p>
//             <h2 className="mt-4 font-serif text-[1.75rem] font-medium leading-[1.15] text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
//               {clientStories.title}
//             </h2>
//             <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-white/70 sm:text-[0.95rem] lg:max-w-md">
//               {clientStories.description}
//             </p>
//             <div className="mt-9 sm:mt-10">
//               <a
//                 href="#"
//                 className="
//                   inline-flex items-center justify-center border border-white/90
//                   bg-transparent px-7 py-3.5 text-[0.65rem] font-semibold uppercase
//                   tracking-[0.22em] text-[#c9b4e8] transition-colors duration-300
//                   hover:border-white hover:bg-white/5 hover:text-white
//                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a0a28]
//                 "
//               >
//                 {clientStories.cta}
//               </a>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   )
// }



import { IconArrowRightSmall } from '../components/icons'
import { discoverContent } from '../content/home'

export function EditorialSplitSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#6f5a84]">
            {discoverContent.eyebrow}
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#24142f] sm:text-5xl">
            {discoverContent.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {discoverContent.description}
          </p>
        </div>

        {/* Featured YouTube Card */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="grid lg:grid-cols-[38%_62%]">
            {/* Left Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5a3a73] text-[#5a3a73]">
                  ▶
                </div>

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#5a3a73]">
                  YouTube Feature
                </span>
              </div>

              <h3 className="mt-8 font-serif text-4xl leading-tight text-[#24142f] lg:text-5xl">
                {discoverContent.youtube.title}
              </h3>

              <p className="mt-6 max-w-md text-gray-600">
                {discoverContent.youtube.description}
              </p>

              <a
                href={discoverContent.youtube.href}
                className="mt-8 inline-flex w-fit items-center justify-center bg-[#562c74] px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#43205d]"
              >
                {discoverContent.youtube.cta}
              </a>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[300px] lg:min-h-[500px]">
              <img
                src={discoverContent.youtube.image}
                alt={discoverContent.youtube.title}
                className="h-full w-full object-cover"
              />

              <button className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-3xl text-white backdrop-blur-sm">
                ▶
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* TikTok Card */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="grid md:grid-cols-[45%_55%]">
              <div>
                <img
                  src={discoverContent.tiktok.image}
                  alt={discoverContent.tiktok.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8">
                <div className="flex items-center gap-3">
                  <div className="text-xl">♪</div>

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#5a3a73]">
                    TikTok Feature
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#24142f]">
                  {discoverContent.tiktok.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {discoverContent.tiktok.description}
                </p>

                <a
                  href={discoverContent.tiktok.href}
                  className="mt-6 inline-flex w-fit items-center justify-center border border-[#5a3a73] px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[#5a3a73] transition hover:bg-[#5a3a73] hover:text-white"
                >
                  {discoverContent.tiktok.cta}
                </a>
              </div>
            </div>
          </div>

          {/* Article Card */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={discoverContent.article.image}
              alt={discoverContent.article.title}
              className="h-full min-h-[340px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white lg:p-12">
              <div className="flex items-center gap-3">
                <span className="text-lg">📖</span>

                <span className="text-xs font-medium uppercase tracking-[0.2em]">
                  Article
                </span>
              </div>

              <h3 className="mt-5 max-w-sm font-serif text-4xl leading-tight lg:text-5xl">
                {discoverContent.article.title}
              </h3>

              <p className="mt-4 max-w-md text-white/90">
                {discoverContent.article.description}
              </p>

              <a
                href={discoverContent.article.href}
                className="group mt-8 inline-flex w-fit items-center gap-2 border border-white px-6 py-3 text-sm font-medium uppercase tracking-[0.15em]"
              >
                {discoverContent.article.cta}

                <IconArrowRightSmall className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}