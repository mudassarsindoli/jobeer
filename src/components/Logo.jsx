import { useState } from "react";

export default function Logo({ company, className = "h-12 w-12" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`flex ${className} shrink-0 items-center justify-center overflow-hidden rounded-xl bg-zinc-50 p-1.5 ring-1 ring-zinc-100`}
    >
      {failed || !company.logo ? (
        <span
          className="text-sm font-semibold tracking-tight text-zinc-400 select-none"
          aria-hidden="true"
        >
          {company.initials}
        </span>
      ) : (
        <img
          src={company.logo}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      )}
    </div>
  );
}
