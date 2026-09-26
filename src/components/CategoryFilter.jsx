export default function CategoryFilter({ categories, counts, active, onSelect }) {
  return (
    <div
      role="tablist"
      aria-label="Filter by category"
      className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 overscroll-x-contain"
    >
      <button
        type="button"
        role="tab"
        aria-selected={active === 'all'}
        onClick={() => onSelect('all')}
        className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-medium transition sm:py-1.5 ${
          active === 'all'
            ? 'bg-violet-600 text-white shadow-sm dark:bg-violet-500'
            : 'bg-white text-zinc-600 ring-1 ring-zinc-200 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700 dark:hover:bg-zinc-700'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          role="tab"
          aria-selected={active === category.id}
          onClick={() => onSelect(category.id)}
          className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-medium transition sm:py-1.5 ${
            active === category.id
              ? 'bg-violet-600 text-white shadow-sm dark:bg-violet-500'
              : 'bg-white text-zinc-600 ring-1 ring-zinc-200 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700 dark:hover:bg-zinc-700'
          }`}
        >
          {category.label}
          <span
            className={`ml-1.5 text-xs ${
              active === category.id
                ? 'text-violet-200'
                : 'text-zinc-400 dark:text-zinc-500'
            }`}
          >
            {counts[category.id] ?? 0}
          </span>
        </button>
      ))}
    </div>
  )
}