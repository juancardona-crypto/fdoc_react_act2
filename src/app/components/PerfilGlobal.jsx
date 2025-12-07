// app/components/PerfilGlobal.jsx
// Método: CSS Global
// Por qué usar global: Fácil y directo para estilos compartidos / temas.
// Limitaciones: puede causar conflicto de nombres si no se organiza; no aísla estilos.

export default function PerfilGlobal({ nombre = "Nombre Apellido", descripcion = "Descripción breve del perfil" }) {
  return (
    <div className="tarjeta">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <button className="boton">Seguir</button>
    </div>
  );
}
