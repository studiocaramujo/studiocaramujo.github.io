import { site } from '../data/site.js'
import Rich from '../components/Rich.jsx'

export default function About() {
  const a = site.architect
  return (
    <section className="container page">
      <h1>Quem somos</h1>
      <div className="about">
        <div>
          {site.about.map((t, i) => <p key={i}><Rich text={t} /></p>)}
          <h2>Prazer, {a.name}</h2>
          <p>{a.bio}</p>
        </div>
        <img src={a.photo} alt={`${a.name}, ${a.role.toLowerCase()}`} width="434" height="600" />
      </div>
    </section>
  )
}
