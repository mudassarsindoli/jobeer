export function buildPortalUrl(template, term = "") {
  if (!template || !template.includes("{query}")) return template;
  return template.replace(/\{query\}/g, encodeURIComponent(term.trim()));
}
