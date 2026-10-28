import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { dodgeHints } from '../content.js'

// The big question. "Yes" grows every time "No" runs away, and "No" can never be pressed.
export default function Ask({ onYes, onBack }) {
  const [tries, setTries] = useState(0)
  const [pos, setPos] = useState(null) // null = still sitting next to Yes
  const [size, setSize] = useState({ w: 0, h: 0 })
  const noRef = useRef(null)
  const yesRef = useRef(null)
  const lastDodge = useRef(0)

  const dodge = () => {
    const now = performance.now()
    if (now - lastDodge.current < 250) return // one touch fires several events
    lastDodge.current = now

    const btn = noRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const w = pos ? size.w : rect.width
    const h = pos ? size.h : rect.height
    if (!pos) setSize({ w, h })

    const yes = yesRef.current.getBoundingClientRect()
    const pad = 14
    const topLimit = 56 // keep clear of the progress bar
    let next = null
    for (let i = 0; i < 40; i++) {
      const x = pad + Math.random() * (window.innerWidth - w - pad * 2)
      const y = topLimit + Math.random() * (window.innerHeight - h - topLimit - pad)
      const overlapsYes =
        x < yes.right + 16 && x + w > yes.left - 16 && y < yes.bottom + 16 && y + h > yes.top - 16
      const tooClose = pos && Math.hypot(x - pos.x, y - pos.y) < 120
      if (!overlapsYes && !tooClose) {
        next = { x, y }
        break
      }
    }
    setPos(next ?? { x: pad, y: window.innerHeight - h - pad })
    setTries((t) => t + 1)
  }

  const grow = Math.min(1 + tries * 0.12, 1.7)
  const hint = dodgeHints[Math.min(tries, dodgeHints.length - 1)]

  const noButton = (
    <button
      ref={noRef}
      type="button"
      className={pos ? 'btn btn-no btn-no-fly' : 'btn btn-no'}
      style={pos ? { left: pos.x, top: pos.y } : undefined}
      onPointerEnter={(e) => e.pointerType === 'mouse' && dodge()}
      onPointerDown={(e) => {
        e.preventDefault()
        dodge()
      }}
      onFocus={dodge}
      onClick={dodge}
    >
      No
    </button>
  )

  return (
    <section className="card card-ask" aria-live="polite">
      <div className="icon" aria-hidden="true">
        💌
      </div>
      <h1 className="title title-ask">Will you be my girlfriend? ❤️</h1>

      <div className="ask-buttons">
        <button
          ref={yesRef}
          type="button"
          className="btn btn-yes"
          style={{ '--grow': grow }}
          onClick={onYes}
        >
          Yes 💗
        </button>
        {pos ? (
          <>
            <span className="no-placeholder" style={{ width: size.w, height: size.h }} />
            {createPortal(noButton, document.body)}
          </>
        ) : (
          noButton
        )}
      </div>

      <p className="hint">{hint}</p>

      <div className="nav nav-solo">
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          Back
        </button>
      </div>
    </section>
  )
}
