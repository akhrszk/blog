import { useEffect, useRef, useState } from "react"

const useDebounce = (delay, deps) => {
  const [state, setState] = useState(deps)
  const delayRef = useRef()
  delayRef.current = delay

  const timerRef = useRef()
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      timerRef.current && clearTimeout(timerRef.current)
      setState(deps)
    }, delayRef.current)
    return () => {
      timerRef.current && clearTimeout(timerRef.current)
    }
  }, deps)
  return state
}

export default useDebounce
