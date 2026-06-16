export function StarRow({ count = 5, className = '' }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 text-matte-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.62L22 9.27l-5 4.9L18.18 22 12 18.77 5.82 22 7 14.17l-5-4.9 7.1-1.65L12 2z" />
        </svg>
      ))}
    </div>
  )
}
