import { confidenceExtent, typeList } from '../lib/derive.js'
import { SORT_OPTIONS } from '../lib/filter.js'

const CHIP_BASE =
  'shrink-0 rounded-full px-2.5 py-1.5 text-[11px] font-medium transition ring-1 sm:py-1'

export default function FilterBar({
  filters,
  typeCounts,
  onChange,
  onReset,
  activeCount,
  starredCount,
}) {
  const min = Math.floor(confidenceExtent.min / 5) * 5
  const max = Math.ceil(confidenceExtent.max / 5) * 5

  const toggleType = (id) => {
    const types = filters.types.includes(id)
      ? filters.types.filter((value) => value !== id)
      : [...filters.types, id]
    onChange({ types })
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="-mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-0.5 overscroll-x-contain">
        {typeList.map((type) => {
          const count = typeCounts[type.id] ?? 0
          const active = filters.types.includes(type.id)
          return (
            <button
              key={type.id}
              type="button"
              onClick={() => toggleType(type.id)}
              disabled={count === 0 && !active}
              aria-pressed={active}
              className={`${CHIP_BASE} ${
                active
                  ? 'bg-violet-600 text-white ring-violet-600'
                  : count === 0
                    ? 'cursor-not-allowed bg-zinc-50 text-zinc-300 ring-zinc-100 dark:bg-zinc-900 dark:text-zinc-700 dark:ring-zinc-800'
                    : 'bg-white text-zinc-600 ring-zinc-200 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700 dark:hover:bg-zinc-700'
              }`}
            >
              {type.label}
              <span className={`ml-1 tabular-nums ${active ? 'text-violet-200' : 'text-zinc-400'}`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="flex min-w-0 items-center gap-2 text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
          Min confidence
          <input
            type="range"
            min={min}
            max={max}
            step={1}
            value={filters.minConfidence}
            onChange={(event) => onChange({ minConfidence: Number(event.target.value) })}
            className="h-1 w-20 cursor-pointer appearance-none rounded-full bg-zinc-200 accent-violet-600 sm:w-32 dark:bg-zinc-700"
          />
          <span className="w-9 shrink-0 text-right font-semibold tabular-nums text-zinc-700 dark:text-zinc-200">
            {filters.minConfidence > 0 ? `${filters.minConfidence}%` : 'any'}
          </span>
        </label>

        <button
          type="button"
          onClick={() => onChange({ starred: !filters.starred })}
          aria-pressed={filters.starred}
          className={`${CHIP_BASE} ${
            filters.starred
              ? 'bg-amber-400 text-amber-950 ring-amber-400'
              : 'bg-white text-zinc-600 ring-zinc-200 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700 dark:hover:bg-zinc-700'
          }`}
        >
          Starred only
          {starredCount > 0 ? <span className="ml-1 tabular-nums">{starredCount}</span> : null}
        </button>

        <label className="flex items-center gap-2 text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
          <span className="sr-only sm:not-sr-only">Order</span>
          <select
            value={filters.sort}
            onChange={(event) => onChange({ sort: event.target.value })}
            className="max-w-[10rem] rounded-lg border border-zinc-200 bg-white px-2.5 py-2 text-base font-medium text-zinc-700 outline-none transition focus:border-violet-500 sm:max-w-none sm:py-1.5 sm:text-[11px] dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        {activeCount > 0 ? (
          <button
            type="button"
            onClick={onReset}
            className="py-1 text-[11px] font-medium text-violet-600 underline-offset-2 hover:underline dark:text-violet-400"
          >
            Clear {activeCount} filter{activeCount > 1 ? 's' : ''}
          </button>
        ) : null}
      </div>
    </div>
  )
}
