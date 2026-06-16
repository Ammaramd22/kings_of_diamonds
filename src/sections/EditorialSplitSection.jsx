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