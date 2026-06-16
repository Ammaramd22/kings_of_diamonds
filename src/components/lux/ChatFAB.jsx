import { IconChat } from '../icons'

export function ChatFAB() {
  return (
    <button
      type="button"
      aria-label="Open chat"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-header-accent text-white shadow-lift transition-transform duration-300 ease-out-lux hover:scale-105 hover:bg-[#4a148c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-header-accent"
    >
      <IconChat className="h-6 w-6" strokeWidth={1.25} />
    </button>
  )
}
