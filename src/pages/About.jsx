import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

export default function About() {
  return (
    <>
      <SEO title="About Us | UK Private Investigations" description="Our company, our standards, and the sectors we serve." />
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          <h1 className="h1 mt-4">About the company</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            A UK-based investigation and litigation-support firm built around lawful practice, evidence discipline and confidentiality.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page prose-lite max-w-3xl">
          <h2>Who we are</h2>
          <p>
            We are a private investigation and litigation-support practice operating across England, Wales, Scotland and Northern Ireland. We support solicitors, barristers, corporate legal teams, insurers, landlords and private clients with the factual work required to make informed decisions — always within the boundaries of UK law.
          </p>

          <h2>Our approach</h2>
          <p>
            Our practice is built on three principles: that investigations must be lawful, that evidence must be handled rigorously, and that clients and subjects alike are entitled to confidentiality and fairness. Every engagement begins with a documented assessment of lawful basis and conflict before any investigative activity takes place.
          </p>

          <h2>Standards we work to</h2>
          <ul>
            <li>UK GDPR and Data Protection Act 2018, including ICO guidance</li>
            <li>ABI UK GDPR Code of Conduct for Investigative &amp; Litigation Support Services</li>
            <li>Professional investigative-services standards recognised in the UK</li>
            <li>Human Rights Act 1998, including Article 8 privacy considerations</li>
            <li>Regulation of Investigatory Powers Act 2000 (where surveillance is involved)</li>
            <li>Applicable criminal and civil procedure frameworks</li>
          </ul>

          <h2>Sectors we serve</h2>
          <ul>
            <li>Law firms and barristers</li>
            <li>Corporate legal, HR and compliance teams</li>
            <li>Insurers and insurance claims departments</li>
            <li>Landlords, letting agents and property managers</li>
            <li>Private clients with legitimate legal matters</li>
          </ul>

          <h2>What we do not do</h2>
          <p>
            We do not access phone records, bank records or private communications; we do not carry out surveillance without a documented lawful basis; we do not engage in harassment, unlawfully obtained data, or investigations that cannot be justified under UK law. We decline any matter that cannot meet these standards.
          </p>
        </div>
      </section>
    </>
  )
}