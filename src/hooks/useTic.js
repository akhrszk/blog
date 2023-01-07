import { useEffect, useRef } from "react"

const useTic = (fn, interval) => {
  const delayRef = useRef()
  delayRef.current = interval
  const fnRef = useRef()
  fnRef.current = fn

  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      fnRef.current?.()
    }, delayRef.current)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
}

export default useTic
