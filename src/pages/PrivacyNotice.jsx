import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

export default function PrivacyNotice() {
  return (
    <>
      <SEO title="Privacy Notice | UK Private Investigations" description="How we collect, use and protect personal data under UK GDPR." />
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Privacy Notice' }]} />
          <h1 className="h1 mt-4">Privacy Notice</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: [date]</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page prose-lite max-w-3xl">
          <h2>Who we are</h2>
          <p>
            [Company Name] Ltd ("we", "us") is the data controller for personal data processed in connection with our investigation and litigation-support services. We are registered with the Information Commissioner's Office (ICO Registration No. [ZAXXXXXX]).
          </p>

          <h2>What personal data we collect</h2>
          <ul>
            <li>Client identity and contact details (name, organisation, email, phone).</li>
            <li>Information about your enquiry and the matter you are instructing us on.</li>
            <li>Personal data relating to subjects of investigations, obtained lawfully and limited to what is necessary.</li>
            <li>Technical data relating to your use of this website (see Cookie Policy).</li>
          </ul>

          <h2>Lawful basis</h2>
          <p>
            We rely on the following lawful bases under UK GDPR, as applicable:
          </p>
          <ul>
            <li><strong>Legitimate interests</strong> — for the conduct of lawful investigations and litigation support, balanced against the rights of data subjects (we conduct a Legitimate Interests Assessment).</li>
            <li><strong>Contract</strong> — for performing the engagement we have entered into with you.</li>
            <li><strong>Legal obligation</strong> — where we are required to process data to comply with the law.</li>
            <li><strong>Consent</strong> — where you have given explicit consent (for example, to receive marketing or to process special-category data).</li>
          </ul>

          <h2>Special category and criminal offence data</h2>
          <p>
            Where our work involves special category data (such as health information) or criminal offence data, we do so only where a specific condition under the Data Protection Act 2018 is met, with appropriate safeguards and, where required, an appropriate policy document.
          </p>

          <h2>Retention</h2>
          <p>
            We retain personal data only for as long as necessary for the purposes for which it was collected, to comply with legal obligations, or to establish, exercise or defend legal claims. Retention periods are documented in our Retention &amp; Deletion Policy. Case files are securely destroyed at the end of the retention period.
          </p>

          <h2>Your rights</h2>
          <ul>
            <li>Right of access (Subject Access Request).</li>
            <li>Right to rectification.</li>
            <li>Right to erasure (in certain circumstances).</li>
            <li>Right to restriction of processing.</li>
            <li>Right to object.</li>
            <li>Right to data portability.</li>
            <li>Right to complain to the ICO.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at privacy@example.co.uk. We will respond within one month.
          </p>

          <h2>Data sharing</h2>
          <p>
            We share personal data only where necessary and lawful — for example with instructing solicitors, expert witnesses, or where required by law. All sharing is governed by written agreements and appropriate safeguards.
          </p>

          <h2>International transfers</h2>
          <p>
            Where personal data is transferred outside the UK, we ensure appropriate safeguards are in place (such as the UK International Data Transfer Agreement or Addendum).
          </p>

          <h2>Security</h2>
          <p>
            We maintain appropriate technical and organisational security measures, including encrypted storage, access controls and secure communications. Breaches are managed through a documented incident procedure and, where notifiable, reported to the ICO within 72 hours.
          </p>

          <h2>Contact</h2>
          <p>
            For data protection queries, contact our Data Protection contact at privacy@example.co.uk. You also have the right to complain to the Information Commissioner's Office at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
          </p>
        </div>
      </section>
    </>
  )
}