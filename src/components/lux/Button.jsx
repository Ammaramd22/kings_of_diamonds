const variants = {
  primary:
    'bg-forest text-white hover:bg-forest-deep focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2',
  inverse:
    'bg-white text-charcoal hover:bg-ivory focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest',
  ghost:
    'bg-transparent text-charcoal hover:bg-champagne/60 focus-visible:ring-2 focus-visible:ring-matte-gold focus-visible:ring-offset-2',
  outline:
    'border border-border-subtle bg-white/80 text-charcoal backdrop-blur-sm hover:border-charcoal/30 hover:bg-white focus-visible:ring-2 focus-visible:ring-matte-gold focus-visible:ring-offset-2',
}

export function LuxButton({ variant = 'primary', className = '', type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 ease-out-lux active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
