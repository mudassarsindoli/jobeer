import { ROLES, formatConfidence, formatEmployees, formatLpa } from '../lib/parse.js'
import { densityOutliers } from '../lib/stats.js'
import { BarRow, Panel, StatTile } from './Primitives.jsx'

function SalaryMatrix({ stats, role }) {
  const rows = stats.categoryStats
    .map((entry) => ({
      label: entry.label,
      count: entry.count,
      confidence: entry.avgConfidence,
      values: Object.fromEntries(ROLES.map((r) => [r.id, entry.roleStats[r.id].median])),
    }))
    .sort((a, b) => b.values[role] - a.values[role])
  const max = Math.max(...rows.map((row) => row.values[role]), 1)

  return (
    <div className="space-y-1">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center gap-2 px-1.5 py-1">
          <span className="w-24 shrink-0 truncate text-[11px] text-zinc-600 sm:w-36 dark:text-zinc-300">
            {row.label}
          </span>
          <span className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
            <span
              className="block h-full rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500"
              style={{ width: `${Math.max(2, (row.values[role] / max) * 100)}%` }}
            />
          </span>
          <span className="w-12 shrink-0 text-right text-[11px] font-semibold tabular-nums text-zinc-800 dark:text-zinc-200">
            {formatLpa(row.values[role])}
          </span>
          <span className="hidden w-24 shrink-0 text-right text-[10px] tabular-nums text-zinc-400 sm:block dark:text-zinc-500">
            {ROLES.filter((r) => r.id !== role)
              .map((r) => formatLpa(row.values[r.id]))
              .join(' · ')}
          </span>
          <span className="w-9 shrink-0 text-right text-[10px] tabular-nums text-zinc-400 sm:w-12 dark:text-zinc-500">
            n={row.count}
          </span>
        </div>
      ))}
    </div>
  )
}

function TypeMix({ stats }) {
  const max = Math.max(...stats.typeStats.map((entry) => entry.count), 1)
  return (
    <div className="space-y-1">
      {stats.typeStats.map((entry) => {
        const pct = entry.share * 100
        return (
          <BarRow
            key={entry.id}
            label={entry.label}
            value={entry.count}
            max={max}
            display={`${entry.count}`}
            secondary={pct < 1 && pct > 0 ? '<1%' : `${Math.round(pct)}%`}
          />
        )
      })}
    </div>
  )
}

function SalaryHistogram({ stats, role }) {
  const buckets = stats.buckets[role] ?? []
  const max = Math.max(...buckets.map((bucket) => bucket.count), 1)
  return (
    <div className="flex h-28 items-end gap-1 sm:gap-1.5">
      {buckets.map((bucket) => (
        <div key={bucket.label} className="flex min-w-0 flex-1 flex-col items-center gap-1">
          <span className="text-[9px] font-medium tabular-nums text-zinc-500 sm:text-[10px] dark:text-zinc-400">
            {bucket.count}
          </span>
          <span
            className="w-full rounded-t-md bg-linear-to-t from-violet-600/70 to-fuchsia-500/80 transition-[height] duration-500"
            style={{ height: `${Math.max(3, (bucket.count / max) * 78)}px` }}
          />
          <span className="w-full truncate text-center text-[8px] leading-none text-zinc-400 sm:text-[9px] dark:text-zinc-500">
            {bucket.label}
          </span>
        </div>
      ))}
    </div>
  )
}

function Ladder({ stats, role, buildUrl, onOpen }) {
  const ladder = stats.ladder[role] ?? []
  const max = Math.max(...ladder.map((company) => company.salary[role]), 1)
  return (
    <div className="space-y-0.5">
      {ladder.map((company, index) => (
        <div
          key={company.id}
          className="flex items-center gap-2 rounded-lg px-1.5 py-1 transition hover:bg-zinc-50 dark:hover:bg-zinc-800"
        >
          <span className="w-4 shrink-0 text-right text-[10px] font-semibold tabular-nums text-zinc-400 dark:text-zinc-500">
            {index + 1}
          </span>
          <button
            type="button"
            onClick={() => onOpen(company)}
            className="w-24 shrink-0 truncate text-left text-[11px] font-medium text-zinc-700 hover:text-violet-700 sm:w-36 dark:text-zinc-200 dark:hover:text-violet-300"
          >
            {company.name}
          </button>
          <span className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
            <span
              className="block h-full rounded-full bg-linear-to-r from-emerald-500 to-teal-400"
              style={{ width: `${Math.max(3, (company.salary[role] / max) * 100)}%` }}
            />
          </span>
          <span className="w-12 shrink-0 text-right text-[11px] font-semibold tabular-nums text-zinc-800 dark:text-zinc-200">
            {formatLpa(company.salary[role])}
          </span>
          <a
            href={buildUrl(company)}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open ${company.name} portal`}
            className="shrink-0 text-zinc-300 transition hover:text-violet-600 dark:text-zinc-600 dark:hover:text-violet-400"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  )
}

function Outliers({ list, role }) {
  const rows = densityOutliers(list, role).slice(0, 6)
  if (rows.length === 0) return null
  return (
    <Panel
      title="Pay per headcount"
      subtitle="Stated salary (LPA) per 1,000 staff — small teams paying premium rates"
    >
      <div className="space-y-0.5">
        {rows.map(({ company, perThousand }) => (
          <div key={company.id} className="flex items-center justify-between gap-2 px-1.5 py-1">
            <span className="min-w-0 truncate text-[11px] text-zinc-700 dark:text-zinc-200">
              {company.name}
              <span className="ml-1.5 text-zinc-400 dark:text-zinc-500">
                {formatEmployees(company.employees)} staff
              </span>
            </span>
            <span className="shrink-0 text-[11px] font-semibold tabular-nums text-amber-600 dark:text-amber-400">
              {perThousand >= 1000
                ? `${(perThousand / 1000).toFixed(1)}k`
                : perThousand.toFixed(0)}{' '}
              LPA / 1k
            </span>
          </div>
        ))}
      </div>
    </Panel>
  )
}

export default function InsightsDashboard({ stats, list, role, buildUrl, onOpen }) {
  const summary = stats.roleSummary[role]
  const activeLabel = ROLES.find((entry) => entry.id === role)?.label ?? role
  const topCategory = stats.categoryStats
    .slice()
    .sort((a, b) => b.roleStats[role].median - a.roleStats[role].median)[0]

  return (
    <div className="space-y-3 sm:space-y-4">
      {list.length === 0 ? (
        <p className="rounded-xl bg-amber-50 px-3 py-2 text-[11px] text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
          Your filters match nothing, so these figures fall back to the full dataset. Loosen the
          filters to slice the numbers.
        </p>
      ) : null}

      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
        <StatTile
          label={`Median ${activeLabel}`}
          value={formatLpa(summary.median)}
          hint={`mean ${formatLpa(summary.mean)} · range ${formatLpa(summary.min)}–${formatLpa(summary.max)}`}
          tone="accent"
        />
        <StatTile
          label="Companies analysed"
          value={stats.count}
          hint={`of ${stats.categoryStats.reduce((sum, entry) => sum + entry.count, 0)} listed`}
        />
        <StatTile
          label="Best-paying category"
          value={topCategory?.label ?? '—'}
          hint={`median ${formatLpa(topCategory?.roleStats[role]?.median ?? 0)}`}
          tone="good"
        />
        <StatTile
          label="Avg join confidence"
          value={formatConfidence(stats.avgConfidence)}
          hint={`median headcount ${formatEmployees(stats.medianEmployees)}`}
        />
      </div>

      <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
        <Panel
          title="Median pay by category"
          subtitle={`${activeLabel} median, with the other two roles beside it`}
        >
          <SalaryMatrix stats={stats} role={role} />
        </Panel>

        <div className="space-y-3 sm:space-y-4">
          <Panel title="Company type mix" subtitle="How the dataset splits by organisation type">
            <TypeMix stats={stats} />
          </Panel>
          <Panel title="Pay distribution" subtitle={`${activeLabel} salary buckets across ${stats.count} companies`}>
            <SalaryHistogram stats={stats} role={role} />
          </Panel>
        </div>
      </div>

      <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
        <Panel
          title={`Top 10 · ${activeLabel}`}
          subtitle="Highest stated average salary in the current result set"
        >
          <Ladder stats={stats} role={role} buildUrl={buildUrl} onOpen={onOpen} />
        </Panel>
        <Outliers list={list} role={role} />
      </div>
    </div>
  )
}
