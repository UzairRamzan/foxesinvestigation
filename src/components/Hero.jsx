import { Link } from 'react-router-dom'

export default function Hero({ title, subtitle, primaryCta = { label: 'Request Consultation', to: '/contact' }, secondaryCta }) {
  return (
    <section className="bg-navy text-white">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-6 text-lg text-slate-200">{subtitle}</p>}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={primaryCta.to} className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-medium text-navy hover:bg-accent-light transition-colors">
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link to={secondaryCta.to} className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}