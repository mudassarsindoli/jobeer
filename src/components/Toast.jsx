import { useEffect } from 'react'

export default function Toast({ message, onDone }) {
  useEffect(() => {
    if (!message) return undefined
    const id = setTimeout(onDone, 2400)
    return () => clearTimeout(id)
  }, [message, onDone])

  if (!message) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-rise pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 z-50 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-full bg-zinc-900 px-4 py-2.5 text-center text-xs font-medium break-words text-white shadow-lg dark:bg-zinc-100 dark:text-zinc-900"
    >
      {message}
    </div>
  )
}
