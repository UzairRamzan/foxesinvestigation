const badges = [
  'UK GDPR Compliant',
  'DPA 2018',
  'ICO Registered',
  'ABI Code Aligned',
  'Confidential by Default',
  'Solicitor-Ready Reporting',
]

export default function TrustBadges() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-6">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {badges.map(b => (
          <div key={b} className="flex items-center gap-2 text-sm text-slate-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent">
              <path d="M5 13l4 4L19 7" />
            </svg>
            {b}
          </div>
        ))}
      </div>
    </section>
  )
}