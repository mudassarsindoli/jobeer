import { categories } from "../data/data.js";

function slugify(name) {
  const slug = String(name ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "company";
}

function initials(name) {
  const words = String(name ?? "")
    .split(/[\s/&]+/)
    .map((word) => word.replace(/[^A-Za-z0-9]/g, ""))
    .filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function hostnameOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

const seen = new Map();

const all = categories.flatMap((category) =>
  category.companies.map((company) => {
    const base = slugify(company.name);
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);

    return {
      id: count === 1 ? base : `${base}-${count}`,
      name: company.name,
      initials: initials(company.name),
      logo: company.logo ?? "",
      careersUrl: company.careersUrl ?? "",
      domain: hostnameOf(company.careersUrl),
    };
  }),
);

export const companies = all.sort((a, b) => a.name.localeCompare(b.name));
