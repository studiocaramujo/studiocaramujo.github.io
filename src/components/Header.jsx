import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site.js'

const links = [['/projetos', 'Projetos'], ['/processo', 'Processo'], ['/quem-somos', 'Quem somos'], ['/contato', 'Contato']]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt={`${site.name}, ${site.subtitle}`} width="187" height="40" />
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? 'nav open' : 'nav'}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
