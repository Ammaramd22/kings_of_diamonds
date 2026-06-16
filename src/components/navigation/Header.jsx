import { useEffect, useState } from 'react'
import {
  IconBag,
  IconClose,
  IconCrown,
  IconMapPin,
  IconMenu,
  IconSearch,
  IconUser,
} from '../icons'

import { Container } from '../lux/Container'

import kingsLogo from '../../assets/KingsLogo.png'

const navItems = [
  'READY-TO-SHIP',
  'ENGAGEMENT',
  'WEDDING',
  'FINE JEWELLERY',
  'EDUCATION',
  'CONTACT',
]

function navHref(item) {
  if (item === 'EDUCATION') return '#education'
  if (item === 'CONTACT') return '#contact'
  return '#'
}

const navLinkClass = `
  relative inline-flex shrink-0 items-center whitespace-nowrap
  pb-3.5 pt-1
  text-[13px] font-semibold uppercase tracking-[0.11em]
  text-header-ink transition-colors duration-300
  hover:text-header-accent
  after:pointer-events-none after:absolute after:-bottom-px after:left-0 after:h-[2px] after:w-full
  after:content-[''] after:origin-left after:scale-x-0 after:bg-header-accent
  after:transition-transform after:duration-300 after:ease-out-lux
  hover:after:scale-x-100 focus-visible:after:scale-x-100
  focus-visible:outline-none
  md:text-[14px] md:tracking-[0.12em] lg:text-[15px]
`

const mobileNavLinkClass = `
  relative inline-block
  text-3xl font-medium uppercase tracking-[0.08em]
  text-header-ink transition-colors duration-300
  hover:text-header-accent
  after:pointer-events-none after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full
  after:content-['']
  after:origin-left after:scale-x-0 after:bg-header-accent
  after:transition-transform after:duration-300 after:ease-out-lux
  hover:after:scale-x-100 focus-visible:after:scale-x-100
  focus-visible:outline-none
`

function IconButton({ children, label, ...props }) {
  return (
    <button
      aria-label={label}
      className="
        flex h-11 w-11 shrink-0 items-center justify-center
        text-header-ink transition-colors duration-300
        hover:text-header-accent focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-header-accent/35 focus-visible:ring-offset-2
        lg:h-12 lg:w-12
      "
      {...props}
    >
      {children}
    </button>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 5)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow =
      open || searchOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open, searchOpen])

  return (
    <>
      <header
        className={`
          sticky
          top-0
          z-50
          w-full
          min-w-0
          overflow-x-clip
          bg-white
          border-b
          border-neutral-200
          transition-all
          duration-300
          ${
            scrolled
              ? 'shadow-[0_10px_40px_rgba(0,0,0,0.05)]'
              : ''
          }
        `}
      >
        <Container className="max-w-[1700px]">

          {/* MOBILE */}
          <div className="flex items-center justify-between gap-3 py-4 lg:hidden">

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 shrink-0 items-center justify-center text-header-ink transition-colors duration-300 hover:text-header-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-header-accent/35 focus-visible:ring-offset-2 lg:h-12 lg:w-12"
            >
              <IconMenu
                className="h-6 w-6"
                strokeWidth={1.5}
              />
            </button>

            <a href="#" className="flex min-w-0 flex-1 justify-center px-2">
              <img
                src={kingsLogo}
                alt="Kings of Diamonds"
                className="h-11 w-auto max-w-[min(58vw,11rem)] object-contain min-[400px]:h-12 min-[400px]:max-w-[13rem] sm:h-14 sm:max-w-[15rem]"
                width={280}
                height={60}
                decoding="async"
              />
            </a>

            <div className="flex shrink-0 items-center gap-0.5">

              <IconButton
                label="Search"
                onClick={() => setSearchOpen(true)}
              >
                <IconSearch
                  className="h-5 w-5"
                  strokeWidth={1.5}
                />
              </IconButton>

              <IconButton label="Basket">
                <IconBag
                  className="h-5 w-5"
                  strokeWidth={1.5}
                />
              </IconButton>

            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            {/* Row 1: icons | logo | icons — no divider between rows */}
            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-6 py-4 lg:gap-x-8">
              <div className="flex items-center gap-2 justify-self-start">
                <IconButton
                  label="Search"
                  onClick={() => setSearchOpen(true)}
                >
                  <IconSearch
                    className="h-6 w-6"
                    strokeWidth={1.5}
                  />
                </IconButton>

                <IconButton label="Location">
                  <IconMapPin
                    className="h-6 w-6"
                    strokeWidth={1.5}
                  />
                </IconButton>
              </div>

              <div className="flex justify-center justify-self-center px-4">
                <a
                  href="#"
                  className="block outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-header-accent"
                >
                  <img
                    src={kingsLogo}
                    alt="Kings of Diamonds"
                    className="h-[4.5rem] w-auto max-w-[min(58vw,28rem)] object-contain lg:h-[5rem] xl:h-[5.25rem] 2xl:h-[5.75rem]"
                    width={400}
                    height={76}
                    decoding="async"
                  />
                </a>
              </div>

              <div className="flex items-center gap-2 justify-self-end">
                <IconButton label="Account">
                  <IconUser
                    className="h-6 w-6"
                    strokeWidth={1.5}
                  />
                </IconButton>

                <IconButton label="Collections">
                  <IconCrown
                    className="h-6 w-6"
                    strokeWidth={1.5}
                  />
                </IconButton>

                <IconButton label="Shopping basket">
                  <IconBag
                    className="h-6 w-6"
                    strokeWidth={1.5}
                  />
                </IconButton>
              </div>
            </div>

            {/* Row 2: primary links, centered */}
            <nav
              className="
                flex
                w-full
                flex-wrap
                items-stretch
                justify-center
                gap-x-6
                gap-y-0
                px-4
                md:gap-x-8
                lg:gap-x-10
                xl:gap-x-12
              "
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <a key={item} href={navHref(item)} className={navLinkClass}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`
          fixed
          inset-0
          z-50
          bg-black/30
          transition-all
          duration-300
          lg:hidden
          ${
            open
              ? 'opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`
          fixed
          inset-y-0
          left-0
          z-[60]
          w-[85vw]
          max-w-[380px]
          bg-white
          transition-all
          duration-300
          lg:hidden
          ${
            open
              ? 'translate-x-0'
              : '-translate-x-full'
          }
        `}
      >

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            border-b
            border-neutral-200
            px-5
            py-3
          "
        >

          <a href="#" className="min-w-0">
            <img
              src={kingsLogo}
              alt="Kings of Diamonds"
              className="h-14 w-auto max-w-[19rem] object-contain object-left sm:h-16"
              width={280}
              height={60}
              decoding="async"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-header-ink transition-colors duration-300 hover:text-header-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-header-accent/35 focus-visible:ring-offset-2"
          >
            <IconClose className="h-7 w-7" strokeWidth={1.5} />
          </button>

        </div>

        <nav className="px-6 py-10">

          <ul className="space-y-8">

            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={navHref(item)}
                  className={mobileNavLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}

          </ul>
        </nav>
      </div>

      {/* SEARCH OVERLAY */}
      <div
        className={`
          fixed
          inset-0
          z-[80]
          bg-white
          transition-all
          duration-300
          ${
            searchOpen
              ? 'opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      >

        <Container className="max-w-[1200px]">

          <div className="flex items-center justify-between py-6">

            <h2 className="font-serif text-3xl text-header-ink">
              Search
            </h2>

            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="flex h-11 w-11 shrink-0 items-center justify-center text-header-ink transition-colors duration-300 hover:text-header-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-header-accent/35 focus-visible:ring-offset-2"
            >
              <IconClose className="h-7 w-7" strokeWidth={1.5} />
            </button>

          </div>

          <div
            className="
              group
              relative
              mt-10
              border-b
              border-neutral-300
              pb-4
            "
          >

            <IconSearch
              className="
                pointer-events-none
                absolute
                left-0
                top-1/2
                h-6
                w-6
                -translate-y-1/2
                text-header-ink
                transition-colors
                duration-300
                group-focus-within:text-header-accent
              "
              strokeWidth={1.5}
            />

            <input
              autoFocus
              placeholder="Search rings, diamonds and collections…"
              className="
                w-full
                border-none
                bg-transparent
                py-2
                pl-12
                text-lg
                text-header-ink
                caret-header-accent
                outline-none
                placeholder:text-neutral-400
                focus-visible:placeholder:text-neutral-500
              "
            />

          </div>
        </Container>
      </div>
    </>
  )
}