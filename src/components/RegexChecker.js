import * as React from "react"
import { useRef, useEffect, useReducer } from "react"
import useRegexMatch from "../hooks/useRegexMatch"
import Divider from "./Divier"
import Input from "./Input"
import Textarea from "./Textarea"

const reducer = (state, action) => {
  switch (action.type) {
    case "target":
      return { ...state, target: action.payload }
    case "regex":
      return { ...state, regex: action.payload }
    case "flags":
      return {
        ...state,
        flags: [...(state.flags || []), action.payload.flag].filter(
          v => v !== action.payload.flag || action.payload.on
        ),
      }
    default:
      return { ...state }
  }
}

const RegexChecker = () => {
  const [{ target, regex, flags }, dispatch] = useReducer(reducer, {})

  const [match, update] = useRegexMatch()
  const updateRef = useRef()
  updateRef.current = update

  useEffect(() => {
    updateRef.current?.({ target, regex, flags: flags?.join("") })
  }, [target, regex, flags])

  return (
    <div class="grid grid-flow-row-dense grid-cols-2 gap-x-2 gap-y-6">
      <div class="col-span-2">
        <Input
          label="正規表現"
          before="/"
          after={`/${flags?.join("") || ""}`}
          value={regex || ""}
          onChange={e =>
            dispatch({ type: "regex", payload: e.target.value || "" })
          }
        />
      </div>
      <div class="col-span-2 flex justify-end gap-4">
        {["i", "g", "m", "s"].map(flag => (
          <label key={flag} class="block">
            <input
              type="checkbox"
              class="mr-2"
              checked={(flags || []).includes(flag)}
              onChange={e =>
                dispatch({
                  type: "flags",
                  payload: { flag, on: e.target.checked },
                })
              }
            />
            {flag}
          </label>
        ))}
      </div>
      <div>
        <Textarea
          label="検索対象の文字列"
          class="h-32"
          value={target || ""}
          onChange={e =>
            dispatch({ type: "target", payload: e.target.value || "" })
          }
        />
      </div>
      <div>
        <span class="block text-sm font-medium text-slate-700">結果</span>
        <div class="flex flex-col gap-3 h-32 px-2 py-3 overflow-y-scroll rounded-md bg-slate-50">
          {match?.map((v, i) => (
            <div key={i}>
              <p>{v}</p>
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RegexChecker
