import React from 'react';

const WorkSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className="w-10 h-10 laptop-container"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Grupo de la pantalla: inicialmente cerrada */}
    <g className="laptop-screen">
      {/* Pantalla de la laptop */}
      <rect
        x="8"
        y="8"
        width="48"
        height="32"
        rx="3"
        fill="#"
        stroke="#374151"
        strokeWidth="2"
      />
    </g>
    {/* Base / teclado */}
    <rect
      x="4"
      y="42"
      width="56"
      height="8"
      rx="2"
      fill="#D1D5DB"
      stroke="#374151"
      strokeWidth="2"
    />
    {/* Línea superior de la base */}
    <line
      x1="4"
      y1="42"
      x2="60"
      y2="42"
      stroke="#374151"
      strokeWidth="2"
    />
  </svg>
);

export default WorkSVG;
