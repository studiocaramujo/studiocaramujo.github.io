import { useState } from 'react'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Portfolio() {
  const types = ['All', ...new Set(projects.map((p) => p.type))]
  const [type, setType] = useState('All')
  const list = type === 'All' ? projects : projects.filter((p) => p.type === type)
  return (
    <section className="container page">
      <h1>Portfolio</h1>
      <div className="filters">
        {types.map((t) => (
          <button key={t} className={t === type ? 'chip active' : 'chip'} onClick={() => setType(t)}>{t}</button>
        ))}
      </div>
      <div className="grid">{list.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
    </section>
  )
}
