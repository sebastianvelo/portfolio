import React from 'react';

const BookSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        className="w-10 h-10 book-container"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        {/* Página (fija, en blanco) */}
        <g className="book-page">
            <rect
                x="12"
                y="12"
                width="40"
                height="40"
                rx="2"
                fill="#ffffff"
                stroke="#d1d5db"
                strokeWidth="2"
            />
        </g>
        {/* Tapa del libro que gira al pasar el cursor */}
        <g className="book-cover">
            <rect
                x="12"
                y="12"
                width="40"
                height="40"
                rx="2"
                fill="#1e3a8a"
                stroke="#111827"
                strokeWidth="2"
            />
        </g>
        {/* Lomo del libro */}
        <rect
            x="12"
            y="12"
            width="6"
            height="40"
            rx="1"
            fill="#6B7280"
            stroke="#111827"
            strokeWidth="2"
        />
    </svg>
);

export default BookSVG;
