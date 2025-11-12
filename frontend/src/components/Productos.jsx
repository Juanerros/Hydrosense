import React from 'react';
import img_product1 from '../assets/product1.png';
import img_product2 from '../assets/product1.png';

export default function Productos() {
  return (
    <div className="productos-container fade-section fade-delay-1">
      <h2 className="titulo-seccion fade-section fade-delay-1">Nuestros Productos</h2>

      <p className="intro-productos fade-section fade-delay-2">
        En <strong>HydroSense</strong> diseñamos sistemas inteligentes que combinan tecnología, eficiencia y diseño.  
        Cada modelo está pensado para adaptarse a distintos espacios y necesidades de riego.
      </p>

      {/* PRODUCTO 1 */}
      <div className="producto fade-section fade-delay-3">
        <img src={img_product1} alt="HydroSense Lite" />
        <div className="info">
          <h3 className="nombre-producto">HydroSense Lite</h3>
          <p>
            Compacto, eficiente y pensado para el hogar o la oficina.  
            El modelo Lite ofrece automatización completa del riego en un formato simple y accesible.
          </p>
          <ul>
            <li>Programación de riego inteligente con IA</li>
            <li>Instalación rápida sin herramientas adicionales</li>
            <li>Control remoto vía aplicación móvil</li>
            <li>Consumo energético mínimo y modo eco</li>
          </ul>
          <p className="beneficio">
            Ideal para espacios pequeños, macetas o interiores con plantas decorativas.  
            Su tamaño compacto lo convierte en una opción moderna y práctica.
          </p>
        </div>
      </div>

      {/* PRODUCTO 2 */}
      <div className="producto reverse fade-section fade-delay-4">
        <img src={img_product2} alt="HydroSense Pro" />
        <div className="info">
          <h3 className="nombre-producto">HydroSense Pro</h3>
          <p>
            Nuestro sistema más avanzado, diseñado para jardines amplios, invernaderos o viveros profesionales.  
            Ofrece un control total sobre múltiples zonas con monitoreo climático en tiempo real.
          </p>
          <ul>
            <li>Gestión de hasta 8 sectores independientes</li>
            <li>Alertas por humedad y temperatura</li>
            <li>Panel web y aplicación móvil sincronizados</li>
            <li>Integración con asistentes inteligentes (Alexa / Google Home)</li>
          </ul>
          <p className="beneficio">
            Perfecto para uso profesional o entornos con alto nivel de exigencia.  
            Su diseño robusto y su precisión lo convierten en el corazón de cualquier sistema de riego automatizado.
          </p>
        </div>
      </div>
    </div>
  );
}
