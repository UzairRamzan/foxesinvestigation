import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import WorkflowStepper from '../components/WorkflowStepper'

export default function HowWeWork() {
  return (
    <>
      <SEO title="How We Work | UK Private Investigations" description="Our structured, lawful workflow from enquiry to final report." />
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'How We Work' }]} />
          <h1 className="h1 mt-4">How we work</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            A structured, lawful workflow from first enquiry to final report. Every stage has compliance, conflict and quality controls.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <WorkflowStepper />
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page prose-lite max-w-3xl">
          <h2>What you can expect</h2>
          <ul>
            <li><strong>Confidentiality</strong> — every enquiry is treated as confidential, even if we decline the matter.</li>
            <li><strong>Legal check first</strong> — we will only proceed where a documented lawful basis exists.</li>
            <li><strong>Scoped proposals</strong> — clear scope, deliverables, timelines and cost structure before any work begins.</li>
            <li><strong>Regular communication</strong> — milestone updates throughout the engagement.</li>
            <li><strong>Evidence-grade reporting</strong> — reports that distinguish verified facts, allegations, assessments and unverified leads.</li>
          </ul>

          <h2>What we ask of you</h2>
          <ul>
            <li>Confirmation of your identity and, where relevant, your organisation's authority to instruct us.</li>
            <li>A clear description of the lawful purpose of the engagement.</li>
            <li>A commitment not to ask us to act unlawfully.</li>
            <li>Timely cooperation in providing documents and information within your control.</li>
          </ul>
        </div>
      </section>
    </>
  )
}