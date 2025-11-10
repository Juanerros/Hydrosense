import React from 'react'
import img_product1 from '../assets/product1.png'

export default function Productos() {
  return (
    <div className="productos-container">
      <h2 className='productos-title'>Nuestros Productos</h2>

      <div className="producto">
        <img src={img_product1} alt="HydroSense Lite" />
        <div className="info">
          <h3 className='producto-title' >HydroSense Lite</h3>
          <p>
            Versión compacta ideal para hogares u oficinas. Ofrece un sistema
            de riego automático de fácil instalación y control remoto mediante
            app o PC.
          </p>
          <ul className='producto-features'>
            <li>Riego automático programable</li>
            <li>Fácil instalación</li>
            <li>Control desde el celular o PC</li>
          </ul>
          <p className="precio">$186.000</p>
        </div>
      </div>

      <div className="producto reverse">
        <img src={img_product1} alt="HydroSense Pro" />
        <div className="info">
          <h3 className='producto-title'>HydroSense Pro</h3>
          <p>
            La versión avanzada, diseñada para viveros o espacios amplios. Permite
            controlar múltiples sectores de riego con alta precisión y monitoreo
            remoto completo.
          </p>
          <ul className='producto-features'>
            <li>Gestión de múltiples zonas</li>
            <li>Alertas inteligentes</li>
            <li>Integración con sistemas de riego profesionales</li>
          </ul>
          <p className="precio">$280.000</p>
        </div>
      </div>
    </div>
  )
}
