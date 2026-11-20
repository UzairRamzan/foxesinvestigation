import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/compliance', label: 'Compliance' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-navy text-white font-bold">PI</span>
          <span className="font-semibold text-navy">Investigations &amp; Litigation Support</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-navy' : 'text-slate-600 hover:text-navy'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary text-sm px-4 py-2">Request Consultation</Link>
        </nav>

        <button
          className="lg:hidden p-2 text-slate-700"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="container-page flex flex-col py-4 gap-2">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded px-2 py-2 text-sm font-medium ${isActive ? 'bg-slate-100 text-navy' : 'text-slate-700'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 text-sm">Request Consultation</Link>
          </nav>
        </div>
      )}
    </header>
  )
}