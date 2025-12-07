// app/page.jsx
import PerfilGlobal from './components/PerfilGlobal';
import FichaProducto from './components/FichaProducto';
import AvisoInline from './components/AvisoInline';
import BadgeEstado from './components/BadgeEstado';

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ margin: '0 0 12px 0' }}>Actividad — Clase 4: Métodos de Estilo</h1>
      <div className="container-ejemplos">
        {/* CSS Global */}
        <div>
          <h4 style={{ margin: '0 0 8px 0' }}>Perfil (CSS Global)</h4>
          <PerfilGlobal nombre="Sirley A. Vahos" descripcion="Estudiante de desarrollo web" />
        </div>

        {/* Módulo CSS */}
        <div>
          <h4 style={{ margin: '0 0 8px 0' }}>Ficha Producto (Módulo CSS)</h4>
          <FichaProducto nombre="Bolso Elegante" precio="$79.99" />
        </div>

        {/* Inline Styles */}
        <div>
          <h4 style={{ margin: '0 0 8px 0' }}>Aviso (Inline)</h4>
          <AvisoInline titulo="Recordatorio" texto="Entrega del proyecto el viernes." />
        </div>

        {/* Tailwind */}
        <div>
          <h4 style={{ margin: '0 0 8px 0' }}>Badge (Tailwind)</h4>
          <BadgeEstado estado="Activo" />
          <div style={{ height: 8 }} />
          <BadgeEstado estado="Inactivo" />
        </div>
      </div>
    </main>
  );
}
