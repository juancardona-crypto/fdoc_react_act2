// app/components/BadgeEstado.jsx
// Método: Tailwind CSS (clases utilitarias)
// Por qué: rápido para prototipado y mantiene consistencia visual.
// Limitación: requiere configuración/instalación de Tailwind; clases largas en JSX.

export default function BadgeEstado({ estado = "Activo" }) {
  const activo = estado.toLowerCase() === 'activo';

  return (
    <span
      className={
        `inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium ` +
        (activo
          ? 'bg-green-100 text-green-800 ring-1 ring-green-200'
          : 'bg-gray-100 text-gray-600 ring-1 ring-gray-200')
      }
      aria-live="polite"
    >
      {activo ? 'Activo' : 'Inactivo'}
    </span>
  );
}
