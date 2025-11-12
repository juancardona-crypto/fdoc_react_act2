export default function BadgeEstado({ estado }) {
  const activo = estado === "Activo";

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${
        activo
          ? "bg-green-200 text-green-800 border border-green-400"
          : "bg-red-200 text-red-800 border border-red-400"
      }`}
    >
      {estado}
    </span>
  );
}
