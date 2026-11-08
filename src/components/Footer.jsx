import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <img src="/logo.png" alt={site.name} width="150" height="32" />
          <p>{site.city}</p>
        </div>
        <ul className="footer-links">
          <li><a href={site.instagram} target="_blank" rel="noreferrer">{site.instagramHandle}</a></li>
          <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><a href={site.whatsapp} target="_blank" rel="noreferrer">{site.phone}</a></li>
        </ul>
      </div>
      <div className="container footer-copy">© {new Date().getFullYear()} {site.name}</div>
    </footer>
  )
}
