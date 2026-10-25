import { useRef } from "react";

export default function SearchBar({
  id,
  label,
  placeholder,
  query,
  onChange,
  compact = false,
}) {
  const inputRef = useRef(null);

  const clear = () => {
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative" role="search">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <svg
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-zinc-400 ${
          compact ? "left-3.5 h-4 w-4" : "left-5 h-5 w-5"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        ref={inputRef}
        id={id}
        type="text"
        value={query}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") clear();
        }}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck="false"
        enterKeyHint="search"
        className={
          compact
            ? "w-full rounded-xl border border-zinc-200 bg-white py-2.5 pr-10 pl-10 text-sm text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
            : "w-full rounded-2xl border border-zinc-200 bg-white py-4 pr-12 pl-14 text-base text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 sm:text-lg"
        }
      />
      {query ? (
        <button
          type="button"
          onClick={clear}
          aria-label={`Clear ${label.toLowerCase()}`}
          className="absolute top-1/2 right-3.5 -translate-y-1/2 rounded-full p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
