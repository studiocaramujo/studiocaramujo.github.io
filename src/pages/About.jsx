import { site } from '../data/site.js'

export default function About() {
  return (
    <section className="container page">
      <h1>About</h1>
      {site.about.map((t, i) => <p key={i} className="lead">{t}</p>)}
      <h2>Team</h2>
      <div className="grid">
        {site.team.map((m, i) => (
          <div key={i}><div className="placeholder">Photo</div><h3>{m.name}</h3><p className="muted">{m.role}</p></div>
        ))}
      </div>
    </section>
  )
}
