// // // // import { IconArrowRightSmall } from '../components/icons'
// // // // import { brandCraft, images } from '../content/home'

// // // // export function BrandCraftSection() {
// // // //   return (
// // // //     <section className="overflow-x-clip">
// // // //       <div
// // // //         className="
// // // //           bg-[#1a0a28] px-6 py-16 text-center sm:px-10 sm:py-20 lg:py-24
// // // //         "
// // // //       >
// // // //         <p className="mx-auto max-w-2xl font-serif text-xl font-normal italic leading-relaxed text-white/95 sm:text-2xl">
// // // //           {brandCraft.quote}
// // // //         </p>
// // // //         <p className="mx-auto mt-6 max-w-3xl font-sans text-base leading-[1.75] text-[#d8cce8] sm:text-lg">
// // // //           {brandCraft.description}
// // // //         </p>
// // // //       </div>

// // // //       <div className="relative isolate w-full overflow-hidden bg-[#1a0a28]">
// // // //         <img
// // // //           src={images.craft}
// // // //           alt="Jeweller crafting a fine jewellery ring"
// // // //           className="block h-auto w-full max-h-none object-contain object-center"
// // // //           loading="lazy"
// // // //           decoding="async"
// // // //         />
// // // //         <div
// // // //           className="pointer-events-none absolute inset-0 bg-[#1a0a28]/35"
// // // //           aria-hidden
// // // //         />
// // // //         <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center sm:px-8">
// // // //           <div className="max-w-md">
// // // //             <h2 className="font-serif text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
// // // //               {brandCraft.imageTitle}
// // // //             </h2>
// // // //             <a
// // // //               href="#"
// // // //               className="group mt-3 inline-flex items-center justify-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#c9b4e8] transition-colors hover:text-white"
// // // //             >
// // // //               {brandCraft.imageCta}
// // // //               <IconArrowRightSmall className="h-4 w-4 transition-transform group-hover:translate-x-1" />
// // // //             </a>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }



// // // import { IconArrowRightSmall } from '../components/icons'
// // // import { discoverContent } from '../content/home'

// // // export function BrandCraftSection() {
// // //   return (
// // //     <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
// // //       <div className="mx-auto max-w-7xl">
// // //         {/* Header */}
// // //         <div className="text-center">
// // //           <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#6f5a84]">
// // //             Discover & Connect
// // //           </p>

// // //           <h2 className="mt-3 font-serif text-4xl text-[#24142f] sm:text-5xl">
// // //             {/* Explore the stories behind the rings */}
// // //             <h2>{discoverContent.title}</h2>
// // //           </h2>

// // //           <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
// // //             {/* Watch, read, and discover the latest creations, craftsmanship, and
// // //             real moments behind every meaningful piece. */}
// // //             <p>{discoverContent.description}</p>
// // //           </p>
// // //         </div>

// // //         {/* Featured YouTube Card */}
// // //         <div className="mt-14 overflow-hidden rounded-2xl border border-gray-200 bg-white">
// // //           <div className="grid lg:grid-cols-[38%_62%]">
// // //             {/* Left Content */}
// // //             <div className="flex flex-col justify-center p-8 lg:p-12">
// // //               <div className="flex items-center gap-3">
// // //                 <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5a3a73] text-[#5a3a73]">
// // //                   ▶
// // //                 </div>

// // //                 <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#5a3a73]">
// // //                   YouTube Feature
// // //                 </span>
// // //               </div>

// // //               <h3 className="mt-8 font-serif text-4xl leading-tight text-[#24142f] lg:text-5xl">
// // //                 Latest YouTube Story
// // //               </h3>

// // //               <p className="mt-6 max-w-md text-gray-600">
// // //                 Go behind the scenes and follow the journey of our latest ring —
// // //                 from initial sketch to the final sparkle.
// // //               </p>

// // //               <a
// // //                 href="#"
// // //                 className="mt-8 inline-flex w-fit items-center justify-center bg-[#562c74] px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#43205d]"
// // //               >
// // //                 Watch on YouTube
// // //               </a>
// // //             </div>

// // //             {/* Right Image */}
// // //             <div className="relative min-h-[300px] lg:min-h-[500px]">
// // //               <img
// // //                 src="/images/youtube-story.jpg"
// // //                 alt="Latest YouTube Story"
// // //                 className="h-full w-full object-cover"
// // //               />

// // //               <button className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-3xl text-white backdrop-blur-sm">
// // //                 ▶
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Bottom Grid */}
// // //         <div className="mt-8 grid gap-6 lg:grid-cols-2">
// // //           {/* TikTok Card */}
// // //           <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
// // //             <div className="grid md:grid-cols-[45%_55%]">
// // //               <div>
// // //                 <img
// // //                   src="/images/tiktok-feature.jpg"
// // //                   alt="TikTok Feature"
// // //                   className="h-full w-full object-cover"
// // //                 />
// // //               </div>

// // //               <div className="flex flex-col justify-center p-8">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="text-xl">♪</div>

// // //                   <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#5a3a73]">
// // //                     TikTok Feature
// // //                   </span>
// // //                 </div>

// // //                 <h3 className="mt-5 font-serif text-4xl leading-tight text-[#24142f]">
// // //                   Quick behind-the-scenes
// // //                 </h3>

// // //                 <p className="mt-4 text-gray-600">
// // //                   Short updates, real moments, and a closer look at our craft.
// // //                 </p>

// // //                 <a
// // //                   href="#"
// // //                   className="mt-6 inline-flex w-fit items-center justify-center border border-[#5a3a73] px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[#5a3a73] transition hover:bg-[#5a3a73] hover:text-white"
// // //                 >
// // //                   View TikTok
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Article Card */}
// // //           <div className="relative overflow-hidden rounded-2xl">
// // //             <img
// // //               src="/assets/article-feature.jpg"
// // //               alt="The story behind this ring"
// // //               className="h-full min-h-[340px] w-full object-cover"
// // //             />

// // //             <div className="absolute inset-0 bg-black/40" />

// // //             <div className="absolute inset-0 flex flex-col justify-center p-8 text-white lg:p-12">
// // //               <div className="flex items-center gap-3">
// // //                 <span className="text-lg">📖</span>

// // //                 <span className="text-xs font-medium uppercase tracking-[0.2em]">
// // //                   Article
// // //                 </span>
// // //               </div>

// // //               <h3 className="mt-5 max-w-sm font-serif text-4xl leading-tight lg:text-5xl">
// // //                 The story behind this ring
// // //               </h3>

// // //               <p className="mt-4 max-w-md text-white/90">
// // //                 Inspiration, design process, and the meaning woven into every
// // //                 detail.
// // //               </p>

// // //               <a
// // //                 href="#"
// // //                 className="group mt-8 inline-flex w-fit items-center gap-2 border border-white px-6 py-3 text-sm font-medium uppercase tracking-[0.15em]"
// // //               >
// // //                 Read Article
// // //                 <IconArrowRightSmall className="h-4 w-4 transition-transform group-hover:translate-x-1" />
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }



// // import { IconArrowRightSmall } from '../components/icons'
// // import { discoverContent } from '../content/home'

// // export function BrandCraftSection() {
// //   return (
// //     <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
// //       <div className="mx-auto max-w-7xl">
// //         {/* Header */}
// //         <div className="text-center">
// //           <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#6f5a84]">
// //             {discoverContent.eyebrow}
// //           </p>

// //           <h2 className="mt-3 font-serif text-4xl text-[#24142f] sm:text-5xl">
// //             {discoverContent.title}
// //           </h2>

// //           <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
// //             {discoverContent.description}
// //           </p>
// //         </div>

// //         {/* Featured YouTube Card */}
// //         <div className="mt-14 overflow-hidden rounded-2xl border border-gray-200 bg-white">
// //           <div className="grid lg:grid-cols-[38%_62%]">
// //             {/* Left Content */}
// //             <div className="flex flex-col justify-center p-8 lg:p-12">
// //               <div className="flex items-center gap-3">
// //                 <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5a3a73] text-[#5a3a73]">
// //                   ▶
// //                 </div>

// //                 <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#5a3a73]">
// //                   YouTube Feature
// //                 </span>
// //               </div>

// //               <h3 className="mt-8 font-serif text-4xl leading-tight text-[#24142f] lg:text-5xl">
// //                 {discoverContent.youtube.title}
// //               </h3>

// //               <p className="mt-6 max-w-md text-gray-600">
// //                 {discoverContent.youtube.description}
// //               </p>

// //               <a
// //                 href={discoverContent.youtube.href}
// //                 className="mt-8 inline-flex w-fit items-center justify-center bg-[#562c74] px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#43205d]"
// //               >
// //                 {discoverContent.youtube.cta}
// //               </a>
// //             </div>

// //             {/* Right Image */}
// //             <div className="relative min-h-[300px] lg:min-h-[500px]">
// //               <img
// //                 src={discoverContent.youtube.image}
// //                 alt={discoverContent.youtube.title}
// //                 className="h-full w-full object-cover"
// //               />

// //               <button className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-3xl text-white backdrop-blur-sm">
// //                 ▶
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Grid */}
// //         <div className="mt-8 grid gap-6 lg:grid-cols-2">
// //           {/* TikTok Card */}
// //           <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
// //             <div className="grid md:grid-cols-[45%_55%]">
// //               <div>
// //                 <img
// //                   src={discoverContent.tiktok.image}
// //                   alt={discoverContent.tiktok.title}
// //                   className="h-full w-full object-cover"
// //                 />
// //               </div>

// //               <div className="flex flex-col justify-center p-8">
// //                 <div className="flex items-center gap-3">
// //                   <div className="text-xl">♪</div>

// //                   <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#5a3a73]">
// //                     TikTok Feature
// //                   </span>
// //                 </div>

// //                 <h3 className="mt-5 font-serif text-4xl leading-tight text-[#24142f]">
// //                   {discoverContent.tiktok.title}
// //                 </h3>

// //                 <p className="mt-4 text-gray-600">
// //                   {discoverContent.tiktok.description}
// //                 </p>

// //                 <a
// //                   href={discoverContent.tiktok.href}
// //                   className="mt-6 inline-flex w-fit items-center justify-center border border-[#5a3a73] px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[#5a3a73] transition hover:bg-[#5a3a73] hover:text-white"
// //                 >
// //                   {discoverContent.tiktok.cta}
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Article Card */}
// //           <div className="relative overflow-hidden rounded-2xl">
// //             <img
// //               src={discoverContent.article.image}
// //               alt={discoverContent.article.title}
// //               className="h-full min-h-[340px] w-full object-cover"
// //             />

// //             <div className="absolute inset-0 bg-black/40" />

// //             <div className="absolute inset-0 flex flex-col justify-center p-8 text-white lg:p-12">
// //               <div className="flex items-center gap-3">
// //                 <span className="text-lg">📖</span>

// //                 <span className="text-xs font-medium uppercase tracking-[0.2em]">
// //                   Article
// //                 </span>
// //               </div>

// //               <h3 className="mt-5 max-w-sm font-serif text-4xl leading-tight lg:text-5xl">
// //                 {discoverContent.article.title}
// //               </h3>

// //               <p className="mt-4 max-w-md text-white/90">
// //                 {discoverContent.article.description}
// //               </p>

// //               <a
// //                 href={discoverContent.article.href}
// //                 className="group mt-8 inline-flex w-fit items-center gap-2 border border-white px-6 py-3 text-sm font-medium uppercase tracking-[0.15em]"
// //               >
// //                 {discoverContent.article.cta}

// //                 <IconArrowRightSmall className="h-4 w-4 transition-transform group-hover:translate-x-1" />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// import { brandCraft, images } from '../content/home'
// import {
//   IconShield,
//   IconDiamond,
//   IconSparkles,
// } from '../components/icons'

// export function BrandCraftSection() {
//   return (
//     <section className="bg-white px-6 py-12 sm:px-8 lg:px-12">
//       <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl">
//         <div className="relative h-[450px] overflow-hidden lg:h-[550px]">
//           {/* Background Image */}
//           <img
//             src={images.craft}
//             alt="Expert craftsmanship"
//             className="absolute inset-0 h-full w-full object-cover"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/20" />

//           {/* Content */}
//           <div className="relative z-10 flex h-full items-center">
//             <div className="max-w-2xl px-8 lg:px-16">
//               <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
//                 Expert Craftsmanship.
//                 <br />
//                 Personal Touch.
//               </h2>

//               {/* Feature Icons */}
//               <div className="mt-12 flex flex-wrap gap-10 lg:gap-14">
//                 <div className="text-center text-white">
//                   <div className="mb-3 flex justify-center">
//                     <IconShield className="h-8 w-8" />
//                   </div>

//                   <p className="text-[11px] uppercase tracking-[0.25em] text-white/90">
//                     Lifetime
//                     <br />
//                     Warranty
//                   </p>
//                 </div>

//                 <div className="text-center text-white">
//                   <div className="mb-3 flex justify-center">
//                     <IconDiamond className="h-8 w-8" />
//                   </div>

//                   <p className="text-[11px] uppercase tracking-[0.25em] text-white/90">
//                     Complimentary
//                     <br />
//                     Resizing
//                   </p>
//                 </div>

//                 <div className="text-center text-white">
//                   <div className="mb-3 flex justify-center">
//                     <IconSparkles className="h-8 w-8" />
//                   </div>

//                   <p className="text-[11px] uppercase tracking-[0.25em] text-white/90">
//                     Free
//                     <br />
//                     Polishing
//                   </p>
//                 </div>
//               </div>

//               {/* CTA */}
//               <a
//                 href="/craftsmanship"
//                 className="mt-12 inline-flex items-center justify-center bg-[#C79A67] px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#b68753]"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { images } from '../content/home'
import {
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

export function BrandCraftSection() {
  return (
    <section className="bg-white px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl">
        <div className="relative h-[450px] overflow-hidden lg:h-[550px]">
          {/* Background Image */}
          <img
            src={images.craft}
            alt="Expert craftsmanship"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="max-w-2xl px-8 lg:px-16">
              <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Expert Craftsmanship.
                <br />
                Personal Touch.
              </h2>

              {/* Features */}
              <div className="mt-12 grid max-w-lg grid-cols-3 gap-8">
                {/* Lifetime Warranty */}
                <div className="text-center text-white">
                  <div className="mb-3 flex justify-center">
                    <ShieldCheckIcon className="h-8 w-8" />
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.25em] text-white/90">
                    Lifetime
                    <br />
                    Warranty
                  </p>
                </div>

                {/* Complimentary Resizing */}
                <div className="text-center text-white">
                  <div className="mb-3 flex justify-center text-3xl">
                    ◈
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.25em] text-white/90">
                    Complimentary
                    <br />
                    Resizing
                  </p>
                </div>

                {/* Free Polishing */}
                <div className="text-center text-white">
                  <div className="mb-3 flex justify-center">
                    <SparklesIcon className="h-8 w-8" />
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.25em] text-white/90">
                    Free
                    <br />
                    Polishing
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/craftsmanship"
                className="mt-12 inline-flex items-center justify-center bg-[#B88A5A] px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#9f7448]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}