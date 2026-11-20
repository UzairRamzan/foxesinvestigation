import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-navy text-white font-bold">PI</span>
            <span className="font-semibold text-navy">Investigations &amp; Litigation Support</span>
          </div>
          <p className="text-sm text-slate-600">
            Lawful, discreet investigation services across the United Kingdom. Supporting solicitors, corporates, insurers and private clients.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-navy mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link to="/services/fraud" className="hover:text-navy">Fraud Investigations</Link></li>
            <li><Link to="/services/due-diligence" className="hover:text-navy">Due Diligence</Link></li>
            <li><Link to="/services/litigation" className="hover:text-navy">Litigation Support</Link></li>
            <li><Link to="/services/surveillance" className="hover:text-navy">Surveillance</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-navy mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link to="/about" className="hover:text-navy">About Us</Link></li>
            <li><Link to="/how-we-work" className="hover:text-navy">How We Work</Link></li>
            <li><Link to="/compliance" className="hover:text-navy">Compliance</Link></li>
            <li><Link to="/contact" className="hover:text-navy">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-navy mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link to="/privacy-notice" className="hover:text-navy">Privacy Notice</Link></li>
            <li><Link to="/terms" className="hover:text-navy">Terms of Use</Link></li>
            <li><Link to="/cookies" className="hover:text-navy">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-2 py-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} [Company Name] Ltd. Registered in England &amp; Wales. All rights reserved.</p>
          <p>ICO Registration No. [ZAXXXXXX] · UK GDPR · DPA 2018 compliant</p>
        </div>
      </div>
    </footer>
  )
}