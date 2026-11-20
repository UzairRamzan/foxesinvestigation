export default function FAQAccordion({ items }) {
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 hover:bg-slate-50">
            <span className="font-medium text-navy">{item.q}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              className="shrink-0 text-slate-400 transition-transform group-open:rotate-45">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <div className="px-5 pb-5 text-slate-700 leading-relaxed">{item.a}</div>
        </details>
      ))}
    </div>
  )
}