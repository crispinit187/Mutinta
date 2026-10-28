// Small round button in the corner to turn the music off and on.
export default function MuteButton({ muted, onToggle }) {
  return (
    <button
      type="button"
      className="mute"
      onClick={onToggle}
      aria-label={muted ? 'Turn the music on' : 'Turn the music off'}
      aria-pressed={muted}
    >
      {muted ? '🔇' : '🎵'}
    </button>
  )
}
