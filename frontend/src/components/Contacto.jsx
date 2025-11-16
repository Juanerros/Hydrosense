import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contacto() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);

    // Simula el envío
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);

      // Oculta el modal luego de 2.5s
      setTimeout(() => {
        setEnviado(false);
      }, 2500);
    }, 2000);
  };

  return (
    <section className="contacto-section fade-section visible">
      <h2 className="contacto-title">Contacto</h2>
      <p className="contacto-subtitle">
        ¿Querés implementar <strong>HydroSense</strong> en tu espacio? Completá
        el formulario o comunicate con nuestro equipo técnico para recibir
        asesoramiento personalizado.
      </p>

      <div className="contacto-container">
        <form
          className={`contacto-form ${enviando ? "sending" : ""}`}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label>Nombre completo</label>
            <input type="text" placeholder="Ej: Juan Pérez" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="tuemail@ejemplo.com" required />
          </div>

          <div className="form-group">
            <label>Consulta</label>
            <textarea
              placeholder="Contanos en qué podemos ayudarte..."
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" disabled={enviando || enviado}>
            {enviando ? "Enviando..." : enviado ? "¡Enviado!" : "Enviar mensaje"}
          </button>

          {enviado && (
            <div className="mensaje-exito">
              <FaCheckCircle className="icono-check" />
              <p>Tu mensaje fue enviado con éxito 🎉</p>
            </div>
          )}
        </form>

        <div className="contacto-info">
          <h3>Contactanos en:</h3>

          <div className="info-item">
            <FaWhatsapp className="icon-inline" />
            <p>
              <a href="https://wa.me/5491123456789" target="_blank">
                +54 9 11 2345 6789
              </a>
            </p>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon-inline" />
            <p>
              <a href="mailto:info@hydrosense.com">info@hydrosense.com</a>
            </p>
          </div>

          <hr className="divider" />

          <p className="redes-titulo">Seguinos</p>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/Hydrosenseofficial"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/hydrosense" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.tiktok.com/@hydrosense0" target="_blank">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Modal con spinner centrado */}
      {(enviando || enviado) && (
        <div className="modal-overlay">
          <div className={`modal-envio ${enviado ? "success" : ""}`}>
            {enviando && <div className="spinner"></div>}
            <p>{enviando ? "Enviando..." : "¡Enviado correctamente!"}</p>
          </div>
        </div>
      )}
    </section>
  );
}
