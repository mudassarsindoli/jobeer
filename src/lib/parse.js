export const ROLES = [
  { id: "senior_engg", label: "Senior Engineer", short: "Engg", term: "senior software engineer" },
  { id: "hr_manager", label: "HR Manager", short: "HR", term: "hr manager" },
  { id: "finance_head", label: "Finance Head", short: "Finance", term: "finance head" },
]

export const ROLE_IDS = ROLES.map((role) => role.id)

export const DEFAULT_ROLE = "senior_engg"

export const ROLE_LABELS = Object.fromEntries(ROLES.map((r) => [r.id, r.label]))

const TYPE_LABELS = {
  mnc: "MNC",
  enterprise: "Enterprise",
  growth_stage: "Growth Stage",
  earlystartup: "Early-stage",
  late_startup: "Late Startup",
  hedge_fund: "Hedge Fund",
  prop_trading: "Prop Trading",
  private_equity: "Private Equity",
}

const SALARY_SPLIT = /[,;]\s*/

export function typeLabel(type) {
  if (!type) return "Unlisted"
  return (
    TYPE_LABELS[type] ??
    type
      .split(/[_\s-]+/)
      .filter(Boolean)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ")
  )
}

export function parseConfidence(raw) {
  const value = Number.parseFloat(String(raw ?? "").replace(/[^0-9.]/g, ""))
  return Number.isFinite(value) ? value : 0
}

export function parseSalary(raw) {
  const text = String(raw ?? "")
  const out = {}
  for (const part of text.split(SALARY_SPLIT)) {
    const [rawKey, rawValue] = part.split(":")
    if (!rawValue) continue
    const key = String(rawKey ?? "").trim()
    if (!key) continue
    const value = Number.parseFloat(String(rawValue).replace(/[^0-9.]/g, ""))
    if (Number.isFinite(value)) out[key] = value
  }
  for (const role of ROLE_IDS) {
    if (!Number.isFinite(out[role])) out[role] = 0
  }
  return out
}

export function parseTags(raw) {
  return String(raw ?? "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
}

export function slugify(name) {
  const slug = String(name ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
  return slug || "company"
}

export function initials(name) {
  const words = String(name ?? "")
    .split(/[\s/&]+/)
    .map((word) => word.replace(/[^A-Za-z0-9]/g, ""))
    .filter(Boolean)
  if (words.length === 0) return "?"
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

export function formatLpa(value) {
  if (!Number.isFinite(value) || value <= 0) return "—"
  return `₹${value % 1 === 0 ? value : value.toFixed(1)}L`
}

export function formatLpaShort(value) {
  if (!Number.isFinite(value) || value <= 0) return "—"
  return `${value % 1 === 0 ? value : value.toFixed(1)}L`
}

export function formatMonthly(value) {
  if (!Number.isFinite(value) || value <= 0) return "—"
  return `₹${(value / 12).toFixed(1)}L/mo`
}

function trimZeros(text) {
  return text.replace(/\.0$/, "");
}

export function formatEmployees(count) {
  const n = Number(count);
  if (!Number.isFinite(n) || n <= 0) return "—";
  if (n >= 10000000) return `${trimZeros((n / 10000000).toFixed(n >= 100000000 ? 0 : 1))}Cr`;
  if (n >= 100000) return `${trimZeros((n / 100000).toFixed(n >= 1000000 ? 0 : 1))}L`;
  if (n >= 1000) return `${trimZeros((n / 1000).toFixed(n >= 10000 ? 0 : 1))}K`;
  return String(n);
}

export function formatConfidence(value) {
  if (!Number.isFinite(value) || value <= 0) return "—"
  return `${Math.round(value)}%`
}

const LOGO_SIZE_PATTERN = /size:(\d+)px/

export function parseLogoWidth(logoSize) {
  const match = LOGO_SIZE_PATTERN.exec(String(logoSize ?? ""))
  if (!match) return 200
  return Math.min(400, Math.max(80, Number(match[1])))
}

export function hostnameOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return ""
  }
}

export function confidenceTone(value) {
  if (value >= 95) return "high"
  if (value >= 90) return "mid"
  return "low"
}
