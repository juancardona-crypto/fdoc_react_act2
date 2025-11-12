import React from 'react'
import './globals.css'
import './components/FichaProducto.module.css'
import Ficha from './Ficha'
import AvisoInline from './components/avisoinline.jsx'
import BadgeEstado from "./components/BadgeEstado";


export default function page() {
  return (
    <>
      <div className="tarjeta">
        <h2 className="titulo">Master card Platinum</h2>
        <p>Credito disponible: $50.000.000 COP</p>
        <button className="boton">Comprar</button>
      </div>

      <Ficha nombre="Portátil Lenovo Thinkpad X1" />

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>EJEMPLO DE ESTILOS EN LINEA</h1>
      
 
      <AvisoInline />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Ejemplo de BadgeEstado</h1>

      <BadgeEstado estado="Activo" />
      <BadgeEstado estado="Inactivo" />
      </div>

    </>
  )
}
