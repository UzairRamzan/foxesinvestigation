import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

export default function Compliance() {
  return (
    <>
      <SEO title="Compliance | UK Private Investigations" description="Our commitment to UK GDPR, DPA 2018, ICO guidance and professional investigation standards." />
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Compliance' }]} />
          <h1 className="h1 mt-4">Legal framework &amp; compliance</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Our practice is structured around UK law, UK GDPR and recognised professional standards for investigation and litigation support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page prose-lite max-w-3xl">
          <h2>Data protection</h2>
          <p>
            We are registered with the Information Commissioner's Office as a data controller and operate in line with UK GDPR, the Data Protection Act 2018 and ICO guidance. Before every engagement we conduct a documented lawful-basis and legitimate-interest assessment. Where higher-risk processing is involved, we carry out a Data Protection Impact Assessment.
          </p>

          <h2>Professional standards</h2>
          <p>
            Our work is aligned with the ABI UK GDPR Code of Conduct for Investigative &amp; Litigation Support Services and recognised UK investigative-services standards. All investigators are bound by our Code of Conduct, confidentiality policy and professional ethics standards.
          </p>

          <h2>Investigative boundaries</h2>
          <p>
            Our investigators operate within the limits of the Regulation of Investigatory Powers Act 2000, the Human Rights Act 1998, the Data Protection Act 2018 and applicable criminal and civil procedure. We do not access records we have no lawful means to access. We do not undertake surveillance without a documented lawful basis.
          </p>

          <h2>Confidentiality &amp; information security</h2>
          <p>
            Client and case data is stored on encrypted systems with role-based access. Communications use secure channels. Contractors and staff are bound by written confidentiality agreements. We maintain data-breach procedures and a breach register, and we apply the 72-hour ICO notification standard where a notifiable breach occurs.
          </p>

          <h2>Anti-bribery &amp; ethics</h2>
          <p>
            We maintain an anti-bribery policy, a conflict-of-interest policy and an investigator ethics policy. We decline engagements that would require bribery, harassment, unlawful surveillance or the use of unlawfully obtained data.
          </p>

          <h2>Complaints</h2>
          <p>
            We take complaints seriously. If you are dissatisfied with any aspect of our service, please contact us in writing. We will acknowledge your complaint promptly and respond substantively within a reasonable period. Where your complaint concerns data protection, you also have the right to complain to the Information Commissioner's Office.
          </p>

          <h2>Regulatory status</h2>
          <p>
            Private investigation in the UK is currently not subject to statutory licensing. We remain transparent about this and rely on recognised professional standards, data-protection compliance and the quality of our evidenced reporting.
          </p>
        </div>
      </section>
    </>
  )
}