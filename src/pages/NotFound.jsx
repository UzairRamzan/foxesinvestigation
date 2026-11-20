import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you were looking for could not be found." />
      <section className="section">
        <div className="container-page max-w-xl text-center py-20">
          <h1 className="h1">Page not found</h1>
          <p className="mt-4 text-slate-600">The page you were looking for does not exist or has been moved.</p>
          <Link to="/" className="btn-primary mt-8">Return to home</Link>
        </div>
      </section>
    </>
  )
}