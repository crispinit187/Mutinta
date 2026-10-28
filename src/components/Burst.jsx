import { useMemo } from 'react'

const HEARTS = ['❤️', '💗', '💖', '💕', '💘', '🌹']

// A burst of hearts exploding outwards from the middle of the screen.
// Change `shot` to fire it again.
export default function Burst({ shot }) {
  const hearts = useMemo(() => {
    const reach = Math.max(window.innerWidth, window.innerHeight) * 0.62
    return Array.from({ length: 70 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2
      const dist = reach * (0.25 + Math.random() * 0.75)
      return {
        id: i,
        char: HEARTS[Math.floor(Math.random() * HEARTS.length)],
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        r: (Math.random() - 0.5) * 120,
        s: 18 + Math.random() * 30,
        d: Math.random() * 0.35,
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shot])

  return (
    <div className="burst" aria-hidden="true" key={shot}>
      {hearts.map((h) => (
        <span
          key={h.id}
          style={{
            '--x': `${h.x}px`,
            '--y': `${h.y}px`,
            '--r': `${h.r}deg`,
            '--s': `${h.s}px`,
            '--d': `${h.d}s`,
          }}
        >
          {h.char}
        </span>
      ))}
    </div>
  )
}
