import { useEffect, useRef } from 'react'
import { ROLES, formatConfidence, formatEmployees, formatLpa, formatMonthly } from '../lib/parse.js'
import ConfidenceRing from './ConfidenceRing.jsx'
import Logo from './Logo.jsx'
import { sizeDotStyle } from '../lib/scale.js'

function Row({ label, children }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-zinc-100 py-2 last:border-0 dark:border-zinc-800">
      <dt className="shrink-0 text-[11px] font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
        {label}
      </dt>
      <dd className="min-w-0 text-right text-sm text-zinc-800 dark:text-zinc-200">{children}</dd>
    </div>
  )
}

function SalaryCompare({ company, role, categoryMedian }) {
  const value = company.salary[role] ?? 0
  const max = Math.max(value, categoryMedian) * 1.15 || 1
  const delta = categoryMedian > 0 ? Math.round(((value - categoryMedian) / categoryMedian) * 100) : 0
  const tone =
    delta >= 10 ? 'text-emerald-600 dark:text-emerald-400' : delta <= -10 ? 'text-amber-600 dark:text-amber-400' : 'text-zinc-500 dark:text-zinc-400'

  return (
    <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/50">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[11px] font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
          vs {ROLES.find((r) => r.id === role)?.label} median
        </span>
        <span className={`text-xs font-semibold tabular-nums ${tone}`}>
          {delta > 0 ? '+' : ''}
          {delta}%
        </span>
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="w-14 shrink-0 text-[10px] text-zinc-500 sm:w-16 dark:text-zinc-400">This firm</span>
          <span className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
            <span
              className="block h-full rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500"
              style={{ width: `${(value / max) * 100}%` }}
            />
          </span>
          <span className="w-12 shrink-0 text-right text-[11px] font-semibold tabular-nums">
            {formatLpa(value)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-14 shrink-0 text-[10px] text-zinc-500 sm:w-16 dark:text-zinc-400">Category</span>
          <span className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
            <span
              className="block h-full rounded-full bg-zinc-400 dark:bg-zinc-600"
              style={{ width: `${(categoryMedian / max) * 100}%` }}
            />
          </span>
          <span className="w-12 shrink-0 text-right text-[11px] tabular-nums text-zinc-500 dark:text-zinc-400">
            {formatLpa(categoryMedian)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function CompanyDetail({
  company,
  role,
  stats,
  starred,
  note,
  buildUrl,
  onClose,
  onPreview,
  onToggleStar,
  onNote,
}) {
  const closeRef = useRef(null)
  const percentile = stats.companyPercentile(company)
  const category = stats.categoryStats.find((entry) => entry.id === company.categoryId)
  const url = buildUrl(company)

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center bg-black/40 backdrop-blur-sm sm:items-stretch sm:justify-end"
      role="dialog"
      aria-modal="true"
      aria-label={`${company.name} details`}
      onClick={onClose}
    >
      <div
        className="animate-sheet-up flex max-h-[92svh] w-full flex-col overflow-y-auto rounded-t-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 sm:h-full sm:max-h-none sm:w-[min(94vw,30rem)] sm:rounded-none sm:border-y-0 sm:border-r-0"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="sticky top-0 z-10 flex items-start gap-3 border-b border-zinc-200 bg-white/95 p-3.5 pt-[max(0.875rem,env(safe-area-inset-top))] backdrop-blur sm:p-4 sm:pt-4 dark:border-zinc-800 dark:bg-zinc-900/95">
          <Logo company={company} className="h-14 w-14 sm:h-16 sm:w-16" />
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {company.name}
            </h2>
            <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">{company.portal}</p>
          </div>
          <ConfidenceRing value={company.confidence} size="lg" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className="flex flex-col gap-4 p-3.5 sm:p-4">
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
              {company.categoryLabel}
            </span>
            <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {company.typeLabel}
            </span>
            {company.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                {tag}
              </span>
            ))}
          </div>

          <dl>
            <Row label="Join confidence">
              <span className="font-semibold tabular-nums">{formatConfidence(company.confidence)}</span>
              <span className="ml-1 text-xs text-zinc-400">
                (avg {formatConfidence(category?.avgConfidence ?? 0)} in {company.categoryLabel})
              </span>
            </Row>
            <Row label="Headcount">
              <span className="inline-flex items-center gap-2">
                <span
                  className="inline-block rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500"
                  style={sizeDotStyle(company.employees)}
                  aria-hidden="true"
                />
                <span className="font-semibold tabular-nums">{formatEmployees(company.employees)}</span>
                <span className="text-xs text-zinc-400">p{percentile.employees} by size</span>
              </span>
            </Row>
            {ROLES.map((entry) => (
              <Row key={entry.id} label={entry.label}>
                <span className="font-semibold tabular-nums">{formatLpa(company.salary[entry.id])}</span>
                <span className="ml-1 text-xs text-zinc-400">{formatMonthly(company.salary[entry.id])}</span>
              </Row>
            ))}
            <Row label="Salary percentile">
              p{percentile.salary} overall · p{percentile.categorySalary} in {company.categoryLabel}
            </Row>
            <Row label="Specialization">{company.specialization}</Row>
          </dl>

          <SalaryCompare
            company={company}
            role={role}
            categoryMedian={category?.roleStats[role]?.median ?? 0}
          />

          <div>
            <label htmlFor="company-note" className="text-[11px] font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
              Private note
            </label>
            <textarea
              id="company-note"
              value={note}
              onChange={(event) => onNote(company.id, event.target.value)}
              rows={3}
              placeholder="Referral contact, recruiter name, follow-up date…"
              className="mt-1 w-full resize-none rounded-xl border border-zinc-200 bg-white px-3 py-2 text-base outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 sm:text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:placeholder:text-zinc-500"
            />
          </div>
        </div>

        <footer className="sticky bottom-0 mt-auto grid grid-cols-2 gap-2 border-t border-zinc-200 bg-white/95 p-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] backdrop-blur sm:flex sm:flex-wrap sm:items-center sm:p-4 sm:pb-4 dark:border-zinc-800 dark:bg-zinc-900/95">
          <button
            type="button"
            onClick={() => onPreview(company)}
            className="rounded-lg bg-violet-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500 sm:py-2"
          >
            Preview portal
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-zinc-100 px-3.5 py-2.5 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-200 sm:py-2 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
          >
            Open in new tab
          </a>
          <button
            type="button"
            onClick={() => onToggleStar(company.id)}
            aria-pressed={starred}
            className={`col-span-2 rounded-lg px-3.5 py-2.5 text-sm font-medium transition sm:col-span-1 sm:py-2 ${
              starred
                ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300'
                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700'
            }`}
          >
            {starred ? 'Starred' : 'Star'}
          </button>
          <span className="hidden min-w-0 truncate text-[11px] text-zinc-400 sm:ml-auto sm:inline dark:text-zinc-500">
            {company.careersUrl}
          </span>
        </footer>
      </div>
    </div>
  )
}
