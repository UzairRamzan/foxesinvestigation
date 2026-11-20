import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="card group flex flex-col">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-navy/5 text-navy">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <h3 className="h3 group-hover:text-navy-light transition-colors">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-600 flex-1">{service.short}</p>
      <span className="mt-4 text-sm font-medium text-navy">Learn more →</span>
    </Link>
  )
}