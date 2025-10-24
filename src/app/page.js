import React from 'react'
import './globals.css'
import './components/FichaProducto.module.css'
import Ficha from './Ficha'

export default function page() {
  return (
    <>
      <div className="tarjeta">
        <h2 className="titulo">Master card Platinum</h2>
        <p>Credito disponible: $50.000.000 COP</p>
        <button className="boton">Comprar</button>
      </div>

      <Ficha nombre="Portátil Lenovo Thinkpad X1" />
      
    </>
  )
}
