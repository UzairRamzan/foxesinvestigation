import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <SEO title="Services | UK Private Investigations" description="Fraud, corporate, due diligence, tracing, surveillance, litigation support and more." />
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
          <h1 className="h1 mt-4">Services</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            All engagements begin with a lawful-basis and conflict assessment. We only accept matters we can handle lawfully and without conflict.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>
    </>
  )
}