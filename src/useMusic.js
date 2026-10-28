import { useCallback, useEffect, useRef, useState } from 'react'

// Looping background music. `start()` must be called from a tap (browsers block sound before that).
// The music pauses while the tab is hidden and picks up again when she comes back.
export default function useMusic(src) {
  const audioRef = useRef(null)
  const wantPlaying = useRef(false)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = true
    audio.preload = 'auto'
    audio.volume = 0.7
    audioRef.current = audio

    const onVisibility = () => {
      if (document.hidden) audio.pause()
      else if (wantPlaying.current) audio.play().catch(() => {})
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      audio.pause()
      audioRef.current = null
    }
  }, [src])

  const start = useCallback(() => {
    wantPlaying.current = true
    audioRef.current?.play().catch(() => {})
  }, [])

  const toggleMute = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    setMuted((m) => {
      const next = !m
      wantPlaying.current = !next
      if (next) audio.pause()
      else audio.play().catch(() => {})
      return next
    })
  }, [])

  return { start, muted, toggleMute }
}
