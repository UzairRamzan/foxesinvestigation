import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

export default function Cookies() {
  return (
    <>
      <SEO title="Cookie Policy | UK Private Investigations" description="How this site uses cookies and similar technologies." />
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Cookie Policy' }]} />
          <h1 className="h1 mt-4">Cookie Policy</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: [date]</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page prose-lite max-w-3xl">
          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They are used for a variety of purposes, including site functionality and analytics.
          </p>

          <h2>Cookies used on this site</h2>
          <p>
            This site currently uses only strictly necessary cookies, which are required for the site to function. We do not currently use analytics or marketing cookies.
          </p>

          <h2>If analytics are introduced</h2>
          <p>
            If we introduce analytics or other non-essential cookies, we will update this policy and add a compliant consent mechanism under the Privacy and Electronic Communications Regulations (PECR). Non-essential cookies will not be set until you consent.
          </p>

          <h2>Managing cookies</h2>
          <p>
            You can manage or delete cookies through your browser settings. Note that disabling strictly necessary cookies may affect site functionality.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this policy, please contact us at privacy@example.co.uk.
          </p>
        </div>
      </section>
    </>
  )
}