const steps = [
  { n: 1, title: 'Enquiry', desc: 'Initial confidential discussion of your needs.' },
  { n: 2, title: 'Client Verification', desc: 'KYC checks and identity confirmation.' },
  { n: 3, title: 'Conflict Check', desc: 'Verification that no conflict of interest exists.' },
  { n: 4, title: 'Legal & Legitimate Purpose', desc: 'Assessment of lawful basis and scope.' },
  { n: 5, title: 'Case Acceptance', desc: 'Formal acceptance decision and engagement.' },
  { n: 6, title: 'Proposal & Retainer', desc: 'Fixed-scope proposal and engagement terms.' },
  { n: 7, title: 'Investigation', desc: 'Planned fieldwork and evidence gathering.' },
  { n: 8, title: 'Evidence Management', desc: 'Chain-of-custody and secure retention.' },
  { n: 9, title: 'Quality Review', desc: 'Supervisor review of evidence and analysis.' },
  { n: 10, title: 'Final Report', desc: 'Evidence-grade reporting and delivery.' },
]

export default function WorkflowStepper() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {steps.map(s => (
        <div key={s.n} className="flex gap-4 rounded-lg border border-slate-200 p-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-white text-sm font-semibold">
            {s.n}
          </div>
          <div>
            <h4 className="font-semibold text-navy">{s.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}