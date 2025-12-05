import styles from './FichaProducto.module.css';
import './globals.css'

export default function FichaProducto({ nombre }) {
  return (
    <div className={styles.Ficha}>
      <h2 className={styles.titulo}>{nombre}</h2>
      <p className={styles.precio}>$3.500.000 COP</p>
      <button className={styles.boton}>Agregar</button>
    </div>
  );
}
