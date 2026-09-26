const DEFAULT_TERM = 'senior software engineer'

export function buildPortalUrl(template, term = '') {
  if (!template || !template.includes('{query}')) return template
  const value = (term ?? '').trim() || DEFAULT_TERM
  return template.replace(/\{query\}/g, encodeURIComponent(value))
}