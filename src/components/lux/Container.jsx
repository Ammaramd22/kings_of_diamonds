export function Container({ className = '', ...props }) {
  return (
    <div
      className={`mx-auto w-full min-w-0 max-w-[var(--container-max)] px-4 sm:px-6 lg:px-10 xl:px-14 ${className}`}
      {...props}
    />
  )
}
