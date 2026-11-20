import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import FAQAccordion from '../components/FAQAccordion'
import { faqs } from '../data/faqs'

export default function FAQ() {
  return (
    <>
      <SEO title="FAQ | UK Private Investigations" description="Frequently asked questions about our investigation services." />
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]} />
          <h1 className="h1 mt-4">Frequently asked questions</h1>
        </div>
      </section>
      <section className="section">
        <div className="container-page max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  )
}