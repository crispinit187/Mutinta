import { useEffect, useMemo, useState } from 'react'
import Burst from './Burst.jsx'
import Rising from './Rising.jsx'
import { recipient } from '../content.js'

const HEART_PATH = 'M60 84 C38 68 40 46 52 46 C57 46 60 50 60 54 C60 50 63 46 68 46 C80 46 82 68 60 84 Z'

function Seal() {
  return (
    <svg className="seal" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <path id="seal-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#ff5f84" />
      <circle cx="60" cy="60" r="52" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="3 4" />
      <text fontSize="9.5" fontWeight="700" fill="#fff">
        <textPath href="#seal-circle" textLength="276" lengthAdjust="spacing">
          SEALED WITH A YES ♥ SEALED WITH A YES ♥
        </textPath>
      </text>
      <path d={HEART_PATH} fill="#fff" />
    </svg>
  )
}

// What she sees after tapping Yes: a heart burst, floating hearts, and a keepsake card to screenshot.
export default function Celebration() {
  const [shot, setShot] = useState(0)
  const stamp = useMemo(
    () =>
      new Date().toLocaleString(undefined, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    [],
  )

  // A second wave a moment later, so the celebration feels like it keeps going.
  useEffect(() => {
    const t = setTimeout(() => setShot((s) => s + 1), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Burst shot={shot} />
      <Rising />
      <section className="keepsake" aria-live="polite">
        <Seal />
        <p className="keepsake-eyebrow">A keepsake</p>
        <h1 className="keepsake-name">{recipient}</h1>
        <p className="keepsake-line">said YES 💗</p>
        <p className="keepsake-sub">and is officially my girlfriend.</p>
        <div className="keepsake-rule" />
        <p className="keepsake-date">Sealed on {stamp}</p>
        <p className="keepsake-thanks">Thank you for saying yes. I'll make sure you never regret it.</p>
        <p className="keepsake-send">Screenshot this and send it to me 💌</p>
        <button type="button" className="btn btn-more" onClick={() => setShot((s) => s + 1)}>
          More hearts 💗
        </button>
      </section>
    </>
  )
}
