/**
 * Full-bleed horizontal scroll on mobile; grid on large screens.
 * Pass `lg:grid-cols-3` (etc.) via className when not using 4 columns.
 */
export function CarouselRail({ className = '', children }) {
  return (
    <div
      className={`
        -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-1
        scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none]
        sm:-mx-6 sm:gap-5 sm:px-6
        lg:mx-0 lg:grid lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0
        [&::-webkit-scrollbar]:hidden
        ${className}
      `}
    >
      {children}
    </div>
  )
}
