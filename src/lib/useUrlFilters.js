import { useCallback, useEffect, useState } from "react";
import { DEFAULT_FILTERS } from "./filter.js";
import { DEFAULT_ROLE, ROLE_IDS } from "./parse.js";

const VALID_CATS = new Set([
  "all",
  "technology",
  "finance",
  "retail",
  "healthcare",
  "ai-orchestration",
  "e-commerce",
  "saas",
  "enterprise-b2b-infrastructure",
]);

const VALID_SORTS = new Set([
  "relevance",
  "name",
  "confidence",
  "employees",
  "salary",
  "salary_per_head",
]);

const VALID_VIEWS = new Set(["browse", "insights"]);

export function parseFilters(search) {
  const params = new URLSearchParams(search);
  const role = params.get("role");
  const cat = params.get("cat");
  const sort = params.get("sort");
  const view = params.get("view");
  const confidence = Number(params.get("minConfidence"));

  return {
    q: params.get("q") ?? DEFAULT_FILTERS.q,
    cat: cat && VALID_CATS.has(cat) ? cat : DEFAULT_FILTERS.cat,
    types: (params.get("types") ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
    minConfidence: Number.isFinite(confidence)
      ? Math.min(100, Math.max(0, confidence))
      : DEFAULT_FILTERS.minConfidence,
    sort: sort && VALID_SORTS.has(sort) ? sort : DEFAULT_FILTERS.sort,
    role: role && ROLE_IDS.includes(role) ? role : DEFAULT_ROLE,
    starred: params.get("starred") === "1",
    view: view && VALID_VIEWS.has(view) ? view : DEFAULT_FILTERS.view,
  };
}

export function filtersToSearch(filters) {
  const params = new URLSearchParams();
  if (filters.q.trim()) params.set("q", filters.q.trim());
  if (filters.cat !== "all") params.set("cat", filters.cat);
  if (filters.types.length > 0) params.set("types", filters.types.join(","));
  if (filters.minConfidence > 0) params.set("minConfidence", String(filters.minConfidence));
  if (filters.sort !== "relevance") params.set("sort", filters.sort);
  if (filters.role !== DEFAULT_ROLE) params.set("role", filters.role);
  if (filters.starred) params.set("starred", "1");
  if (filters.view !== "browse") params.set("view", filters.view);
  const search = params.toString();
  return search ? `?${search}` : "";
}

const FILTER_KEYS = new Set([
  "q",
  "cat",
  "types",
  "minConfidence",
  "sort",
  "role",
  "starred",
  "view",
]);

function extraParams() {
  const extras = new URLSearchParams();
  for (const [key, value] of new URLSearchParams(window.location.search)) {
    if (!FILTER_KEYS.has(key)) extras.set(key, value);
  }
  return extras.toString();
}

function composeSearch(filterSearch, extraSearch) {
  if (!filterSearch) return extraSearch ? `?${extraSearch}` : "";
  return extraSearch ? `${filterSearch}&${extraSearch}` : filterSearch;
}

export function setExtraParam(key, value) {
  const params = new URLSearchParams(window.location.search);
  if (value === null || value === undefined || value === "") params.delete(key);
  else params.set(key, value);
  const search = params.toString();
  window.history.replaceState(null, "", `${window.location.pathname}${search ? `?${search}` : ""}`);
}

export function useUrlFilters() {
  const [filters, setFilters] = useState(() => parseFilters(window.location.search));

  useEffect(() => {
    const search = composeSearch(filtersToSearch(filters), extraParams());
    const current = `${window.location.pathname}${window.location.search}`;
    const next = `${window.location.pathname}${search}`;
    if (current === next) return;
    window.history.replaceState(null, "", next);
  }, [filters]);

  useEffect(() => {
    const onPop = () => setFilters(parseFilters(window.location.search));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const patch = useCallback((changes) => {
    setFilters((prev) => ({ ...prev, ...changes }));
  }, []);

  const reset = useCallback(() => {
    setFilters((prev) => ({ ...DEFAULT_FILTERS, role: prev.role, view: prev.view }));
  }, []);

  return { filters, patch, reset };
}

export function shareUrl() {
  return `${window.location.origin}${window.location.pathname}${window.location.search}`;
}
