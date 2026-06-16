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