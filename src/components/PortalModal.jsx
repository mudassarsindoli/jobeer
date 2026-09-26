import { useCallback, useEffect, useRef, useState } from 'react'

const BLOCK_MS = 2000
const SLOW_MS = 6000

export default function PortalModal({ company, src, onClose, openInNewTab }) {
  const [loaded, setLoaded] = useState(false)
  const [unblocked, setUnblocked] = useState(false)
  const closeRef = useRef(null)
  const startedAtRef = useRef(0)
  const handledRef = useRef(false)

  const hostname = (() => {
    try {
      return new URL(src).hostname
    } catch {
      return ''
    }
  })()

  const requestFallback = useCallback(
    (url) => {
      if (handledRef.current) return
      handledRef.current = true
      if (openInNewTab(url)) onClose()
      else setUnblocked(true)
    },
    [openInNewTab, onClose],
  )

  useEffect(() => {
    startedAtRef.current = Date.now()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  useEffect(() => {
    if (loaded || unblocked) return
    const id = setTimeout(() => {
      if (!handledRef.current) requestFallback(src)
    }, SLOW_MS)
    return () => clearTimeout(id)
  }, [loaded, unblocked, src, requestFallback])

  const handleLoad = () => {
    const elapsed = Date.now() - startedAtRef.current
    if (!loaded && !handledRef.current && elapsed < BLOCK_MS) {
      requestFallback(src)
      return
    }
    setLoaded(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${company.name} career portal`}
      onClick={onClose}
    >
      <div
        className="flex h-[100svh] w-full flex-col overflow-hidden bg-white shadow-2xl ring-1 ring-zinc-200 sm:h-[min(80svh,920px)] sm:w-[min(92vw,1600px)] sm:rounded-2xl dark:bg-zinc-900 dark:ring-zinc-700"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between gap-2 border-b border-zinc-200 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-top))] sm:gap-3 sm:px-4 sm:py-3 dark:border-zinc-700">
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-sm font-semibold text-zinc-800 dark:text-zinc-100">
              {company.name}
            </h2>
            <p className="truncate text-[11px] text-zinc-500 sm:text-xs dark:text-zinc-400">
              {hostname}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-violet-600 px-2.5 py-2 text-[11px] font-medium whitespace-nowrap text-white transition hover:bg-violet-500 sm:px-3 sm:py-1.5 sm:text-xs"
            >
              <span className="sm:hidden">New tab</span>
              <span className="hidden sm:inline">Open in new tab</span>
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        <div className="relative min-h-0 flex-1 bg-white dark:bg-zinc-900">
          {unblocked ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-white p-6 text-center dark:bg-zinc-900">
              <svg
                className="h-8 w-8 text-zinc-300 dark:text-zinc-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
              </svg>
              <p className="max-w-sm text-sm text-zinc-600 dark:text-zinc-300">
                {company.name} blocks in-app preview, and your browser blocked the
                automatic new tab.
              </p>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
              >
                Open {company.name} in new tab
              </a>
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-medium text-zinc-400 transition hover:text-zinc-600 dark:hover:text-zinc-300"
              >
                Close
              </button>
            </div>
          ) : !loaded ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white dark:bg-zinc-900">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Trying preview… if this portal blocks embedding it will open in a new tab.
              </p>
            </div>
          ) : null}
          <iframe
            src={src}
            title={`${company.name} career portal`}
            className="h-full w-full border-0"
            onLoad={handleLoad}
          />
        </div>
      </div>
    </div>
  )
}