import { useCallback, useEffect, useRef, useState } from 'react'
import Background from './components/Background.jsx'
import Progress from './components/Progress.jsx'
import Ask from './components/Ask.jsx'
import Celebration from './components/Celebration.jsx'
import Footer from './components/Footer.jsx'
import { screens } from './content.js'

const ASK_STEP = screens.length // the final question comes after the message screens

export default function App() {
  const [step, setStep] = useState(0)
  const [yes, setYes] = useState(false)
  const touchX = useRef(null)

  const next = useCallback(() => setStep((s) => Math.min(s + 1, ASK_STEP)), [])
  const back = useCallback(() => setStep((s) => Math.max(s - 1, 0)), [])

  // Arrow keys and Enter move through the screens (never past the question).
  useEffect(() => {
    if (yes) return undefined
    const onKey = (e) => {
      if (e.key === 'ArrowRight' && step < ASK_STEP) next()
      if (e.key === 'ArrowLeft') back()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [yes, step, next, back])

  // Swipe left / right on phones.
  const onTouchStart = (e) => {
    touchX.current = e.changedTouches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null || yes) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (dx < -60 && step < ASK_STEP) next()
    if (dx > 60) back()
  }

  const pct = yes ? 100 : (step / ASK_STEP) * 100
  const screen = screens[step]

  return (
    <div className="app" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <Background />
      <Progress pct={pct} />
      <main className="stage">
        {yes ? (
          <Celebration />
        ) : step < ASK_STEP ? (
          <section className="card" key={step} aria-live="polite">
            {screen.photo ? (
              <figure className="polaroid" style={{ '--tilt': `${screen.photo.tilt}deg` }}>
                <img src={`${import.meta.env.BASE_URL}${screen.photo.src}`} alt={screen.photo.alt} />
              </figure>
            ) : (
              <div className="icon" aria-hidden="true">
                {screen.icon}
              </div>
            )}
            {screen.title && <h1 className="title reveal r1">{screen.title}</h1>}
            {screen.body && (
              <p className={screen.long ? 'body body-long reveal r2' : 'body reveal r2'}>{screen.body}</p>
            )}
            {screen.sign && (
              <p className="sign reveal r3">
                {screen.sign[0]}
                <br />
                <strong>{screen.sign[1]}</strong>
              </p>
            )}
            <div className="nav">
              {step > 0 ? (
                <button type="button" className="btn btn-ghost" onClick={back}>
                  Back
                </button>
              ) : (
                <span />
              )}
              <button type="button" className="btn btn-primary" onClick={next}>
                Next
              </button>
            </div>
          </section>
        ) : (
          <Ask key="ask" onYes={() => setYes(true)} onBack={back} />
        )}
      </main>
      <Footer />
    </div>
  )
}
