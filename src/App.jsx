import { useCallback, useMemo, useState } from "react";
import CategoryFilter from "./components/CategoryFilter.jsx";
import CompanyDetail from "./components/CompanyDetail.jsx";
import CompanyGrid from "./components/CompanyGrid.jsx";
import EmptyState from "./components/EmptyState.jsx";
import FilterBar from "./components/FilterBar.jsx";
import InsightsDashboard from "./components/InsightsDashboard.jsx";
import PortalModal from "./components/PortalModal.jsx";
import RoleSwitcher from "./components/RoleSwitcher.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SearchTermField from "./components/SearchTermField.jsx";
import ShareExportBar from "./components/ShareExportBar.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Toast from "./components/Toast.jsx";
import { CardLegend } from "./components/CompanyCard.jsx";
import { useStarred } from "./hooks/useStarred.js";
import { buildPortalUrl } from "./lib/buildPortalUrl.js";
import { companies, categoryList, companyById } from "./lib/derive.js";
import {
  activeFilterCount,
  applyFilters,
  countByCategory,
  countByType,
  describeFilters,
} from "./lib/filter.js";
import { copyText } from "./lib/exporters.js";
import { ROLES } from "./lib/parse.js";
import { computeStats } from "./lib/stats.js";
import { setExtraParam, useUrlFilters } from "./lib/useUrlFilters.js";

const DEFAULT_SEARCH_TERM = "senior software engineer";

function roleTerm(role) {
  return ROLES.find((entry) => entry.id === role)?.term ?? DEFAULT_SEARCH_TERM;
}

export default function App() {
  const { filters, patch, reset } = useUrlFilters();
  const { starred, starredSet, toggle, notes, setNote, restore, exportPayload } = useStarred();
  const [termOverride, setTermOverride] = useState(null);
  const [detailId, setDetailId] = useState(() => {
    const id = new URLSearchParams(window.location.search).get("company");
    return id && companyById(id) ? id : null;
  });
  const [preview, setPreview] = useState(null);
  const [toast, setToast] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const detail = detailId ? companyById(detailId) : null;

  const openDetail = useCallback((company) => {
    setDetailId(company.id);
    setExtraParam("company", company.id);
  }, []);

  const closeDetail = useCallback(() => {
    setDetailId(null);
    setExtraParam("company", null);
  }, []);

  const searchTerm = termOverride ?? roleTerm(filters.role);
  const buildUrl = useCallback(
    (company) => buildPortalUrl(company.careersUrl, searchTerm),
    [searchTerm],
  );

  const result = useMemo(
    () => applyFilters(companies, filters, starredSet),
    [filters, starredSet],
  );

  const stats = useMemo(() => computeStats(companies), []);
  const liveStats = useMemo(() => computeStats(result), [result]);

  const typeCounts = useMemo(
    () => countByType(companies, filters, starredSet),
    [filters, starredSet],
  );

  const counts = useMemo(
    () => countByCategory(companies, filters, starredSet),
    [filters, starredSet],
  );

  const activeCount = activeFilterCount(filters);

  const notify = useCallback((message) => setToast(String(message ?? "")), []);

  const copyCompany = useCallback(
    async (company) => {
      const ok = await copyText(buildUrl(company))
      notify(ok ? `${company.name} link copied` : "Copy blocked by the browser")
    },
    [buildUrl, notify],
  );

  const previewCompany = useCallback(
    (company) => {
      if (!buildUrl(company)) return;
      closeDetail();
      setPreview(company);
    },
    [buildUrl, closeDetail],
  );

  const openInNewTab = useCallback((url) => {
    let win = null;
    try {
      win = window.open(url, "_blank");
    } catch {
      win = null;
    }
    if (win) {
      try {
        win.opener = null;
      } catch {
        /* ignore */
      }
    }
    return Boolean(win);
  }, []);

  const isInsights = filters.view === "insights";

  return (
    <div className="min-h-svh bg-zinc-50 text-zinc-800 antialiased transition-colors dark:bg-zinc-900 dark:text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8">
        <header className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h1 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-semibold tracking-tight sm:text-2xl">
              <svg
                className="h-5 w-5 shrink-0 text-violet-600 sm:h-6 sm:w-6 dark:text-violet-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 7 21 7M6 7V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3M4 7l1 12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l1-12M9 11v3M15 11v3" />
              </svg>
              Jatrix - The Firm Plethora
            </h1>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {companies.length} career portals · salaries in ₹ LPA ·{" "}
              {starred.length > 0 ? `${starred.length} starred` : "star what interests you"}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
          </div>
        </header>

        <div className="sticky top-0 z-30 -mx-4 mb-4 max-h-[100svh] space-y-3 overflow-y-auto overscroll-y-contain border-b border-zinc-200/70 bg-zinc-50/90 px-4 py-3 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/90 sm:-mx-6 sm:px-6">
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <SearchBar
              query={filters.q}
              onChange={(q) => patch({ q })}
              total={result.length}
            />
            <div className="-mx-1 flex min-w-0 items-center gap-2 overflow-x-auto px-1 pb-1 overscroll-x-contain sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
              <RoleSwitcher role={filters.role} onSelect={(role) => patch({ role })} />
            </div>
            {!isInsights ? (
              <div className="sm:hidden">
                <button
                  type="button"
                  onClick={() => setAdvancedOpen((open) => !open)}
                  aria-expanded={advancedOpen}
                  aria-controls="advanced-filters"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-3 py-2.5 text-xs font-medium text-zinc-600 shadow-sm ring-1 ring-zinc-200 transition active:scale-[0.99] dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 5h18l-7 8v6l-4-2v-4z" />
                  </svg>
                  {advancedOpen ? "Hide filters" : "Filters"}
                  {activeCount > 0 ? (
                    <span className="rounded-full bg-violet-600 px-1.5 py-0.5 text-[10px] font-semibold text-white tabular-nums">
                      {activeCount}
                    </span>
                  ) : null}
                </button>
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="min-w-0 flex-1">
              <CategoryFilter
                categories={categoryList}
                counts={counts}
                active={filters.cat}
                onSelect={(cat) => patch({ cat })}
              />
            </div>
            <div
              role="tablist"
              aria-label="Switch between browsing companies and dataset insights"
              className="flex shrink-0 items-center gap-1 rounded-xl bg-white p-1 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700"
            >
              {[
                { id: "browse", label: "Browse" },
                { id: "insights", label: "Insights" },
              ].map((tab) => {
                const active = isInsights === (tab.id === "insights")
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => patch({ view: tab.id })}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition ${
                      active
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
          <div
            id="advanced-filters"
            className={advancedOpen ? "block" : "hidden sm:block"}
          >
            {!isInsights ? (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                <div className="sm:w-56 sm:shrink-0">
                  <SearchTermField
                    value={searchTerm}
                    defaultValue={roleTerm(filters.role)}
                    onChange={setTermOverride}
                    onReset={() => setTermOverride(null)}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <FilterBar
                    filters={filters}
                    typeCounts={typeCounts}
                    onChange={patch}
                    onReset={reset}
                    activeCount={activeCount}
                    starredCount={starred.length}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <main className="mt-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <p className="min-w-0 text-xs text-zinc-500 dark:text-zinc-400">
              {describeFilters(filters, result.length)}
            </p>
            <ShareExportBar
              list={result}
              buildUrl={buildUrl}
              role={filters.role}
              onToast={notify}
              onBackup={exportPayload}
              onRestore={(payload) => {
                restore(payload);
                notify("Backup restored");
              }}
            />
          </div>

          {isInsights ? (
            <InsightsDashboard
              stats={liveStats}
              list={result}
              role={filters.role}
              buildUrl={buildUrl}
              onOpen={openDetail}
            />
          ) : result.length === 0 ? (
            <EmptyState onReset={reset} />
          ) : (
            <div className="space-y-4">
              <CompanyGrid
                companies={result}
                role={filters.role}
                starredSet={starredSet}
                stats={stats}
                buildUrl={buildUrl}
                onOpen={openDetail}
                onPreview={previewCompany}
                onCopy={copyCompany}
                onToggleStar={(id) => {
                  toggle(id);
                  const name = companies.find((company) => company.id === id)?.name;
                  notify(starredSet.has(id) ? `${name} unstarred` : `${name} starred`);
                }}
              />
              <div className="text-center">
                <CardLegend />
              </div>
            </div>
          )}
        </main>

        <footer className="mt-10 border-t border-zinc-200 pt-6 text-center text-xs text-balance text-zinc-400 sm:mt-12 dark:border-zinc-800 dark:text-zinc-500">
          Preview embeds where portals allow it; otherwise open in a new tab. Filters live in the
          URL, so this view is shareable. Made by{" "}
          <a
            className="text-blue-600 font-bold"
            href="https://www.linkedin.com/in/mudassarsindoli/"
          >
            mudassar.sindoli
          </a>
        </footer>
      </div>

      {detail ? (
        <CompanyDetail
          key={detail.id}
          company={detail}
          role={filters.role}
          stats={stats}
          starred={starredSet.has(detail.id)}
          note={notes[detail.id] ?? ""}
          buildUrl={buildUrl}
          onClose={closeDetail}
          onPreview={previewCompany}
          onToggleStar={toggle}
          onNote={setNote}
        />
      ) : null}

      {preview ? (
        <PortalModal
          key={preview.name}
          company={preview}
          src={buildUrl(preview)}
          onClose={() => setPreview(null)}
          openInNewTab={openInNewTab}
        />
      ) : null}

      <Toast message={toast} onDone={() => setToast("")} />
    </div>
  );
}
