import { steps } from '../data/process.js'

export default function ProcessSteps({ compact = false }) {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>{s.title} <small className="muted">{s.duration}</small></h3>
            {!compact && <p>{s.text}</p>}
          </div>
        </li>
      ))}
    </ol>
  )
}
