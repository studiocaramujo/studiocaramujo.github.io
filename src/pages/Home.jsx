import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import ProcessSteps from '../components/ProcessSteps.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src="/images/hero.jpg" alt="Living integrado projetado pelo Studio Caramujo" />
        <div className="hero-text">
          <h1>{site.tagline}</h1>
          <Link to="/contato" className="btn light">Seu projeto Caramujo</Link>
        </div>
      </section>
      <section className="container section">
        {site.categories.map((c, i) => (
          <article key={c.type} className={i % 2 ? 'feature reverse' : 'feature'}>
            <div>
              <h2>{c.title}</h2>
              <p>{c.text}</p>
              <Link to={`/projetos?tipo=${c.type}`} className="link">Ver projetos</Link>
            </div>
            <img src={c.image} alt={c.title} loading="lazy" />
          </article>
        ))}
        <Link to="/projetos" className="btn outline block">Veja mais</Link>
      </section>
      <section className="container section">
        <div className="section-head"><h2>Como trabalhamos</h2><Link to="/processo" className="link">Conheça o processo</Link></div>
        <ProcessSteps compact />
      </section>
    </>
  )
}
