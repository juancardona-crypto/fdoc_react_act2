import React from "react";

export default function BadgeEstado({ estado }) {
  const isActive = estado === "Activo";
  
  let badgeClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ";
  
  if (isActive) {
    badgeClasses += "bg-green-50 text-green-700 border-green-200";
  } else {
    badgeClasses += "bg-red-50 text-red-700 border-red-200";
  }
  
  let dotColor = isActive ? "bg-green-500" : "bg-red-500";
  
  return (
    <span className={badgeClasses}>
      <span className={`w-2 h-2 rounded-full mr-2 ${dotColor}`} />
      {estado}
    </span>
  );
}