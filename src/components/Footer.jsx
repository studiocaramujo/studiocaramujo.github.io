import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span><a href={`mailto:${site.email}`}>{site.email}</a> · <a href={site.instagram}>Instagram</a></span>
      </div>
    </footer>
  )
}
