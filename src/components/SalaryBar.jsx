import { formatLpa, formatMonthly } from '../lib/parse.js'

export function SalaryBar({ company, role, max, label, active = false }) {
  const value = company.salary[role] ?? 0
  const pct = max > 0 ? Math.max(2, Math.round((value / max) * 100)) : 0

  return (
    <div className="min-w-0">
      <div className="flex items-baseline justify-between gap-2">
        <span
          className={`truncate text-[11px] font-medium tracking-wide uppercase ${
            active ? 'text-zinc-700 dark:text-zinc-200' : 'text-zinc-400 dark:text-zinc-500'
          }`}
        >
          {label}
        </span>
        <span
          className={`shrink-0 text-sm font-semibold tabular-nums ${
            active ? 'text-zinc-900 dark:text-zinc-50' : 'text-zinc-500 dark:text-zinc-400'
          }`}
        >
          {formatLpa(value)}
        </span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div
          className={`h-full rounded-full transition-[width] duration-500 ${
            active
              ? 'bg-linear-to-r from-violet-500 to-fuchsia-500'
              : 'bg-zinc-300 dark:bg-zinc-700'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {active ? (
        <p className="mt-0.5 text-[10px] text-zinc-400 dark:text-zinc-500">
          {formatMonthly(value)} · {pct}% of dataset max
        </p>
      ) : null}
    </div>
  )
}

export function MicroSalaryRow({ company, roles }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-500 dark:text-zinc-400">
      {roles.map((role) => (
        <span key={role.id} className="inline-flex items-center gap-1.5">
          <span className="text-zinc-400 dark:text-zinc-500">{role.short}</span>
          <span
            className="inline-block h-1 w-6 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800"
            aria-hidden="true"
          >
            <span
              className="block h-full rounded-full bg-zinc-300 dark:bg-zinc-600"
              style={{ width: `${Math.max(4, (company.salary[role.id] / role.max) * 100)}%` }}
            />
          </span>
          <span className="font-medium tabular-nums">{formatLpa(company.salary[role.id])}</span>
        </span>
      ))}
    </div>
  )
}
