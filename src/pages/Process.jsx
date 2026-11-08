import { Link } from 'react-router-dom'
import ProcessSteps from '../components/ProcessSteps.jsx'

export default function Process() {
  return (
    <section className="container page">
      <h1>Nosso processo</h1>
      <p className="lead">Do briefing à entrega da obra, um caminho claro para você saber sempre qual é o próximo passo.</p>
      <ProcessSteps />
      <Link to="/contato" className="btn">Comece pelo briefing</Link>
    </section>
  )
}
