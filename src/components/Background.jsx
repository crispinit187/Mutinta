import { Component, lazy, Suspense, useEffect, useState } from 'react'

const GradientLayer = lazy(() => import('./GradientLayer.jsx'))

// True if this device/browser can create a WebGL context.
function hasWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

// If the 3D layer ever crashes, fall back quietly to the CSS gradient instead of a blank screen.
class GLBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch() {
    this.props.onFail?.()
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

export default function Background() {
  const [useGL, setUseGL] = useState(false)
  const [visible, setVisible] = useState(() => !document.hidden)

  // Use the live background unless the device can't do WebGL or asks for reduced motion.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce && hasWebGL()) setUseGL(true)
  }, [])

  // Pause the animation while the tab is hidden to save battery.
  useEffect(() => {
    const onChange = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', onChange)
    return () => document.removeEventListener('visibilitychange', onChange)
  }, [])

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-fallback" />
      {useGL && (
        <GLBoundary onFail={() => setUseGL(false)}>
          <Suspense fallback={null}>
            <GradientLayer animate={visible ? 'on' : 'off'} />
          </Suspense>
        </GLBoundary>
      )}
    </div>
  )
}
