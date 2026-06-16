import { Container } from '../components/lux/Container'

const quickLinks = [
  'Ready-to-ship',
  'Engagement rings',
  "Women's wedding rings",
  "Men's wedding rings",
  'Fine jewellery',
  'Gift cards',
]

const about = ['Our story', 'Reviews', 'Moissanite blog', 'Careers', 'Press', 'How it works']

const clientCare = ['FAQs', 'Shipping', 'Ring size guide', 'Book appointment', 'Returns', 'Ring care']

const legalLinks = [
  'Terms and conditions',
  'Terms of sale',
  'Privacy',
  'Returns',
  'Site map',
  'Engagement rings',
]

const socialLinks = ['Instagram', 'TikTok', 'Facebook', 'YouTube', 'Pinterest', 'LinkedIn']

const paymentMethods = ['Amex', 'Apple Pay', 'Google Pay', 'Mastercard', 'PayPal', 'Shop Pay', 'Visa', 'Zip']

const footerLinkClass =
  'text-sm text-footer-ink/80 transition-colors duration-300 hover:text-footer-muted focus-visible:text-footer-muted focus-visible:outline-none'

export function Footer() {
  return (
    <footer id="contact" className="overflow-x-clip bg-footer-bg text-footer-ink">
      <Container className="py-12 sm:py-14 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-footer-muted">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((label) => (
                <li key={label}>
                  <a href="#" className={footerLinkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-footer-muted">
              About us
            </h3>
            <ul className="mt-4 space-y-2.5">
              {about.map((label) => (
                <li key={label}>
                  <a href="#" className={footerLinkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-footer-muted">
              Client care
            </h3>
            <ul className="mt-4 space-y-2.5">
              {clientCare.map((label) => (
                <li key={label}>
                  <a
                    href={
                      label === 'FAQs'
                        ? '#faq'
                        : label === 'Ring size guide'
                          ? '#education'
                          : '#'
                    }
                    className={footerLinkClass}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="visit" className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-footer-muted">
              Contact us
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-footer-ink/80">
              <li className="flex gap-2">
                <span className="text-footer-muted/70" aria-hidden>
                  ☎
                </span>
                <a href="tel:+441234567890" className="transition-colors hover:text-footer-muted">
                  +44 123 456 7890
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-footer-muted/70" aria-hidden>
                  ✉
                </span>
                <a
                  href="mailto:hello@kingsofdiamonds.com"
                  className="break-all transition-colors hover:text-footer-muted"
                >
                  hello@kingsofdiamonds.com
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-footer-muted/70" aria-hidden>
                  ◷
                </span>
                <span>By appointment only</span>
              </li>
            </ul>
            <div className="mt-6 text-xs leading-relaxed text-footer-ink/65">
              <p className="font-semibold uppercase tracking-[0.16em] text-footer-muted/90">
                Contact hours
              </p>
              <p className="mt-2">Mon–Fri · 9:00–18:00</p>
              <p>Sat · 10:00–16:00</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.12em]">
              <a
                href="#"
                className="border-b border-footer-line pb-0.5 text-footer-ink/80 transition-colors hover:border-footer-muted hover:text-footer-muted"
              >
                Get in touch
              </a>
              <a
                href="#"
                className="border-b border-footer-line pb-0.5 text-footer-ink/80 transition-colors hover:border-footer-muted hover:text-footer-muted"
              >
                Feedback
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-xl text-center sm:mt-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-footer-muted">
            Ring advice, straight to your inbox
          </p>
          <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              className="
                min-h-12 flex-1 border border-footer-line bg-white/95 px-4 text-sm
                text-header-ink outline-none transition
                placeholder:text-stone
                focus:border-footer-muted focus:ring-2 focus:ring-header-accent/35
              "
            />
            <button
              type="submit"
              className="
                min-h-12 border border-footer-muted bg-footer-muted px-8
                text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-footer-bg
                transition-colors hover:bg-footer-ink hover:text-footer-bg
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-footer-muted/50
              "
            >
              Submit
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-col gap-8 border-t border-footer-line pt-10 sm:mt-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[0.65rem] uppercase tracking-[0.14em] text-footer-ink/55 lg:justify-start">
            <span className="rounded border border-footer-line px-2 py-1">DIA</span>
            <span className="rounded border border-footer-line px-2 py-1">IGI</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {socialLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs uppercase tracking-[0.14em] text-footer-ink/75 transition-colors hover:text-footer-muted"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <nav
          className="mt-8 flex flex-col items-center gap-2 text-center text-[0.65rem] text-footer-ink/55 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-2"
          aria-label="Legal"
        >
          {legalLinks.map((label, idx, arr) => (
            <span key={label} className="inline-flex items-center gap-2">
              <a href="#" className="transition-colors hover:text-footer-muted">
                {label}
              </a>
              {idx < arr.length - 1 ? (
                <span className="hidden sm:inline" aria-hidden>
                  |
                </span>
              ) : null}
            </span>
          ))}
        </nav>

        <p className="mt-6 text-center text-[0.65rem] leading-relaxed text-footer-ink/50">
          All payments are 256-bit SSL secure and encrypted.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {paymentMethods.map((label) => (
            <span
              key={label}
              className="rounded border border-footer-line px-2 py-1 text-[0.6rem] font-medium uppercase tracking-wide text-footer-ink/65"
            >
              {label}
            </span>
          ))}
        </div>

        <p className="mt-10 text-center text-[0.65rem] text-footer-ink/45">
          © {new Date().getFullYear()} Kings of Diamonds
        </p>
      </Container>
    </footer>
  )
}

