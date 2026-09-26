import { ROLE_LABELS, formatConfidence, formatEmployees, formatLpa } from "./parse.js";

function escapeCsv(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

const CSV_COLUMNS = [
  "Company",
  "Category",
  "Type",
  "Confidence",
  "Employees",
  "Specialization",
  "Senior Engineer (LPA)",
  "HR Manager (LPA)",
  "Finance Head (LPA)",
  "Careers URL",
];

export function toCsv(list, buildUrl) {
  const header = CSV_COLUMNS.join(",");
  const rows = list.map((company) =>
    [
      company.name,
      company.categoryLabel,
      company.typeLabel,
      formatConfidence(company.confidence),
      company.employees,
      company.tags.join(" | "),
      company.salary.senior_engg,
      company.salary.hr_manager,
      company.salary.finance_head,
      buildUrl(company),
    ]
      .map(escapeCsv)
      .join(","),
  );
  return [header, ...rows].join("\n");
}

export function toMarkdown(list, buildUrl, role) {
  const lines = [
    `# Jatrix shortlist — ${ROLE_LABELS[role] ?? role}`,
    "",
    ...list.map(
      (company) =>
        `- **${company.name}** (${company.categoryLabel} · ${company.typeLabel}) — ` +
        `${formatLpa(company.salary[role])} · ${formatEmployees(company.employees)} staff · ` +
        `confidence ${formatConfidence(company.confidence)} — ${buildUrl(company)}`,
    ),
  ];
  return lines.join("\n");
}

export function toPlainLinks(list, buildUrl) {
  return list.map(buildUrl).join("\n");
}

export function downloadFile(filename, content, mime = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function copyText(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  } catch {
    return false;
  }
}

export function stamp() {
  return new Date().toISOString().slice(0, 10);
}
