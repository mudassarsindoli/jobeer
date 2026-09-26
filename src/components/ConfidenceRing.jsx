import { confidenceTone, formatConfidence } from '../lib/parse.js'

const TONE_STROKE = {
  high: 'stroke-emerald-500',
  mid: 'stroke-violet-500',
  low: 'stroke-amber-500',
}

const TONE_TEXT = {
  high: 'text-emerald-600 dark:text-emerald-400',
  mid: 'text-violet-600 dark:text-violet-400',
  low: 'text-amber-600 dark:text-amber-400',
}

export default function ConfidenceRing({ value, size = 'md', showLabel = true }) {
  const tone = confidenceTone(value)
  const clamped = Math.max(0, Math.min(100, value || 0))
  const box = size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-14 w-14' : 'h-10 w-10'
  const text = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-sm' : 'text-[11px]'

  return (
    <div className={`relative shrink-0 ${box}`} title={`Join confidence ${formatConfidence(value)}`}>
      <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle
          cx="18"
          cy="18"
          r="15.5"
          pathLength="100"
          fill="none"
          strokeWidth="3.5"
          className="stroke-zinc-200 dark:stroke-zinc-700"
        />
        <circle
          cx="18"
          cy="18"
          r="15.5"
          pathLength="100"
          fill="none"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={`${clamped} 100`}
          className={`${TONE_STROKE[tone]} transition-[stroke-dasharray] duration-700`}
        />
      </svg>
      {showLabel ? (
        <span
          className={`absolute inset-0 flex items-center justify-center font-semibold tabular-nums ${text} ${TONE_TEXT[tone]}`}
        >
          {Math.round(clamped)}
        </span>
      ) : null}
    </div>
  )
}
