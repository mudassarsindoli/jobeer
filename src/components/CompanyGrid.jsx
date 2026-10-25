import { buildPortalUrl } from "../lib/buildPortalUrl.js";
import Logo from "./Logo.jsx";

export default function CompanyGrid({ companies, query }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {companies.map((company) => (
        <li key={company.id}>
          <a
            href={buildPortalUrl(company.careersUrl, query)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${company.name} careers in a new tab`}
            className="group flex items-center gap-3.5 rounded-2xl border border-zinc-200 bg-white p-4 transition duration-150 hover:border-violet-300 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:p-5"
          >
            <Logo company={company} className="h-11 w-11 sm:h-12 sm:w-12" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[15px] font-semibold tracking-tight text-zinc-900 group-hover:text-violet-700 sm:text-base">
                {company.name}
              </span>
              {company.domain ? (
                <span className="mt-0.5 block truncate text-xs text-zinc-500">
                  {company.domain}
                </span>
              ) : null}
            </span>
            <svg
              className="h-4 w-4 shrink-0 text-zinc-300 transition group-hover:text-violet-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 3h7v7M21 3l-9 9M10 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
