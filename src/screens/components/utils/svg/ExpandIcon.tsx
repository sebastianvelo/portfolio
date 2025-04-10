const ExpandSVG = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={"w-4 h-4"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Flecha superior-izquierda */}
        <line x1="8" y1="8" x2="4" y2="4" />
        <line x1="4" y1="4" x2="4" y2="8" />
        <line x1="4" y1="4" x2="8" y2="4" />

        {/* Flecha superior-derecha */}
        <line x1="16" y1="8" x2="20" y2="4" />
        <line x1="20" y1="4" x2="20" y2="8" />
        <line x1="20" y1="4" x2="16" y2="4" />

        {/* Flecha inferior-izquierda */}
        <line x1="8" y1="16" x2="4" y2="20" />
        <line x1="4" y1="20" x2="4" y2="16" />
        <line x1="4" y1="20" x2="8" y2="20" />

        {/* Flecha inferior-derecha */}
        <line x1="16" y1="16" x2="20" y2="20" />
        <line x1="20" y1="20" x2="20" y2="16" />
        <line x1="20" y1="20" x2="16" y2="20" />
    </svg>
)

export default ExpandSVG;