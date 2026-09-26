export function StatTile({ label, value, hint, tone = 'default' }) {
  const toneClass = {
    default: 'text-zinc-900 dark:text-zinc-50',
    accent: 'text-violet-600 dark:text-violet-400',
    good: 'text-emerald-600 dark:text-emerald-400',
  }[tone]

  return (
    <div className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm sm:p-3.5 dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-[10px] leading-tight font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
        {label}
      </p>
      <p className={`mt-1 text-lg leading-tight font-semibold break-words tabular-nums sm:text-xl ${toneClass}`}>
        {value}
      </p>
      {hint ? (
        <p className="mt-0.5 text-[10px] leading-tight text-zinc-400 sm:text-[11px] dark:text-zinc-500">
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export function Panel({ title, subtitle, children, action }) {
  return (
    <section className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-sm sm:p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
          {subtitle ? (
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{subtitle}</p>
          ) : null}
        </div>
        {action}
      </div>
      {children}
    </section>
  )
}

export function BarRow({ label, value, max, display, secondary, onClick }) {
  const pct = max > 0 ? Math.max(1.5, (value / max) * 100) : 0
  const Row = onClick ? 'button' : 'div'

  return (
    <Row
      {...(onClick ? { type: 'button', onClick } : {})}
      className={`flex w-full items-center gap-2 rounded-lg px-1.5 py-1 text-left ${
        onClick ? 'transition hover:bg-zinc-50 dark:hover:bg-zinc-800' : ''
      }`}
    >
      <span className="w-24 shrink-0 truncate text-[11px] text-zinc-600 sm:w-36 dark:text-zinc-300">
        {label}
      </span>
      <span className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <span
          className="block h-full rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500"
          style={{ width: `${pct}%` }}
        />
      </span>
      <span className="w-12 shrink-0 text-right text-[11px] font-semibold tabular-nums text-zinc-800 sm:w-20 dark:text-zinc-200">
        {display}
      </span>
      {secondary ? (
        <span className="w-10 shrink-0 text-right text-[10px] tabular-nums text-zinc-400 sm:w-14 dark:text-zinc-500">
          {secondary}
        </span>
      ) : null}
    </Row>
  )
}
