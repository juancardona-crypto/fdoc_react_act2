// app/components/FichaProducto.jsx
// Método: Módulo CSS
// Por qué: Aíslan los estilos de este componente y evitan colisiones.
// Limitación: más archivos (archivo .module.css), pero mejor mantenibilidad.

import styles from './FichaProducto.module.css';

export default function FichaProducto({ nombre = "Bolso Clásico", precio = "$59.99" }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{nombre}</h4>
      <div className={styles.price}>{precio}</div>
      <button className={styles.addBtn}>Agregar</button>
    </div>
  );
}
