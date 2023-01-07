import React, { useMemo, useState } from "react"
import { format } from "date-fns"
import useTic from "../hooks/useTic"

const NowTime = ({ format: formatInput }) => {
  const [now, setNow] = useState(new Date())
  useTic(() => {
    setNow(new Date())
  }, 100)
  const nowStr = useMemo(() => format(now, formatInput), [now, formatInput])
  return <div>現在時刻: {nowStr}</div>
}

export default NowTime
