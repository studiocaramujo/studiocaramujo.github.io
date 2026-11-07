import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function Project() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)
  if (!p) return <section className="container page"><h1>Project not found</h1><Link to="/portfolio">← Portfolio</Link></section>
  const imgs = p.images.length ? p.images : [p.cover]
  return (
    <section className="container page">
      <Link to="/portfolio">← Portfolio</Link>
      <h1>{p.title}</h1>
      <dl className="facts">
        <div><dt>Type</dt><dd>{p.type}</dd></div>
        <div><dt>Year</dt><dd>{p.year}</dd></div>
        <div><dt>Location</dt><dd>{p.location}</dd></div>
        <div><dt>Area</dt><dd>{p.area}</dd></div>
      </dl>
      <p className="lead">{p.description}</p>
      <div className="gallery">
        {imgs.map((src, i) => src ? <img key={i} src={src} alt={`${p.title} ${i + 1}`} loading="lazy" /> : <div key={i} className="placeholder tall">Photo</div>)}
      </div>
    </section>
  )
}
