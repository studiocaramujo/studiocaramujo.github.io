import { useState } from 'react'
import { site } from '../data/site.js'

const projectTypes = ['New house', 'Renovation', 'Interiors', 'Commercial', 'Other']

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (!site.formEndpoint) {
      const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('New project briefing')}&body=${encodeURIComponent(body)}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="container page narrow">
      <h1>Start with a briefing</h1>
      <p className="lead">Tell us about your project. We will reply to arrange a first conversation.</p>
      {status === 'sent' ? <p className="ok">Thank you — we received your briefing and will be in touch.</p> : (
        <form onSubmit={onSubmit}>
          <label>Name<input name="name" required /></label>
          <label>Email<input name="email" type="email" required /></label>
          <label>Phone<input name="phone" type="tel" /></label>
          <label>Project type
            <select name="project_type">{projectTypes.map((t) => <option key={t}>{t}</option>)}</select>
          </label>
          <label>Location of the site<input name="location" /></label>
          <label>Approximate area (m²)<input name="area" inputMode="numeric" /></label>
          <label>Estimated budget<input name="budget" /></label>
          <label>Desired timeline<input name="timeline" placeholder="e.g. start within 6 months" /></label>
          <label>Tell us about the project<textarea name="message" rows="6" required /></label>
          <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send briefing'}</button>
          {status === 'error' && <p className="err">Something went wrong. Please email us at {site.email}.</p>}
        </form>
      )}
      <p className="muted">{site.email} · {site.phone} · {site.address}</p>
    </section>
  )
}
