import { searchIndexFor } from "./derive.js";
import { ROLE_LABELS } from "./parse.js";

export const SORT_OPTIONS = [
  { id: "relevance", label: "Sort: Featured" },
  { id: "name", label: "Sort: Name (A-Z)" },
  { id: "confidence", label: "Sort: Join confidence" },
  { id: "employees", label: "Sort: Company size" },
  { id: "salary", label: "Sort: Salary" },
  { id: "salary_per_head", label: "Sort: Salary per 1k staff" },
];

export const DEFAULT_FILTERS = {
  q: "",
  cat: "all",
  types: [],
  minConfidence: 0,
  sort: "relevance",
  role: "senior_engg",
  starred: false,
  view: "browse",
};

const collator = new Intl.Collator("en", { sensitivity: "base" });

function matchesQuery(company, tokens) {
  if (tokens.length === 0) return true;
  const haystack = searchIndexFor(company);
  const words = haystack.split(/[^a-z0-9+#.]+/).filter(Boolean);
  const name = company.name.toLowerCase();
  return tokens.every(
    (token) => name.includes(token) || words.some((word) => word.startsWith(token)),
  );
}

function perThousand(company, role) {
  if (!company.employees) return 0;
  return (company.salary[role] / company.employees) * 1000;
}

export function sortCompanies(list, sort, role) {
  const copy = [...list];
  switch (sort) {
    case "name":
      return copy.sort((a, b) => collator.compare(a.name, b.name));
    case "confidence":
      return copy.sort((a, b) => b.confidence - a.confidence || collator.compare(a.name, b.name));
    case "employees":
      return copy.sort((a, b) => b.employees - a.employees || collator.compare(a.name, b.name));
    case "salary":
      return copy.sort(
        (a, b) => b.salary[role] - a.salary[role] || collator.compare(a.name, b.name),
      );
    case "salary_per_head":
      return copy.sort(
        (a, b) => perThousand(b, role) - perThousand(a, role) || collator.compare(a.name, b.name),
      );
    default:
      return copy.sort(
        (a, b) => b.confidence - a.confidence || b.salary[role] - a.salary[role],
      );
  }
}

export function applyFilters(source, filters, starredIds) {
  return sortCompanies(
    source.filter((company) => matchesFilters(company, filters, starredIds, true)),
    filters.sort,
    filters.role,
  );
}

function matchesFilters(company, filters, starredIds, includeCategory) {
  if (includeCategory && filters.cat !== "all" && company.categoryId !== filters.cat)
    return false;
  if (filters.types.length > 0 && !filters.types.includes(company.type)) return false;
  if (filters.minConfidence > 0 && company.confidence < filters.minConfidence) return false;
  if (filters.starred && !starredIds.has(company.id)) return false;
  return matchesQuery(company, tokenize(filters.q));
}

function tokenize(query) {
  return String(query ?? "")
    .toLowerCase()
    .split(/[^a-z0-9+#.]+/)
    .filter(Boolean);
}

export function countByCategory(source, filters, starredIds) {
  const counts = { all: 0 };
  for (const company of source) {
    if (!matchesFilters(company, filters, starredIds, false)) continue;
    counts[company.categoryId] = (counts[company.categoryId] ?? 0) + 1;
    counts.all += 1;
  }
  return counts;
}

export function countByType(source, filters, starredIds) {
  const counts = {};
  for (const company of source) {
    if (!matchesFilters(company, filters, starredIds, false)) continue;
    counts[company.type] = (counts[company.type] ?? 0) + 1;
  }
  return counts;
}

export function activeFilterCount(filters) {
  let count = 0;
  if (filters.q.trim()) count += 1;
  if (filters.cat !== "all") count += 1;
  if (filters.types.length > 0) count += 1;
  if (filters.minConfidence > 0) count += 1;
  if (filters.starred) count += 1;
  if (filters.sort !== "relevance") count += 1;
  return count;
}

export function describeFilters(filters, total) {
  const parts = [];
  if (filters.q.trim()) parts.push(`"${filters.q.trim()}"`);
  if (filters.cat !== "all") parts.push(filters.cat.replace(/-/g, " "));
  if (filters.types.length > 0) parts.push(filters.types.map((t) => t.replace(/_/g, " ")).join("/"));
  if (filters.minConfidence > 0) parts.push(`confidence ≥ ${filters.minConfidence}%`);
  if (filters.starred) parts.push("starred only");
  if (filters.sort !== "relevance") {
    const label = SORT_OPTIONS.find((option) => option.id === filters.sort)?.label ?? "";
    parts.push(label.replace("Sort: ", "").toLowerCase());
  }
  const role = ROLE_LABELS[filters.role] ?? filters.role;
  const head = `${total} ${total === 1 ? "company" : "companies"}`;
  return parts.length > 0 ? `${head} · ${role} · ${parts.join(" · ")}` : `${head} · ${role}`;
}
