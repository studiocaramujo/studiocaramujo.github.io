import { Link } from 'react-router-dom'

export default function ProjectCard({ p }) {
  return (
    <Link to={`/portfolio/${p.slug}`} className="card">
      <div className="card-img">
        {p.cover ? <img src={p.cover} alt={p.title} loading="lazy" /> : <div className="placeholder">Photo</div>}
      </div>
      <h3>{p.title}</h3>
      <p className="muted">{p.type} · {p.year}</p>
    </Link>
  )
}
