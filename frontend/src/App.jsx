import { useEffect } from "react";
import "./App.css";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";
import bg_home from "./assets/bg.jpg";
import AboutUs from "./components/AboutUs";

export default function App() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (id == 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".fade-section")
      .forEach((el) => observer.observe(el));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="app">
      <header className="header fade-section fade-delay-1">
        <div className="logo" onClick={() => scrollTo("inicio")}>HydroSense</div>
        <nav className="nav">
          <button onClick={() => scrollTo("inicio")}>Inicio</button>
          <button onClick={() => scrollTo("quienes-somos")}>
            Quiénes Somos
          </button>
          <button onClick={() => scrollTo("productos")}>Productos</button>
          <button onClick={() => scrollTo("contacto")}>Contacto</button>
        </nav>
      </header>

      <section id="inicio" className="hero fade-section fade-delay-1">
        <div className="hero-text">
          <h1>Riego inteligente, naturaleza conectada</h1>
          <p>
            HydroSense combina innovación tecnológica con cuidado ambiental.
            Nuestros sistemas automatizan el riego, optimizan el uso del agua y
            garantizan el bienestar de tus plantas estés donde estés.
          </p>
          <button className="btn-primary" onClick={() => scrollTo("productos")}>
            Conocé nuestros productos
          </button>
        </div>
        <img src={bg_home} alt="Hydrosense" className="hero-image" />
      </section>

      <section id="quienes-somos" className="fade-section fade-delay-2">
        <AboutUs />
      </section>

      <section id="productos" className="fade-section fade-delay-3">
        <Productos />
      </section>

      {/* 👇 Contacto maneja su propio modal */}
      <section id="contacto" className="fade-section fade-delay-4">
        <Contacto />
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} HydroSense. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
