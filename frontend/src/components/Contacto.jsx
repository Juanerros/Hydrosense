import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="contacto-section">
      <h2 className="contacto-title">Contacto</h2>
      <p className="contacto-subtitle">
        Completá el formulario o comunicate con nosotros a través de nuestros medios oficiales.
      </p>

      <div className="contacto-container">
        <form className="contacto-form">
          <div className="form-group">
            <label>Nombre completo</label>
            <input type="text" placeholder="Ej: Juan Pérez" required />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input type="tel" placeholder="+54 9 11 2345 6789" required />
          </div>

          <div className="form-group">
            <label>Provincia / Localidad</label>
            <input type="text" placeholder="Ej: Buenos Aires" required />
          </div>

          <div className="form-group">
            <label>Cantidad</label>
            <input type="number" placeholder="1" min="0" step="1" required />
          </div>

          <div className="form-group">
            <label>Versión del producto</label>
            <select required>
              <option value="">Seleccioná una opción</option>
              <option value="Lite">HydroSense Lite</option>
              <option value="Pro">HydroSense Pro</option>
            </select>
          </div>

          <div className="form-group">
            <label>Mensaje o consulta</label>
            <textarea placeholder="Escribí tu mensaje..." rows="4" required></textarea>
          </div>

          <button type="submit">Enviar mensaje</button>
        </form>

        <div className="contacto-info">
          <h3>Contactanos en:</h3>

          <div className="info-item">
            <FaWhatsapp className="icon-inline" />
            <p><a href="https://wa.me/5491123456789" target="_blank">+54 9 11 2345 6789</a></p>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon-inline" />
            <p><a href="mailto:info@hydrosense.com">info@hydrosense.com</a></p>
          </div>

          <hr className="divider" />

          <p className="redes-titulo">Seguinos en nuestras redes</p>

          <div className="social-icons">
            <a href="https://www.instagram.com/Hydrosenseofficial" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/hydrosense" target="_blank" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.tiktok.com/@hydrosense0" target="_blank" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
