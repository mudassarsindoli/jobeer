import { ROLES, ROLE_LABELS } from '../lib/parse.js'

export default function RoleSwitcher({ role, onSelect }) {
  const move = (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const index = ROLES.findIndex((entry) => entry.id === role)
    const next = (index + (event.key === 'ArrowRight' ? 1 : ROLES.length - 1)) % ROLES.length
    onSelect(ROLES[next].id)
    event.currentTarget.querySelectorAll('button')[next]?.focus()
  }

  return (
    <div
      role="radiogroup"
      aria-label="Role focus — drives salary ranking and the keyword sent to each portal"
      onKeyDown={move}
      className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-white p-1 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700"
    >
      {ROLES.map((entry) => {
        const active = entry.id === role
        return (
          <button
            key={entry.id}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            title={`Rank and compare by ${ROLE_LABELS[entry.id]} salary — portal keyword: "${entry.term}"`}
            onClick={() => onSelect(entry.id)}
            className={`shrink-0 rounded-lg px-2.5 py-2 text-[11px] font-medium whitespace-nowrap transition sm:px-3 sm:text-xs sm:py-1.5 ${
              active
                ? 'bg-violet-600 text-white shadow-sm dark:bg-violet-500'
                : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700'
            }`}
          >
            {entry.label}
          </button>
        )
      })}
    </div>
  )
}
