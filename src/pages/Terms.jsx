import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Use | UK Private Investigations" description="Website terms of use." />
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Terms of Use' }]} />
          <h1 className="h1 mt-4">Terms of Use</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: [date]</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page prose-lite max-w-3xl">
          <h2>1. About these terms</h2>
          <p>
            These terms govern your use of this website. By using the site you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <h2>2. Information on this site</h2>
          <p>
            The content of this site is for general information only. It does not constitute legal advice and does not create a client relationship. You should seek legal advice before acting on any information on this site.
          </p>

          <h2>3. Enquiries</h2>
          <p>
            Submission of an enquiry does not create an engagement. We accept matters only after completing our lawful-basis, conflict and client-verification checks.
          </p>

          <h2>4. No unlawful instructions</h2>
          <p>
            You agree not to use this site or our services to solicit any activity that would be unlawful, including unlawful surveillance, harassment or access to data that cannot lawfully be obtained.
          </p>

          <h2>5. Intellectual property</h2>
          <p>
            All content on this site is owned by us or licensed to us. You may view and print content for personal reference only. Reproduction for commercial purposes is prohibited without written consent.
          </p>

          <h2>6. Liability</h2>
          <p>
            We take care to ensure the accuracy of the information on this site, but we make no representations or warranties of any kind. To the fullest extent permitted by law, we exclude liability for any loss arising from use of the site.
          </p>

          <h2>7. Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction over any dispute arising from your use of this site.
          </p>

          <h2>8. Contact</h2>
          <p>
            For questions about these terms, please contact us at enquiries@example.co.uk.
          </p>
        </div>
      </section>
    </>
  )
}