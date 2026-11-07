import { Link } from 'react-router-dom'
import ProcessSteps from '../components/ProcessSteps.jsx'

export default function Process() {
  return (
    <section className="container page">
      <h1>Our process</h1>
      <p className="lead">A clear path from briefing to execution, so you always know what comes next.</p>
      <ProcessSteps />
      <Link to="/contact" className="btn">Begin with a briefing</Link>
    </section>
  )
}
