// A thin progress bar with a little heart riding along the front of it.
export default function Progress({ pct }) {
  return (
    <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pct)}>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="progress-heart" style={{ left: `${pct}%` }}>
        💗
      </span>
    </div>
  )
}
