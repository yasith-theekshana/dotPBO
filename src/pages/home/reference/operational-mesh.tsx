const nodes = [
  { x: 250, y: 70, label: "PEOPLE", icon: "groups" },
  { x: 421, y: 194, label: "PROCESS", icon: "account_tree" },
  { x: 356, y: 395, label: "TECHNOLOGY", icon: "memory" },
  { x: 144, y: 395, label: "GOVERNANCE", icon: "verified_user" },
  { x: 79, y: 194, label: "ANALYTICS", icon: "monitoring" },
]

export default function OperationalMesh() {
  return (
    <div className="relative aspect-square w-full" role="img" aria-label="dotpbo operational network connecting people, process, technology, governance and analytics">
      <svg viewBox="0 0 500 500" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="mesh-glow"><stop stopColor="#ff7a21" stopOpacity=".25" /><stop offset="1" stopColor="#ff7a21" stopOpacity="0" /></radialGradient>
        </defs>
        <circle cx="250" cy="250" r="240" fill="url(#mesh-glow)" />
        {[90, 145, 190, 225].map((r) => <circle key={r} className={r === 190 ? "home-mesh-orbit" : undefined} cx="250" cy="250" r={r} fill="none" stroke="#ff7a21" strokeOpacity=".2" strokeDasharray={r === 190 ? "3 9" : undefined} />)}
        {nodes.map((node, i) => (
          <g key={node.label}>
            <path d={`M250 250 L${node.x} ${node.y} L${nodes[(i + 1) % nodes.length].x} ${nodes[(i + 1) % nodes.length].y} Z`} fill="none" stroke="#ff7a21" strokeOpacity=".4" />
            <path className="home-mesh-signal" style={{ animationDelay: `${-i * 0.8}s` }} d={`M250 250 L${node.x} ${node.y}`} pathLength="100" fill="none" stroke="#ffcfaa" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 98" />
            <circle cx={node.x} cy={node.y} r="30" fill="#27170e" stroke="#ff7a21" strokeOpacity=".6" />
            <text x={node.x} y={node.y + 51} fill="#e0c0b1" fontSize="10" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1.4">{node.label}</text>
          </g>
        ))}
        <circle cx="250" cy="250" r="65" fill="#23140c" stroke="#ff7a21" strokeWidth="2" />
        <circle className="home-mesh-pulse" cx="250" cy="250" r="72" fill="none" stroke="#ff7a21" strokeOpacity=".3" />
        <text x="250" y="256" fill="#f2dfd4" fontFamily="Outfit, sans-serif" fontSize="30" fontWeight="600" textAnchor="middle">dotpbo<tspan fill="#ff7a21">.</tspan></text>
        <text x="250" y="275" fill="#ffb690" fontFamily="sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">CONNECTED OPERATIONS</text>
      </svg>
      {nodes.map((node) => <span key={node.label} aria-hidden="true" className="material-symbols-outlined absolute -translate-x-1/2 -translate-y-1/2 text-primary-container" style={{ left: `${node.x / 5}%`, top: `${node.y / 5}%` }}>{node.icon}</span>)}
    </div>
  )
}
