// app/components/AvisoInline.jsx
// Método: Inline styles
// Por qué: útil para estilos dinámicos que dependen de props/estado calculado en JS.
// Limitación: no soporta pseudoclases (:hover) y puede provocar JSX menos legible si se abusa.

export default function AvisoInline({ titulo = "Aviso", texto = "Este es un aviso importante." }) {
  const contStyle = {
    border: '1px solid #fde68a', // yellow-300
    backgroundColor: '#fff7ed',  // orange-50
    padding: '12px',
    borderRadius: '8px',
    maxWidth: '360px'
  };

  const tituloStyle = {
    margin: 0,
    marginBottom: 6,
    fontSize: '1rem',
    color: '#92400e' // orange-800
  };

  const textoStyle = {
    margin: 0,
    color: '#92400e',
    fontSize: '0.95rem'
  };

  return (
    <div style={contStyle}>
      <h5 style={tituloStyle}>{titulo}</h5>
      <p style={textoStyle}>{texto}</p>
    </div>
  );
}
