import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>{site.tagline}</h1>
          <p className="lead">Architecture and interiors, from the first conversation to the finished building.</p>
          <Link to="/contact" className="btn">Start your project</Link>
        </div>
      </section>
      <section className="container section">
        <div className="section-head"><h2>Selected work</h2><Link to="/portfolio">All projects →</Link></div>
        <div className="grid">{projects.slice(0, 3).map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
      </section>
      <section className="container section">
        <div className="section-head"><h2>How we work</h2><Link to="/process">Details →</Link></div>
        <ProcessSteps compact />
      </section>
    </>
  )
}
