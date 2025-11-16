import React from 'react'
import { FaLeaf, FaMicrochip, FaTint } from "react-icons/fa"

export default function AboutUs() {
  return (
    <div className="quienes-container fade-section fade-delay-1">
      <h2>Quiénes Somos</h2>
      <p className="intro">
        En <strong>HydroSense</strong> desarrollamos soluciones inteligentes para el manejo del agua. 
        Nuestro objetivo es fusionar tecnología, sostenibilidad y diseño para ofrecer 
        sistemas de riego automáticos accesibles, eficientes y adaptables.
      </p>

      <div className="valores">
        <div className="valor fade-section fade-delay-1">
          <FaLeaf className="valor-icon" />
          <h3>Sostenibilidad</h3>
          <p>Diseñamos cada producto pensando en el uso responsable del agua y el cuidado del medio ambiente.</p>
        </div>

        <div className="valor fade-section fade-delay-2">
          <FaMicrochip className="valor-icon" />
          <h3>Innovación</h3>
          <p>Implementamos sensores y control remoto para ofrecer una experiencia moderna y precisa.</p>
        </div>

        <div className="valor fade-section fade-delay-3">
          <FaTint className="valor-icon" />
          <h3>Eficiencia</h3>
          <p>Maximizamos el rendimiento de tus cultivos y jardines reduciendo desperdicios y esfuerzo.</p>
        </div>
      </div>
    </div>
  )
}
