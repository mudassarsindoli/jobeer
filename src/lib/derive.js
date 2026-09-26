import { categories } from "../data/data.js";
import {
  ROLE_IDS,
  hostnameOf,
  initials,
  parseConfidence,
  parseLogoWidth,
  parseSalary,
  parseTags,
  slugify,
  typeLabel,
} from "./parse.js";

function deriveCompany(company, category) {
  const id = slugify(company.name);
  const salary = parseSalary(company.average_salary);
  return {
    id,
    name: company.name,
    initials: initials(company.name),
    categoryId: category.id,
    categoryLabel: category.label,
    type: company.type ?? "",
    typeLabel: typeLabel(company.type),
    confidence: parseConfidence(company.confidence_score_to_join),
    employees: Number(company.approx_employee_count) || 0,
    tags: parseTags(company.specialized_in),
    specialization: company.specialized_in ?? "",
    salary,
    salaryRaw: company.average_salary ?? "",
    logo: company.logo ?? "",
    logoWidth: parseLogoWidth(company.logoSize),
    careersUrl: company.careersUrl ?? "",
    portal: hostnameOf(company.careersUrl),
  };
}

const all = categories.flatMap((category) =>
  category.companies.map((company) => deriveCompany(company, category)),
);

const byId = new Map();
for (const company of all) {
  byId.set(company.id, byId.has(company.id) ? { ...company, id: `${company.id}-2` } : company);
}

export const companies = [...byId.values()];

export const companiesById = new Map(companies.map((company) => [company.id, company]));

export const categoryList = categories.map((category) => ({
  id: category.id,
  label: category.label,
}));

export const typeList = (() => {
  const counts = new Map();
  for (const company of companies) {
    counts.set(company.type, (counts.get(company.type) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([id, count]) => ({ id, label: typeLabel(id), count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
})();

export const employeeExtent = companies.reduce(
  (acc, company) => {
    if (company.employees < acc.min) acc.min = company.employees;
    if (company.employees > acc.max) acc.max = company.employees;
    return acc;
  },
  { min: Infinity, max: 0 },
);

export const confidenceExtent = companies.reduce(
  (acc, company) => {
    if (company.confidence < acc.min) acc.min = company.confidence;
    if (company.confidence > acc.max) acc.max = company.confidence;
    return acc;
  },
  { min: Infinity, max: 0 },
);

export const salaryMax = ROLE_IDS.reduce((acc, role) => {
  acc[role] = companies.reduce(
    (max, company) => (company.salary[role] > max ? company.salary[role] : max),
    0,
  );
  return acc;
}, {});

export function companyById(id) {
  return companiesById.get(id) ?? null;
}

export function searchIndexFor(company) {
  return [
    company.name,
    company.categoryLabel,
    company.typeLabel,
    company.type,
    company.tags.join(" "),
    company.portal,
  ]
    .join(" ")
    .toLowerCase();
}
