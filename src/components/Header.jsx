import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site.js'

const links = [['/portfolio', 'Portfolio'], ['/process', 'Process'], ['/about', 'About'], ['/contact', 'Contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt="" width="32" height="32" />
          <span>{site.name}</span>
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
