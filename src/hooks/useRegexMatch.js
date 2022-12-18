import { useRef, useState, useEffect, useReducer } from "react"

const reducer = (_, action) => {
  const { regex, target, flags } = action
  if (!regex) {
    return []
  }
  const x = new RegExp(regex, flags)
  try {
    if (!flags?.includes("g")) {
      const match = x.exec(target || "")
      return match ? [match[0]] : []
    }

    let match = null
    let acc = []
    while ((match = x.exec(target || ""))) {
      acc.push(match)
    }
    return acc.map(v => v[0])
  } catch {
    return []
  }
}

const useRegexMatch = () => {
  const [match, dispatch] = useReducer(reducer, [])
  const [{ regex, target, flags }, setState] = useState({})

  const dispatchRef = useRef()
  dispatchRef.current = dispatch

  // HACK 入力中に、正規表現マッチングの処理が何度も呼び出されないようにdebounceしている
  let timer = null
  useEffect(() => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      dispatchRef.current?.({ regex, target, flags })
    }, 300)
    return () => {
      timer && clearTimeout(timer)
    }
  }, [regex, target, flags])
  return [match, setState]
}

export default useRegexMatch
