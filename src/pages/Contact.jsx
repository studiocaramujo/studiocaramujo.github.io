import { useState } from 'react'
import { site } from '../data/site.js'

const projectTypes = ['Residencial', 'Comercial', 'Corporativo', 'Reforma', 'Outro']

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (!site.formEndpoint) {
      const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Briefing de novo projeto')}&body=${encodeURIComponent(body)}`
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
    <section className="container page contact">
      <div>
        <h1>Fale conosco</h1>
        <p className="lead">Conte um pouco sobre o seu projeto. Retornamos para marcar uma primeira conversa.</p>
        <ul className="contact-list">
          <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><a href={site.whatsapp} target="_blank" rel="noreferrer">{site.phone}</a></li>
          <li><a href={site.instagram} target="_blank" rel="noreferrer">{site.instagramHandle}</a></li>
          <li>{site.city}</li>
        </ul>
        <a className="btn outline" href={site.budgetFormUrl} target="_blank" rel="noreferrer">Solicite um orçamento</a>
      </div>
      {status === 'sent' ? <p className="ok">Obrigada! Recebemos seu briefing e entraremos em contato.</p> : (
        <form onSubmit={onSubmit}>
          <label>Nome<input name="nome" required /></label>
          <label>E-mail<input name="email" type="email" required /></label>
          <label>Telefone / WhatsApp<input name="telefone" type="tel" /></label>
          <label>Tipo de projeto
            <select name="tipo">{projectTypes.map((t) => <option key={t}>{t}</option>)}</select>
          </label>
          <label>Local do imóvel<input name="local" /></label>
          <label>Área aproximada (m²)<input name="area" inputMode="numeric" /></label>
          <label>Investimento previsto<input name="investimento" /></label>
          <label>Prazo desejado<input name="prazo" placeholder="ex.: iniciar nos próximos 6 meses" /></label>
          <label>Conte sobre o projeto<textarea name="mensagem" rows="6" required /></label>
          <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Enviar briefing'}</button>
          {status === 'error' && <p className="err">Não foi possível enviar. Escreva para {site.email}.</p>}
        </form>
      )}
    </section>
  )
}
