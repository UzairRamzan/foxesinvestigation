import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import EnquiryForm from '../components/EnquiryForm'

export default function Contact() {
  return (
    <>
      <SEO title="Contact | UK Private Investigations" description="Confidential enquiry form and contact details." />
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <h1 className="h1 mt-4">Contact</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            All enquiries are treated as confidential. Please do not send confidential case details through this form — we will arrange a secure channel once your enquiry is verified.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="h2">Send an enquiry</h2>
            <p className="mt-2 text-sm text-slate-500">We aim to respond within one business day.</p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-navy">Email</h3>
              <p className="mt-1 text-slate-700">enquiries@example.co.uk</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-navy">Phone</h3>
              <p className="mt-1 text-slate-700">+44 (0)20 0000 0000</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-navy">Office</h3>
              <p className="mt-1 text-slate-700">
                [Company Name] Ltd<br />
                [Street Address]<br />
                [City]<br />
                [Postcode]<br />
                United Kingdom
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-navy">Registered details</h3>
              <p className="mt-1 text-sm text-slate-600">
                Registered in England &amp; Wales<br />
                Company No. [XXXXXXXX]<br />
                ICO Registration No. [ZAXXXXXX]
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}