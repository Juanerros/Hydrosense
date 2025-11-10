import './App.css'
import Productos from './components/Productos'
import Contacto from './components/Contacto'
import bg_home from './assets/bg.jpg'

export default function App() {
  const scrollTo = (id) => {
    const section = document.getElementById(id)
    if(id == 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">HydroSense</div>
        <nav className="nav">
          <button onClick={() => scrollTo('inicio')}>Inicio</button>
          <button onClick={() => scrollTo('productos')}>Productos</button>
          <button onClick={() => scrollTo('contacto')}>Contacto</button>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-text">
          <h1>Cuidá tus plantas de forma inteligente</h1>
          <p>
            HydroSense es un sistema de riego automático controlado a distancia
            desde tu celular o computadora. Ideal para hogares, viveros y
            amantes de las plantas.
          </p>
        </div>
        <img src={bg_home} alt="Hydrosense" className="hero-image"/>
      </section>

      <section id="productos">
        <Productos />
      </section>

      <section id="contacto">
        <Contacto />
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} HydroSense. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
