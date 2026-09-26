export default function EmptyState({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 px-5 py-12 text-center sm:px-6 sm:py-16 dark:border-zinc-700">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
        <svg
          className="h-6 w-6 text-zinc-400 dark:text-zinc-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M8.5 11h5" />
        </svg>
      </div>
      <h2 className="mt-4 text-base font-semibold text-balance text-zinc-800 dark:text-zinc-100">
        No companies match your search
      </h2>
      <p className="mt-1 text-sm text-balance text-zinc-500 dark:text-zinc-400">
        Search covers names, specializations, types and portal hosts. Try a broader term, drop the
        confidence floor, or clear the filters to browse all listed career portals.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-5 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
      >
        Reset filters
      </button>
    </div>
  )
}
