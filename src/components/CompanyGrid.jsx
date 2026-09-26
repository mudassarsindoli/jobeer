import { useMemo } from 'react'
import CompanyCard from './CompanyCard.jsx'

export default function CompanyGrid({
  companies,
  role,
  starredSet,
  stats,
  buildUrl,
  onOpen,
  onPreview,
  onCopy,
  onToggleStar,
}) {
  const percentiles = useMemo(() => {
    const map = new Map()
    for (const company of companies) {
      map.set(company.id, stats.companyPercentile(company).salary)
    }
    return map
  }, [companies, stats])

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {companies.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
          role={role}
          starred={starredSet.has(company.id)}
          percentile={percentiles.get(company.id) ?? 0}
          buildUrl={buildUrl}
          onOpen={onOpen}
          onPreview={onPreview}
          onCopy={onCopy}
          onToggleStar={onToggleStar}
        />
      ))}
    </ul>
  )
}
