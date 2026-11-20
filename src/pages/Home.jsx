import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import ServiceCard from '../components/ServiceCard'
import WorkflowStepper from '../components/WorkflowStepper'
import { services } from '../data/services'

export default function Home() {
  return (
    <>
      <SEO
        title="UK Private Investigation & Litigation Support"
        description="Discreet, lawful private investigation and litigation-support services across the United Kingdom. UK GDPR compliant. Evidence-grade reporting."
      />

      <Hero
        title="Discreet, lawful investigation and litigation support across the UK."
        subtitle="Supporting solicitors, corporates, insurers and private clients with evidence-grade investigations — always within the boundaries of UK law."
        secondaryCta={{ label: 'How We Work', to: '/how-we-work' }}
      />

      <TrustBadges />

      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="h2">Our services</h2>
            <p className="mt-4 text-slate-600">
              Every engagement begins with a documented lawful-basis and conflict assessment. We only accept matters where we can act lawfully and without conflict.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
          <div className="mt-10">
            <Link to="/services" className="btn-secondary">View all services</Link>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="h2">How we work</h2>
            <p className="mt-4 text-slate-600">
              A structured, lawful workflow from first enquiry to final report — with compliance, conflict and quality checks built in at every stage.
            </p>
          </div>
          <div className="mt-10">
            <WorkflowStepper />
          </div>
          <div className="mt-8">
            <Link to="/how-we-work" className="btn-primary">Read our full process</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="h2">Why us</h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: 'Lawful by design', d: 'Every engagement begins with a documented lawful-basis and legitimate-purpose assessment.' },
              { t: 'Evidence-grade reporting', d: 'Reports distinguish verified facts, allegations, assessments and unverified leads — structured for legal use.' },
              { t: 'Regulated data handling', d: 'UK GDPR and DPA 2018 compliant. ICO registered. Encrypted systems with role-based access.' },
              { t: 'Solicitor-ready output', d: 'Reporting formats familiar to legal teams — chronologies, evidence schedules, source registers.' },
            ].map(f => (
              <div key={f.t}>
                <h3 className="h3">{f.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Discuss a case in confidence</h2>
          <p className="mt-4 text-slate-200">
            All enquiries are treated as confidential. Initial consultations can be arranged without disclosing sensitive case details.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 font-medium text-navy hover:bg-accent-light transition-colors">
              Request a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}