import { useId } from "react"

export default function PartnershipGraphic() {
  const id = useId().replace(/:/g, "")
  const glow = `${id}-glow`
  const top = `${id}-top`
  const edge = `${id}-edge`
  const title = `${id}-title`
  const description = `${id}-description`

  return (
    <svg className="about-partnership-graphic" viewBox="0 0 1120 420" role="img" aria-labelledby={`${title} ${description}`}>
      <title id={title}>Connected by a shared vision</title>
      <desc id={description}>An architectural illustration of three connected platforms. People and technology connect through dotpbo to create one shared operation.</desc>
      <defs>
        <radialGradient id={glow}><stop stopColor="#ff7a21" stopOpacity=".22" /><stop offset="1" stopColor="#ff7a21" stopOpacity="0" /></radialGradient>
        <linearGradient id={top} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#4b3022" /><stop offset="1" stopColor="#21170f" /></linearGradient>
        <linearGradient id={edge} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ffac65" /><stop offset="1" stopColor="#bd4814" /></linearGradient>
      </defs>
      <ellipse cx="560" cy="258" rx="510" ry="170" fill={`url(#${glow})`} />

      {/* A perspective floor makes the illustration feel architectural. */}
      <g fill="none" stroke="#b38b6a" strokeOpacity=".09">
        {[80, 160, 240, 320, 400].map((y) => <path key={y} d={`M70 ${y} H1050`} />)}
        {[100, 260, 420, 580, 740, 900, 1060].map((x) => <path key={x} d={`M560 30 L${x} 405`} />)}
        <ellipse cx="560" cy="256" rx="468" ry="137" strokeDasharray="4 9" />
      </g>

      {/* Two illuminated pathways join the three workspaces. */}
      <g fill="none" strokeLinecap="round">
        <path d="M240 240 C330 345 420 350 560 285 C700 350 790 345 880 240" stroke="#ff7a21" strokeWidth="18" opacity=".06" />
        <path d="M240 240 C330 345 420 350 560 285 C700 350 790 345 880 240" stroke="#ff7a21" strokeWidth="2" opacity=".6" />
        <path className="about-graphic-flow" d="M240 240 C330 345 420 350 560 285 C700 350 790 345 880 240" stroke="#ffd0a2" strokeWidth="3" strokeDasharray="4 40" />
        <path d="M240 225 C360 110 760 110 880 225" stroke="#ffb690" strokeOpacity=".25" strokeDasharray="3 8" />
      </g>

      {/* People: a small team on an independent isometric platform. */}
      <g>
        <path d="M110 236 L240 172 L370 236 L370 257 L240 324 L110 257 Z" fill="#21150e" stroke="#60402b" />
        <path d="M110 236 L240 172 L370 236 L240 303 Z" fill={`url(#${top})`} stroke="#9c6239" />
        <path d="M110 248 L240 315 L370 248" fill="none" stroke="#ff7a21" strokeOpacity=".5" />
        {[
          { x: 194, y: 178, color: "#aa6944" },
          { x: 280, y: 178, color: "#df9a66" },
          { x: 237, y: 206, color: "#ffac65" },
        ].map(({ x, y, color }) => (
          <g key={x}>
            <ellipse cx={x} cy={y + 42} rx="26" ry="12" fill="#0e0906" opacity=".4" />
            <path d={`M${x - 20} ${y + 34} v-20 a20 20 0 0 1 40 0 v20 q-20 14 -40 0`} fill={color} />
            <circle cx={x} cy={y - 16} r="15" fill={color} stroke="#ffd5af" strokeOpacity=".35" />
          </g>
        ))}
        <text x="240" y="365" textAnchor="middle" fill="#caa995" fontSize="12" letterSpacing="3" fontFamily="Plus Jakarta Sans, sans-serif">HUMAN EXPERTISE</text>
      </g>

      {/* The raised central platform represents the shared operating model. */}
      <g>
        <path d="M397 246 L560 161 L723 246 L723 272 L560 356 L397 272 Z" fill="#3c2415" stroke="#9b592d" />
        <path d="M397 246 L560 161 L723 246 L560 329 Z" fill={`url(#${top})`} stroke="#ffaf72" strokeOpacity=".7" />
        <path d="M397 262 L560 345 L723 262" fill="none" stroke="#ff7a21" strokeWidth="2" />
        <path d="M438 217 L560 154 L682 217 L560 280 Z" fill="#ff7a21" opacity=".08" stroke="#ffb690" />
        <path d="M464 159 L560 109 L656 159 L656 202 L560 253 L464 202 Z" fill={`url(#${edge})`} />
        <path d="M464 159 L560 109 L656 159 L560 210 Z" fill="#ffba83" />
        <path d="M560 210 V253" stroke="#b74d17" strokeOpacity=".5" />
        <text x="560" y="167" textAnchor="middle" fill="#512609" fontSize="29" fontWeight="600" fontFamily="Outfit, sans-serif">dotpbo.</text>
        <path d="M560 86 V60" stroke="#ffb690" strokeOpacity=".6" />
        <circle cx="560" cy="54" r="4" fill="#ffb690" />
        <text x="560" y="34" textAnchor="middle" fill="#ffb690" fontSize="11" letterSpacing="3" fontFamily="Plus Jakarta Sans, sans-serif">ONE SHARED VISION</text>
      </g>

      {/* Technology: connected layers and a simple processor illustration. */}
      <g>
        <path d="M750 236 L880 172 L1010 236 L1010 257 L880 324 L750 257 Z" fill="#21150e" stroke="#60402b" />
        <path d="M750 236 L880 172 L1010 236 L880 303 Z" fill={`url(#${top})`} stroke="#9c6239" />
        <path d="M750 248 L880 315 L1010 248" fill="none" stroke="#ff7a21" strokeOpacity=".5" />
        {[0, 24, 48].map((offset) => (
          <g key={offset} transform={`translate(0 ${-offset})`}>
            <path d="M818 209 L880 177 L942 209 V223 L880 255 L818 223 Z" fill="#39271b" stroke="#bb7848" />
            <path d="M818 209 L880 177 L942 209 L880 241 Z" fill="#583724" stroke="#dd9c67" />
            <path d="M829 223 L850 234" stroke="#ff9e54" strokeWidth="3" />
          </g>
        ))}
        <path d="M852 157 L880 143 L908 157 L880 171 Z" fill="#ffba83" />
        <text x="880" y="365" textAnchor="middle" fill="#caa995" fontSize="12" letterSpacing="3" fontFamily="Plus Jakarta Sans, sans-serif">CONNECTED TECHNOLOGY</text>
      </g>
      <g fill="#ffb690"><circle cx="358" cy="319" r="4" /><circle cx="762" cy="319" r="4" /></g>
    </svg>
  )
}
