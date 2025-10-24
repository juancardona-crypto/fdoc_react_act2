import styles from './componentes/FichaProducto.module.css';

export default function Ficha({ nombre }) {
  return (
    <div className={styles.Ficha}>
      <h2 className={styles.titulo}>{nombre}</h2>
      <p className={styles.precio}>$3.500.000 COP</p>
      <button className={styles.boton}>Agregar al carrito</button>
    </div>
  );
}
