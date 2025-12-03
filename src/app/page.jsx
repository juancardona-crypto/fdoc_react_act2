import React from 'react'
import './globals.css'
import './components/FichaProducto.module.css'
import AvisoInline from './components/AvisoInline.jsx'
import BadgeEstado from "./components/BadgeEstado";
import FichaProducto from './components/FichaProducto';
import PerfilGlobal from './components/PerfilGlobal';

export default function page() {
  return (
    <>
        <PerfilGlobal />

        <FichaProducto nombre="Portátil Lenovo Thinkpad X1" />

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>EJEMPLO DE ESTILOS EN LINEA</h1>
        <AvisoInline />
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Ejemplo de BadgeEstado</h1>

      <BadgeEstado estado="Activo" />
      <BadgeEstado estado="Inactivo" />
      </div>
        <div className="bg-red-500 text-white p-4">
  Esto debería tener fondo rojo si Tailwind funciona
</div>

    </>
  )
}
