// The first screen. Browsers only allow sound after a tap, so this tap is what starts the music.
export default function Gate({ onOpen }) {
  return (
    <section className="gate" aria-live="polite">
      <button type="button" className="gate-btn" onClick={onOpen} aria-label="Tap to open">
        <span className="gate-envelope" aria-hidden="true">
          💌
        </span>
        <span className="gate-for">For Mutinta</span>
        <span className="gate-tap">Tap to open</span>
      </button>
    </section>
  )
}
