const capabilities = [
  { x: 250, y: 65, icon: "support_agent", label: "CUSTOMER EXPERIENCE" },
  { x: 410, y: 158, icon: "inventory_2", label: "BACK OFFICE" },
  { x: 410, y: 342, icon: "account_balance", label: "FINANCE" },
  { x: 250, y: 435, icon: "trending_up", label: "SALES SUPPORT" },
  { x: 90, y: 342, icon: "headset_mic", label: "TECHNICAL SUPPORT" },
  { x: 90, y: 158, icon: "database", label: "DATA OPERATIONS" },
]

export default function ServiceGraphic() {
  return (
    <div className="relative aspect-square w-full" role="img" aria-label="Six service capabilities connected through dotpbo: customer experience, back office, finance, sales, technical support and data operations.">
      <svg viewBox="0 0 500 500" aria-hidden="true" className="h-full w-full">
        <path d="M250 65 L410 158 V342 L250 435 L90 342 V158 Z" fill="#ff7a2108" stroke="#ff7a2155" />
        <path d="M250 105 L375 178 V322 L250 395 L125 322 V178 Z" fill="none" stroke="#ff7a2130" strokeDasharray="4 8" />
        {capabilities.map(({ x, y, label }) => <g key={label}><path d={`M250 250 L${x} ${y}`} stroke="#ff7a2160" /><circle cx={x} cy={y} r="30" fill="#271e17" stroke="#ffb69080" /><text x={x} y={y + 48} textAnchor="middle" fontSize="8" letterSpacing="1" fill="#e0c0b1">{label}</text></g>)}
        <path d="M250 179 L312 214 V286 L250 321 L188 286 V214 Z" fill="#322015" stroke="#ff7a21" strokeWidth="2" />
        <text x="250" y="255" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="29" fill="#f2dfd4">dotpbo<tspan fill="#ff7a21">.</tspan></text>
        <text x="250" y="277" textAnchor="middle" fontSize="7" letterSpacing="2" fill="#ffb690">ONE PARTNER</text>
      </svg>
      {capabilities.map(({ x, y, icon }) => <span key={icon} aria-hidden="true" className="material-symbols-outlined absolute -translate-x-1/2 -translate-y-1/2 text-primary-container" style={{ left: `${x / 5}%`, top: `${y / 5}%` }}>{icon}</span>)}
    </div>
  )
}
