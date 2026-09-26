import { categoryList, companies, salaryMax, typeList } from "./derive.js";
import { DEFAULT_ROLE, ROLE_IDS } from "./parse.js";

export function median(values) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = sorted.length >> 1;
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

export function percentileOf(sortedValues, value) {
  if (sortedValues.length === 0) return 0;
  let below = 0;
  while (below < sortedValues.length && sortedValues[below] < value) below += 1;
  return Math.round((below / sortedValues.length) * 100);
}

function mean(values) {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function round1(value) {
  return Math.round(value * 10) / 10;
}

function buildDataset(list) {
  const byCategory = new Map();
  const byType = new Map();
  const salaries = { senior_engg: [], hr_manager: [], finance_head: [] };
  const confidences = [];
  const employees = [];

  for (const company of list) {
    const category = byCategory.get(company.categoryId) ?? [];
    category.push(company);
    byCategory.set(company.categoryId, category);

    const type = byType.get(company.type) ?? [];
    type.push(company);
    byType.set(company.type, type);

    for (const role of ROLE_IDS) {
      const value = company.salary[role];
      if (value > 0) salaries[role].push(value);
    }
    if (company.confidence > 0) confidences.push(company.confidence);
    if (company.employees > 0) employees.push(company.employees);
  }

  return { byCategory, byType, salaries, confidences, employees };
}

function salarySummary(values) {
  if (values.length === 0) return { median: 0, mean: 0, min: 0, max: 0 };
  return {
    median: round1(median(values)),
    mean: round1(mean(values)),
    min: Math.min(...values),
    max: Math.max(...values),
  };
}

export function computeStats(list) {
  const source = list && list.length > 0 ? list : companies;
  const { byCategory, byType, salaries, confidences, employees } =
    buildDataset(source);
  const sorted = {};
  for (const role of ROLE_IDS) sorted[role] = [...salaries[role]].sort((a, b) => a - b);

  const categoryStats = categoryList
    .map((category) => {
      const members = byCategory.get(category.id) ?? [];
      const roleStats = {};
      for (const role of ROLE_IDS) {
        roleStats[role] = salarySummary(members.map((c) => c.salary[role]).filter((v) => v > 0));
      }
      return {
        id: category.id,
        label: category.label,
        count: members.length,
        roleStats,
        avgConfidence: round1(mean(members.map((c) => c.confidence))),
      };
    })
    .filter((entry) => entry.count > 0);

  const typeStats = typeList
    .map((type) => {
      const members = byType.get(type.id) ?? [];
      return {
        id: type.id,
        label: type.label,
        count: members.length,
        share: source.length ? members.length / source.length : 0,
      };
    })
    .filter((entry) => entry.count > 0)
    .sort((a, b) => b.count - a.count);

  const roleSummary = {};
  for (const role of ROLE_IDS) roleSummary[role] = salarySummary(salaries[role]);

  const sortedEmployees = [...employees].sort((a, b) => a - b);

  return {
    count: source.length,
    roleSummary,
    categoryStats,
    typeStats,
    sortedSalary: sorted,
    ladder: ROLE_IDS.reduce((acc, role) => {
      acc[role] = [...source]
        .filter((company) => company.salary[role] > 0)
        .sort((a, b) => b.salary[role] - a.salary[role])
        .slice(0, 10);
      return acc;
    }, {}),
    buckets: ROLE_IDS.reduce((acc, role) => {
      acc[role] = buildBuckets(salaries[role], salaryMax[role]);
      return acc;
    }, {}),
    avgConfidence: round1(mean(confidences)),
    medianEmployees: median(sortedEmployees),
    companyPercentile(company) {
      const salaryRank = percentileOf(sorted[DEFAULT_ROLE], company.salary[DEFAULT_ROLE]);
      const employeeRank = percentileOf(sortedEmployees, company.employees);
      const categoryPeers = (byCategory.get(company.categoryId) ?? []).map(
        (peer) => peer.salary[DEFAULT_ROLE],
      );
      const categorySorted = [...categoryPeers].sort((a, b) => a - b);
      return {
        salary: salaryRank,
        employees: employeeRank,
        categorySalary: percentileOf(categorySorted, company.salary[DEFAULT_ROLE]),
        categorySize: (byCategory.get(company.categoryId) ?? []).length,
      };
    },
  };
}

export function buildBuckets(values, max) {
  if (values.length === 0) return [];
  const count = 8;
  const step = Math.max(1, Math.ceil(max / count));
  const buckets = [];
  for (let start = 0; start < max; start += step) {
    const end = start + step;
    buckets.push({
      label: `${start}-${Math.min(end, max)}L`,
      from: start,
      to: Math.min(end, max),
      count: 0,
    });
  }
  for (const value of values) {
    const index = Math.min(buckets.length - 1, Math.floor(value / step));
    buckets[index].count += 1;
  }
  const used = buckets
    .map((bucket, index) => (bucket.count > 0 ? index : -1))
    .filter((index) => index >= 0);
  if (used.length === 0) return [];
  return buckets.slice(used[0], used[used.length - 1] + 1);
}

export function densityOutliers(list, role) {
  return list
    .filter((company) => company.salary[role] > 0 && company.employees > 0)
    .map((company) => ({
      company,
      perThousand: (company.salary[role] / company.employees) * 1000,
    }))
    .filter((entry) => Number.isFinite(entry.perThousand))
    .sort((a, b) => b.perThousand - a.perThousand)
    .slice(0, 8);
}
