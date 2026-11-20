import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import { services } from '../data/services'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)
  if (!service) return <NotFound />

  return (
    <>
      <SEO title={`${service.title} | UK Private Investigations`} description={service.short} />

      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-page py-12">
          <Breadcrumbs items={[
            { label: 'Home', to: '/' },
            { label: 'Services', to: '/services' },
            { label: service.title },
          ]} />
          <h1 className="h1 mt-4">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-slate-600">{service.short}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page prose-lite max-w-3xl">
          <h2>What we do</h2>
          <p>{service.overview}</p>

          <h2>Typical scenarios</h2>
          <ul>
            {service.scenarios.map((s, i) => <li key={i}>{s}</li>)}
          </ul>

          <h2>What we deliver</h2>
          <ul>
            {service.deliverables.map((d, i) => <li key={i}>{d}</li>)}
          </ul>

          <h2>Legal basis</h2>
          <p>
            Every {service.title.toLowerCase()} engagement is preceded by a documented assessment of lawful basis, legitimate purpose and conflict of interest. We act only where we can do so lawfully under UK law, including UK GDPR, the Data Protection Act 2018 and applicable procedure.
          </p>

          <div className="mt-10 rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-navy">Discuss this service</h3>
            <p className="mt-2 text-slate-600">All enquiries are confidential. We will arrange a secure channel once your enquiry is verified.</p>
            <Link to="/contact" className="btn-primary mt-4">Request a consultation</Link>
          </div>
        </div>
      </section>
    </>
  )
}