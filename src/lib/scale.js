import { employeeExtent, salaryMax } from "./derive.js";

const LOG_MIN = Math.log10(Math.max(10, employeeExtent.min));
const LOG_SPAN = Math.log10(Math.max(11, employeeExtent.max)) - LOG_MIN;

export function sizeRatio(employees) {
  const ratio = (Math.log10(Math.max(10, employees)) - LOG_MIN) / LOG_SPAN;
  return Math.max(0, Math.min(1, Number.isFinite(ratio) ? ratio : 0));
}

export function sizeDotStyle(employees) {
  const px = 6 + sizeRatio(employees) * 14;
  return { width: `${px}px`, height: `${px}px` };
}

export function salaryPct(value, role, floor = 2) {
  const max = salaryMax[role] ?? 0;
  if (max <= 0) return 0;
  return Math.max(floor, Math.round((value / max) * 100));
}
