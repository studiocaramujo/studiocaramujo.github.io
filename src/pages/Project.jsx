import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function Project() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)
  if (!p) return <section className="container page"><h1>Projeto não encontrado</h1><Link to="/projetos" className="link">Voltar aos projetos</Link></section>
  const facts = [['Tipo', p.type], ['Ano', p.year], ['Local', p.location], ['Área', p.area]].filter(([, v]) => v)
  const imgs = p.images.length ? p.images : [p.cover]
  return (
    <section className="container page">
      <Link to="/projetos" className="link">← Projetos</Link>
      <h1>{p.title}</h1>
      <dl className="facts">
        {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </dl>
      <p className="lead">{p.description}</p>
      <div className="gallery">
        {imgs.map((src, i) => src ? <img key={i} src={src} alt={`${p.title}, imagem ${i + 1}`} loading="lazy" /> : <div key={i} className="placeholder tall">Foto</div>)}
      </div>
    </section>
  )
}
