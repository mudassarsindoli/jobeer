import { useMemo, useState } from "react";
import CompanyGrid from "./components/CompanyGrid.jsx";
import SearchBar from "./components/SearchBar.jsx";
import { companies } from "./lib/derive.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [companyQuery, setCompanyQuery] = useState("");
  const term = query.trim();
  const hasQuery = term.length > 0;
  const companyTerm = companyQuery.trim().toLowerCase();

  const visibleCompanies = useMemo(() => {
    if (!companyTerm) return companies;
    return companies.filter((company) =>
      company.name.toLowerCase().includes(companyTerm),
    );
  }, [companyTerm]);

  const updateJobQuery = (value) => {
    setQuery(value);
    if (!value.trim()) setCompanyQuery("");
  };

  const clearCompanyQuery = () => {
    setCompanyQuery("");
    document.getElementById("company-search")?.focus();
  };

  return (
    <div className="min-h-svh bg-white text-zinc-900 antialiased">
      <div
        className={
          hasQuery
            ? "mx-auto max-w-5xl px-4 pb-16 sm:px-6"
            : "flex min-h-svh items-center justify-center px-4 py-10"
        }
      >
        <div
          className={
            hasQuery
              ? "sticky top-0 z-20 -mx-4 border-b border-zinc-100 bg-white/95 px-4 pt-6 pb-4 backdrop-blur sm:-mx-6 sm:px-6 sm:pt-8"
              : "w-full"
          }
        >
          <div className="mx-auto w-full max-w-xl">
            <h2 className="mb-4 text-center text-3xl">
              Jobeer - Find your job fast &amp; easy
            </h2>
            <SearchBar
              id="job-search"
              label="Job title"
              placeholder="Enter a job title…"
              query={query}
              onChange={updateJobQuery}
            />
            {hasQuery ? (
              <div className="mt-3">
                <SearchBar
                  id="company-search"
                  label="Company name"
                  placeholder="Search companies by name…"
                  query={companyQuery}
                  onChange={setCompanyQuery}
                  compact
                />
              </div>
            ) : null}
          </div>
        </div>

        {hasQuery ? (
          <main className="pt-7 sm:pt-9">
            <h2 className="sr-only">Companies for {term}</h2>
            {visibleCompanies.length > 0 ? (
              <CompanyGrid companies={visibleCompanies} query={term} />
            ) : (
              <div
                role="status"
                aria-live="polite"
                className="mx-auto max-w-md rounded-2xl border border-dashed border-zinc-200 px-6 py-14 text-center"
              >
                <p className="text-sm font-medium text-zinc-900">
                  No companies found
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  Try a different company name.
                </p>
                <button
                  type="button"
                  onClick={clearCompanyQuery}
                  className="mt-5 rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-violet-700 transition hover:border-violet-300 hover:bg-violet-50 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none"
                >
                  Clear company search
                </button>
              </div>
            )}
          </main>
        ) : null}
      </div>
    </div>
  );
}
