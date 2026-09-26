import { useState } from 'react'

export default function Logo({ company, className = 'h-12 w-12', tileClass = '' }) {
  const [failed, setFailed] = useState(false)
  const showFallback = failed || !company.logo

  return (
    <div
      className={`flex ${className} shrink-0 items-center justify-center overflow-hidden rounded-xl bg-zinc-50 px-1.5 ring-1 ring-zinc-100 sm:px-3 dark:bg-zinc-800/60 dark:ring-zinc-800 ${tileClass}`}
    >
      {showFallback ? (
        <span className="text-lg font-semibold tracking-tight text-zinc-400 select-none dark:text-zinc-500">
          {company.initials}
        </span>
      ) : (
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          style={{ maxWidth: `${company.logoWidth}px` }}
          className="max-h-full max-w-full object-contain"
        />
      )}
    </div>
  )
}
