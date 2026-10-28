import { useMemo } from 'react'

const HEARTS = ['💗', '💖', '💕', '🌹', '✨']

// Gentle hearts floating up the screen on a loop, for after she says yes.
export default function Rising() {
  const items = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        char: HEARTS[i % HEARTS.length],
        left: Math.random() * 100,
        size: 16 + Math.random() * 20,
        dur: 7 + Math.random() * 7,
        delay: -Math.random() * 14,
        sway: (Math.random() - 0.5) * 80,
      })),
    [],
  )

  return (
    <div className="rise" aria-hidden="true">
      {items.map((h) => (
        <span
          key={h.id}
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.dur}s`,
            animationDelay: `${h.delay}s`,
            '--sway': `${h.sway}px`,
          }}
        >
          {h.char}
        </span>
      ))}
    </div>
  )
}
