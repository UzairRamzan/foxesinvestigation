export default function EnquiryForm() {
  return (
    <form
      name="enquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="enquiry" />
      <p className="hidden">
        <label>Do not fill: <input name="bot-field" /></label>
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full name *</label>
          <input id="name" name="name" type="text" required
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
        </div>
        <div>
          <label htmlFor="organisation" className="block text-sm font-medium text-slate-700">Organisation</label>
          <input id="organisation" name="organisation" type="text"
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email *</label>
          <input id="email" name="email" type="email" required
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
          <input id="phone" name="phone" type="tel"
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700">Service of interest</label>
        <select id="service" name="service"
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy">
          <option>General enquiry</option>
          <option>Fraud investigations</option>
          <option>Corporate & commercial</option>
          <option>Due diligence</option>
          <option>Asset tracing</option>
          <option>Property & real estate</option>
          <option>Tenant verification</option>
          <option>Tracing persons & witnesses</option>
          <option>OSINT & digital research</option>
          <option>Surveillance & field</option>
          <option>Litigation support</option>
          <option>Background investigations</option>
          <option>Criminal case support</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">Brief summary *</label>
        <textarea id="message" name="message" rows="4" required
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          placeholder="Please do not include confidential case details. We will arrange a secure channel." />
      </div>

      <div className="rounded-md bg-amber-50 border border-amber-200 p-3 text-xs text-amber-900">
        <strong>Please do not send confidential case details through this form.</strong> Once we verify your enquiry, we will arrange a secure channel for sensitive information.
      </div>

      <label className="flex items-start gap-2 text-sm text-slate-700">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>I consent to my details being used to respond to this enquiry in accordance with the <a href="/privacy-notice" className="text-navy underline">Privacy Notice</a>. *</span>
      </label>

      <button type="submit" className="btn-primary w-full md:w-auto">Submit Enquiry</button>
    </form>
  )
}