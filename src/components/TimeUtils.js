import { DateTime } from "luxon"
import React, { useReducer } from "react"
import Input from "./Input"
import InputComplete from "./InputComplete"

const TimeUtils = () => {
  const [
    {
      formatInput,
      datetimeInput,
      datetimeUtcInput,
      timezoneInput,
      unixTimeInput,
    },
    dispatch,
  ] = useReducer(reducer, initialState())
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Input
          label="フォーマット"
          value={formatInput}
          onChange={e => dispatch({ type: "format", payload: e.target.value })}
        />
      </div>
      <div className="flex gap-3">
        <div className="flex-1">
          <Input
            label="DateTime"
            value={datetimeInput}
            onChange={e =>
              dispatch({ type: "datetime", payload: e.target.value })
            }
          />
        </div>
        <div className="flex-1">
          <InputComplete
            label="タイムゾーン"
            value={timezoneInput}
            onChange={e =>
              dispatch({ type: "timezone", payload: e.target.value })
            }
            name="timezones"
            options={timezones()}
          />
        </div>
      </div>
      <div>
        <Input
          label="UTC"
          value={datetimeUtcInput}
          onChange={e => dispatch({ type: "utc", payload: e.target.value })}
        />
      </div>
      <div>
        <Input
          label="UNIXタイムスタンプ"
          value={unixTimeInput}
          onChange={e =>
            dispatch({ type: "unixtime", payload: e.target.value })
          }
        />
      </div>
    </div>
  )
}

export default TimeUtils

const initialState = () => {
  const now = new Date()
  const initialFormat = "yyyy-MM-dd HH:mm:ss"
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  return {
    date: now,
    formatInput: initialFormat,
    timezoneInput: timeZone,
    datetimeInput: DateTime.fromJSDate(now)
      .setZone(timeZone)
      .toFormat(initialFormat),
    datetimeUtcInput: DateTime.fromJSDate(now).toUTC().toFormat(initialFormat),
    unixTimeInput: DateTime.fromJSDate(now).toSeconds(),
  }
}

const reducer = (state, action) => {
  let datetime
  switch (action.type) {
    case "format":
      datetime = DateTime.fromJSDate(state.date, { zone: state.timezoneInput })
      if (!datetime.isValid) {
        return {
          ...state,
          formatInput: action.payload,
        }
      }
      return {
        ...state,
        formatInput: action.payload,
        datetimeInput: datetime.toFormat(action.payload),
        datetimeUtcInput: datetime.toUTC().toFormat(action.payload),
      }
    case "datetime":
      datetime = DateTime.fromFormat(action.payload, state.formatInput, {
        zone: state.timezoneInput,
      })
      if (!datetime.isValid) {
        return {
          ...state,
          datetimeInput: action.payload,
        }
      }
      return {
        ...state,
        datetimeInput: action.payload,
        datetimeUtcInput: datetime.toUTC().toFormat(state.formatInput),
        unixTimeInput: datetime.toSeconds(),
      }
    case "utc":
      datetime = DateTime.fromFormat(action.payload, state.formatInput)
      if (!datetime.isValid) {
        return {
          ...state,
          datetimeUtcInput: action.payload,
        }
      }
      return {
        ...state,
        date: datetime.toJSDate() || state.date,
        datetimeUtcInput: action.payload,
        datetimeInput: datetime
          .setZone(state.timezoneInput)
          .toFormat(state.formatInput),
        unixTimeInput: datetime.toSeconds(),
      }
    case "unixtime":
      datetime = DateTime.fromSeconds(action.payload)
      if (!datetime.isValid) {
        return {
          ...state,
          unixTimeInput: action.payload,
        }
      }
      return {
        ...state,
        unixTimeInput: action.payload,
        datetimeUtcInput: datetime.toUTC().toFormat(state.formatInput),
        datetimeInput: datetime
          .setZone(state.timezoneInput)
          .toFormat(state.formatInput),
      }
    case "timezone":
      datetime = DateTime.fromJSDate(state.date).setZone(action.payload)
      if (!datetime.isValid) {
        return {
          ...state,
          timezoneInput: action.payload,
        }
      }
      return {
        ...state,
        timezoneInput: action.payload,
        datetimeInput: datetime.toFormat(state.formatInput),
      }
    default:
      return {
        ...state,
      }
  }
}

const timezones = () => {
  if (typeof Intl.supportedValuesOf === "undefined") {
    return []
  }
  return Intl.supportedValuesOf("timeZone")
}
