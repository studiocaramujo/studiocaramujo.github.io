import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Project from './pages/Project.jsx'
import Process from './pages/Process.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Portfolio />} />
          <Route path="/projetos/:slug" element={<Project />} />
          <Route path="/processo" element={<Process />} />
          <Route path="/quem-somos" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<section className="container page"><h1>Página não encontrada</h1></section>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
