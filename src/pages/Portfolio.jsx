import { useSearchParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

const ALL = 'Todos'

export default function Portfolio() {
  const [params, setParams] = useSearchParams()
  const types = [ALL, ...new Set(projects.map((p) => p.type))]
  const type = types.includes(params.get('tipo')) ? params.get('tipo') : ALL
  const list = type === ALL ? projects : projects.filter((p) => p.type === type)
  return (
    <section className="container page">
      <h1>Projetos</h1>
      <div className="filters">
        {types.map((t) => (
          <button key={t} className={t === type ? 'chip active' : 'chip'} onClick={() => setParams(t === ALL ? {} : { tipo: t })}>{t}</button>
        ))}
      </div>
      <div className="grid">{list.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
    </section>
  )
}
