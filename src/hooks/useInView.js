import { useEffect, useRef, useState } from 'react'

/**
 * @param {IntersectionObserverInit & { once?: boolean }} options
 */
export function useInView(options = {}) {
  const { once = true, threshold = 0.15, root = null, rootMargin = '0px 0px -8% 0px' } = options
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold, root, rootMargin])

  return [ref, inView]
}
