import { useInView } from '../../hooks/useInView'

const VARIANT_CLASS = {
  zoom: 'scroll-reveal-zoom',
  rise: 'scroll-reveal-rise',
  fade: 'scroll-reveal-fade',
}

/**
 * @param {{ children: import('react').ReactNode, className?: string, delay?: number, once?: boolean, variant?: keyof typeof VARIANT_CLASS }} props
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  once = false,
  variant = 'rise',
}) {
  const [ref, inView] = useInView({
    once,
    threshold: 0.22,
    rootMargin: '0px 0px -6% 0px',
  })

  return (
    <div
      ref={ref}
      className={`${VARIANT_CLASS[variant] ?? VARIANT_CLASS.rise} ${inView ? 'is-inview' : ''} max-lg:overflow-hidden ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
