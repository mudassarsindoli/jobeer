import { ROLES, formatConfidence, formatEmployees } from '../lib/parse.js'
import { salaryMax } from '../lib/derive.js'
import { sizeDotStyle } from '../lib/scale.js'
import ConfidenceRing from './ConfidenceRing.jsx'
import Logo from './Logo.jsx'
import { MicroSalaryRow, SalaryBar } from './SalaryBar.jsx'

function ActionButton({ label, onClick, children, primary = false }) {
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        onClick()
      }}
      title={label}
      className={`flex h-8 shrink-0 items-center justify-center gap-1 rounded-lg px-2.5 text-xs font-medium transition sm:h-7 sm:px-2 sm:text-[11px] ${
        primary
          ? 'bg-violet-600 text-white hover:bg-violet-500'
          : 'text-zinc-500 ring-1 ring-zinc-200 hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-400 dark:ring-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
      }`}
    >
      {children}
    </button>
  )
}

export default function CompanyCard({
  company,
  role,
  starred,
  percentile,
  buildUrl,
  onOpen,
  onPreview,
  onCopy,
  onToggleStar,
}) {
  const activeRole = ROLES.find((entry) => entry.id === role) ?? ROLES[0]
  const otherRoles = ROLES.filter((entry) => entry.id !== role).map((entry) => ({
    ...entry,
    max: salaryMax[entry.id],
  }))
  const visibleTags = company.tags.slice(0, 2)
  const extraTags = company.tags.length - visibleTags.length

  return (
    <li className="animate-rise">
      <article
        onClick={() => onOpen(company)}
        className="group flex h-full cursor-pointer flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md focus-within:border-violet-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700"
      >
        <div className="flex items-start gap-3">
          <Logo company={company} className="h-14 w-20" />
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onOpen(company)
              }}
              className="truncate text-left text-sm font-semibold text-zinc-900 hover:text-violet-700 dark:text-zinc-50 dark:hover:text-violet-300"
            >
              {company.name}
            </button>
            <p className="truncate text-[11px] text-zinc-500 dark:text-zinc-400">
              {company.categoryLabel}
              <span className="mx-1 text-zinc-300 dark:text-zinc-600">·</span>
              <span className="text-zinc-600 dark:text-zinc-300">{company.typeLabel}</span>
            </p>
            <p className="truncate text-[10px] text-zinc-400 dark:text-zinc-500">
              {company.portal}
            </p>
          </div>
          <ConfidenceRing value={company.confidence} />
        </div>

        <SalaryBar
          company={company}
          role={activeRole.id}
          max={salaryMax[activeRole.id]}
          label={activeRole.label}
          active
        />

        <MicroSalaryRow company={company} roles={otherRoles} />

        <div className="flex flex-wrap items-center gap-1.5">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="max-w-full truncate rounded-md bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
          {extraTags > 0 ? (
            <span className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              +{extraTags}
            </span>
          ) : null}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-zinc-100 pt-2.5 dark:border-zinc-800">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span
              className="inline-block rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500"
              style={sizeDotStyle(company.employees)}
              aria-hidden="true"
            />
            <span className="font-medium tabular-nums">{formatEmployees(company.employees)}</span>
            staff
          </span>
          <span
            className="shrink-0 text-[10px] text-zinc-400 dark:text-zinc-500"
            title="Salary percentile across all companies"
          >
            p{percentile ?? 0}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <ActionButton
            label={`Preview ${company.name} portal`}
            onClick={() => onPreview(company)}
            primary
          >
            Preview
          </ActionButton>
          <ActionButton
            label={`Open ${company.name} in new tab`}
            onClick={() => window.open(buildUrl(company), '_blank', 'noopener,noreferrer')}
          >
            Open
          </ActionButton>
          <ActionButton label={`Copy ${company.name} link`} onClick={() => onCopy(company)}>
            Copy
          </ActionButton>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onToggleStar(company.id)
            }}
            title={starred ? `Unstar ${company.name}` : `Star ${company.name}`}
            aria-label={starred ? `Unstar ${company.name}` : `Star ${company.name}`}
            aria-pressed={starred}
            className={`ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition sm:h-7 sm:w-7 ${
              starred
                ? 'text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10'
                : 'text-zinc-300 hover:bg-zinc-100 hover:text-zinc-500 dark:text-zinc-700 dark:hover:bg-zinc-800'
            }`}
          >
            <svg
              className={`h-4 w-4 ${starred ? 'fill-current' : ''}`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.4l6.1-.9L12 3Z" />
            </svg>
          </button>
        </div>
      </article>
    </li>
  )
}

export function CardLegend() {
  return (
    <p className="text-[11px] text-balance text-zinc-400 sm:text-center dark:text-zinc-500">
      Ring {formatConfidence(95)}+ = high join confidence · dot size = log staff count · p## =
      salary percentile
    </p>
  )
}
