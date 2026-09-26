export default function SearchTermField({ value, defaultValue, onChange, onReset }) {
  const custom = value !== defaultValue

  return (
    <div className="relative w-full sm:w-56">
      <input
        id="search-term"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="keyword sent to every portal"
        aria-label="Job search keyword embedded in portal links"
        className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 pr-16 text-base text-zinc-800 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 sm:text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-violet-400"
      />
      {custom ? (
        <button
          type="button"
          onClick={onReset}
          title={`Reset to "${defaultValue}"`}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-violet-100 px-1.5 py-1 text-[10px] font-semibold text-violet-700 transition hover:bg-violet-200 sm:py-0.5 dark:bg-violet-500/20 dark:text-violet-300 dark:hover:bg-violet-500/30"
        >
          reset
        </button>
      ) : null}
    </div>
  )
}
