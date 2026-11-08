import { Link } from 'react-router-dom'

export default function ProjectCard({ p }) {
  return (
    <Link to={`/projetos/${p.slug}`} className="card">
      <div className="card-img">
        {p.cover ? <img src={p.cover} alt={p.title} loading="lazy" /> : <div className="placeholder">Foto</div>}
      </div>
      <h3>{p.title}</h3>
      <p className="muted">{[p.type, p.year].filter(Boolean).join(' · ')}</p>
    </Link>
  )
}
